import Head from "next/head";

import { ComposedEditor } from "../../lexical";

export default function Home() {
	return (
		<div>
			<Head>
				<title>dedit &middot; editor</title>
			</Head>
			<ComposedEditor />
		</div>
	);
}
