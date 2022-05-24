import { EditorState, ElementNode, LexicalNode } from "lexical";

import { AnyBlock, Block, RootBlock } from "@dedit/models/dist/v1";

import { hasChildren, hasData, isRootBlock, lexicalTypeToBlockType } from "./common";

type NodeTree = { node: ElementNode | LexicalNode; children: { [x: string]: NodeTree } };

/**
 * Check if a node is an element node.
 * @param node
 * @returns
 */
const nodeIsElementNode = (node: any): node is ElementNode => {
	return node instanceof ElementNode;
};

/**
 * Cast `node` to an `ElementNode`.
 * @param node The node to cast.
 * @returns An `ElementNode`
 * @throws TypeError if `node` is not an `ElementNode`.
 */
const castToElementNode = (node: any): ElementNode => {
	if (nodeIsElementNode(node)) {
		return node;
	}
	throw new TypeError("Not an element node");
};

/**
 * Convert the Lexical editor state into its AST.
 */
const stateToAst = (state: EditorState): NodeTree => {
	// get node array
	const nodes = Array.from(state._nodeMap.values());
	const rootNode = nodes.find((v) => v.__key === "root");
	// check if root exists
	if (!rootNode) {
		throw new Error("No root node found");
	}
	// create tree
	const root = { node: castToElementNode(rootNode), children: {} };
	// utility function to build node tree
	const buildTree = (node: NodeTree) => {
		const children = nodeIsElementNode(node.node)
			? node.node.getChildren()
			: ([] as (ElementNode | LexicalNode)[]);
		children.forEach((child) => {
			const childNode: NodeTree = { node: child, children: {} };
			// recursively add children
			buildTree(childNode);
			// add this node to the parent
			node.children[child.__key] = childNode;
		});
		return node;
	};
	// build tree
	return buildTree(root);
};

/**
 * Convert the Lexical AST into Dedit blocks.
 */
const astToBlocks = (ast: NodeTree): RootBlock => {
	const buildTree = (node: NodeTree): AnyBlock => {
		const type = lexicalTypeToBlockType(node.node.__type);
		const block: Block = {
			type,
		};
		// recursively add children
		if (hasChildren(block)) {
			block.children = Object.values(node.children).map(buildTree);
		}
		// if there is data, add it
		if (hasData(block)) {
			block.data = node.node.getTextContent();
		}
		return block as AnyBlock;
	};
	// assert root is actually the root
	const root = buildTree(ast);
	if (!isRootBlock(root)) {
		throw new TypeError("Root block not found");
	}
	return root;
};

/**
 * Convert Lexical editor state into Dedit blocks.
 */
export const lexicalToBlocks = async (state: EditorState): Promise<RootBlock> =>
	new Promise((resolve, reject) =>
		state.read(() => {
			const ast = stateToAst(state);
			const blocks = astToBlocks(ast);
			resolve(blocks);
		})
	);
