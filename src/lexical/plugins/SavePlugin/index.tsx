import { useRouter } from "next/router";
import { useState } from "react";

import { Button } from "@chakra-ui/react";
import { DocumentDto } from "@dedit/api";
import { RootBlock } from "@dedit/models/dist/v1";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

import { API } from "../../../api";
import { lexicalToBlocks } from "../../ast/lexicalToBlocks";
import { writeBlocksToState } from "../../ast/writeBlocksToState";

export const SavePlugin: React.FC = () => {
	const router = useRouter();
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
						await API.v1.documentsControllerV1UpdateDocumentContent(
							router.query.id as string,
							rootBlock
						);
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
					const document: DocumentDto = await API.v1
						.documentsControllerV1FindOne(router.query.id as string)
						.then((r) => r.data);
					const { data } = await API.v1.documentsControllerV1FetchDocumentContent(document.id);
					writeBlocksToState(editor, data as unknown as RootBlock);
				}}
			>
				Load
			</Button>
		</>
	);
};
