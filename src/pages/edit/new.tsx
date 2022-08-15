import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Center, Heading, Spinner, VStack } from "@chakra-ui/react";

import { API } from "../../api";

export default function NewDocument() {
	const router = useRouter();

	useEffect(() => {
		(async () => {
			const result = await API.v1.createDocument().then((r) => r.data);
			router.push(`/edit/${result.id}`);
		})();
	}, [router]);

	return (
		<>
			<Head>
				<title>dedit &middot; editor</title>
			</Head>
			<Center height="100vh">
				<VStack spacing={10}>
					<Spinner size="xl" />
					<Heading size="md">Creating a new document...</Heading>
				</VStack>
			</Center>
		</>
	);
}
