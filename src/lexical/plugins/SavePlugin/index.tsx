import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { lexicalToBlocks } from "../../ast/lexicalToBlocks";
import { Button } from "./styles";

export const SavePlugin: React.FC = () => {
	const [editor] = useLexicalComposerContext();

	return (
		<Button
			onClick={() => {
				lexicalToBlocks(editor.getEditorState());
			}}
		>
			Save
		</Button>
	);
};
