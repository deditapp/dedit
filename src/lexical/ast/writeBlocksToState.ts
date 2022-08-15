import {
	$createParagraphNode,
	$createTextNode,
	$getRoot,
	ElementNode,
	LexicalEditor,
	LexicalNode,
} from "lexical";

import { AnyBlock, BlockType, RootBlock } from "@dedit/models/dist/v1";

import { hasChildren } from "./common";

/**
 * Convert a Dedit document into Lexical editor state.
 */
export const writeBlocksToState = (editor: LexicalEditor, rootBlock: RootBlock) => {
	editor.update(() => {
		// get and empty the root node.
		const rootNode = $getRoot();
		rootNode.clear();
		// recursively build children
		rootBlock.children.forEach((block) => createBlockAndAppend(rootNode, block));
	});
};

const createBlockAndAppend = (parent: ElementNode, block: AnyBlock) => {
	let node: LexicalNode;
	switch (block.type) {
		case BlockType.Paragraph:
			node = $createParagraphNode();
			break;
		case BlockType.Text:
			node = $createTextNode(block.data.content);
			break;
		default:
			throw new TypeError("Unknown block type");
	}
	// append to parent node
	parent.append(node);
	// recursively add children
	if (!hasChildren(block)) {
		return;
	}
	block.children.forEach((child) => createBlockAndAppend(node as ElementNode, child));
};
