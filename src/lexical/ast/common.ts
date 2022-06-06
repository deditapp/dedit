import { AnyBlock, Block, BlockType, RootBlock, WithChildren } from "@dedit/models/dist/v1";

/**
 * Test if this block has children.
 */
export const hasChildren = <T extends Block>(block: T): block is WithChildren<T> => {
	switch (block.type) {
		case BlockType.Root:
		case BlockType.Paragraph:
			return true;
		default:
			return false;
	}
};

export const hasData = <T extends Block>(block: T): block is T & { data: any } => {
	switch (block.type) {
		case BlockType.Text:
			return true;
		default:
			return false;
	}
};

/**
 * Test if the target block is a root block.
 */
export const isRootBlock = (block: AnyBlock): block is RootBlock => {
	return block.type === BlockType.Root;
};

/**
 * Convert a lexical node type into Dedit `BlockType`.
 */
export const lexicalTypeToBlockType = (type: string): BlockType => {
	switch (type) {
		case "root":
			return BlockType.Root;
		case "paragraph":
			return BlockType.Paragraph;
		case "text":
			return BlockType.Text;
		default:
			throw new TypeError("Unknown block type");
	}
};
