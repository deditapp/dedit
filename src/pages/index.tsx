import Head from "next/head";

import LexicalComposer from "@lexical/react/LexicalComposer";
import LexicalContentEditable from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import LexicalRichTextPlugin from "@lexical/react/LexicalRichTextPlugin";

import { ToolbarPlugin } from "../lexical/plugins/ToolbarPlugin";

export default function Home() {
	return (
		<div>
			<Head>
				<title>dedit &middot; editor</title>
			</Head>
			<LexicalComposer initialConfig={{ onError: console.error }}>
				<ToolbarPlugin />
				<LexicalRichTextPlugin
					contentEditable={<LexicalContentEditable />}
					placeholder={<div>Enter some text...</div>}
				/>
				<HistoryPlugin />
			</LexicalComposer>
		</div>
	);
}
