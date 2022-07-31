import Head from "next/head";

import { ComposedEditor } from "../../lexical";

export default function EditDocument() {
	return (
		<div>
			<Head>
				<title>dedit &middot; editor</title>
			</Head>
			<ComposedEditor />
		</div>
	);
}
