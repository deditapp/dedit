import { HStack } from "@chakra-ui/react";
import LexicalComposer from "@lexical/react/LexicalComposer";
import LexicalContentEditable from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalRichTextPlugin from "@lexical/react/LexicalRichTextPlugin";

import { SavePlugin } from "./plugins/SavePlugin";
import { ToolbarPlugin } from "./plugins/ToolbarPlugin";

export const ComposedEditor = () => (
	<LexicalComposer initialConfig={{ onError: console.error }}>
		<HStack>
			<ToolbarPlugin />
			<SavePlugin />
		</HStack>
		<LexicalRichTextPlugin
			contentEditable={<LexicalContentEditable />}
			placeholder={<div>Enter some text...</div>}
		/>
		<HistoryPlugin />
	</LexicalComposer>
);
