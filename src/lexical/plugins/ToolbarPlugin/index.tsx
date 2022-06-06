import {
	CAN_REDO_COMMAND,
	CAN_UNDO_COMMAND,
	COMMAND_PRIORITY_CRITICAL,
	REDO_COMMAND,
	UNDO_COMMAND,
} from "lexical";
import { useEffect, useState } from "react";
import {
	AiOutlineAlignCenter,
	AiOutlineAlignLeft,
	AiOutlineAlignRight,
	AiOutlineBold,
	AiOutlineItalic,
	AiOutlineRedo,
	AiOutlineStrikethrough,
	AiOutlineUnderline,
	AiOutlineUndo,
} from "react-icons/ai";
import { BsJustify } from "react-icons/bs";

import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";

import { Divider, ToolbarButton, ToolbarButtonGroup, ToolbarContainer } from "./styles";

export const ToolbarPlugin: React.FC = () => {
	const [canUndo, setCanUndo] = useState(false);
	const [canRedo, setCanRedo] = useState(false);
	const [editor] = useLexicalComposerContext();

	// undo and redo
	useEffect(() => {
		return mergeRegister(
			editor.registerCommand(
				CAN_UNDO_COMMAND,
				(payload: boolean) => {
					setCanUndo(payload);
					return false;
				},
				COMMAND_PRIORITY_CRITICAL
			),
			editor.registerCommand(
				CAN_REDO_COMMAND,
				(payload: boolean) => {
					setCanRedo(payload);
					return false;
				},
				COMMAND_PRIORITY_CRITICAL
			)
		);
	}, [editor]);

	return (
		<ToolbarContainer>
			<ToolbarButtonGroup>
				<ToolbarButton
					disabled={!canUndo}
					onClick={() => {
						editor.dispatchCommand(UNDO_COMMAND, undefined);
					}}
				>
					<AiOutlineUndo size={20} />
				</ToolbarButton>
				<ToolbarButton
					disabled={!canRedo}
					onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
				>
					<AiOutlineRedo size={20} />
				</ToolbarButton>
			</ToolbarButtonGroup>
			<Divider />
			<ToolbarButtonGroup>
				<ToolbarButton>
					<AiOutlineBold size={20} />
				</ToolbarButton>
				<ToolbarButton>
					<AiOutlineItalic size={20} />
				</ToolbarButton>
				<ToolbarButton>
					<AiOutlineUnderline size={20} />
				</ToolbarButton>
				<ToolbarButton>
					<AiOutlineStrikethrough size={20} />
				</ToolbarButton>
			</ToolbarButtonGroup>
			<Divider />
			<ToolbarButtonGroup>
				<ToolbarButton>
					<AiOutlineAlignLeft size={20} />
				</ToolbarButton>
				<ToolbarButton>
					<AiOutlineAlignCenter size={20} />
				</ToolbarButton>
				<ToolbarButton>
					<AiOutlineAlignRight size={20} />
				</ToolbarButton>
				<ToolbarButton>
					<BsJustify size={20} />
				</ToolbarButton>
			</ToolbarButtonGroup>
		</ToolbarContainer>
	);
};
