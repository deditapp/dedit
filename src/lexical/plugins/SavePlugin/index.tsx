import { useState } from "react";

import { Button } from "@chakra-ui/react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { getDocument, updateDocument } from "../../../api";
import { lexicalToBlocks } from "../../ast/lexicalToBlocks";
import { writeBlocksToState } from "../../ast/writeBlocksToState";

export const SavePlugin: React.FC = () => {
	const [editor] = useLexicalComposerContext();
	const [saving, setSaving] = useState(false);

	return (
		<>
			<Button
				isLoading={saving}
				onClick={async () => {
					setSaving(true);
					try {
						const rootBlock = await lexicalToBlocks(editor.getEditorState());
						await updateDocument("0", rootBlock);
					} catch (err) {
						console.error(err);
					}
					setSaving(false);
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
