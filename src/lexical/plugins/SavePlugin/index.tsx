import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { getDocument, saveDocument } from "../../../api";
import { lexicalToBlocks } from "../../ast/lexicalToBlocks";
import { writeBlocksToState } from "../../ast/writeBlocksToState";
import { Button } from "./styles";

export const SavePlugin: React.FC = () => {
	const [editor] = useLexicalComposerContext();

	return (
		<>
			<Button
				onClick={async () => {
					const rootBlock = await lexicalToBlocks(editor.getEditorState());
					await saveDocument("0", rootBlock);
				}}
			>
				Save
			</Button>
			<Button
				onClick={async () => {
					const { data } = await getDocument("0");
					writeBlocksToState(editor, data);
				}}
			>
				Load
			</Button>
		</>
	);
};
