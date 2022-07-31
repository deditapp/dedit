import {
	$createParagraphNode,
	$createTextNode,
	$getRoot,
	ElementNode,
	LexicalEditor,
	LexicalNode,
} from "lexical";

import { Block, BlockType, RootBlock } from "@dedit/models/dist/v1";

import { hasChildren } from "./common";

/**
 * Convert a Dedit document into Lexical editor state.
 */
export const writeBlocksToState = (editor: LexicalEditor, rootBlock: RootBlock) => {
	editor.update(() => {
		// get and empty the root node.
		const rootNode = $getRoot();
		rootNode.clear();
		// do not update if there are no revisions
		if (rootBlock.children.length === 0) {
			return;
		}
		rootBlock.children.forEach((block) => createBlockAndAppend(rootNode, block));
	});
};

const createBlockAndAppend = (parent: ElementNode, block: Block) => {
	let node: LexicalNode;
	switch (block.type) {
		case BlockType.Paragraph:
			node = $createParagraphNode();
			break;
		case BlockType.Text:
			node = $createTextNode();
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
