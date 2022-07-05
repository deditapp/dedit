import { NextPage } from "next";
import Link from "next/link";

import { AddIcon } from "@chakra-ui/icons";
import { Box, Button, Center, forwardRef, Heading, HStack, Text, VStack } from "@chakra-ui/react";

import { useRedirectIfNotLoggedIn } from "../hooks/redirectIfLoggedIn";
import { useAppSelector } from "../redux";

const PlaceholderDocumentItem: React.FC = forwardRef(() => (
	<Center width="100px" height="140px" border="1px solid #aaa" borderRadius="5px" cursor="pointer">
		<AddIcon color="#aaa" />
	</Center>
));

const TemplateDocuments: React.FC = () => {
	return (
		<VStack alignItems="start" width="100%" background="#eee" padding={8}>
			<Heading size="md">Start a new document</Heading>
			<HStack width="100%" flexFlow="column" alignItems="start" padding={2}>
				<Link href="/edit/new" passHref>
					<PlaceholderDocumentItem />
				</Link>
			</HStack>
		</VStack>
	);
};

const RecentDocuments: React.FC = () => {
	return (
		<VStack alignItems="start" width="100%" padding={8}>
			<Heading size="md">Recent Documents</Heading>
			<Center flexGrow={1} width="100%" minHeight="100px">
				<Text size="sm">You have no documents. Create one below for them to appear here!</Text>
			</Center>
		</VStack>
	);
};

const Home: NextPage = () => {
	const loggedIn = useAppSelector((state) => state.user.loggedIn);
	useRedirectIfNotLoggedIn();
	return (
		<>
			{loggedIn && (
				<VStack>
					<HStack height="60px" width="100%" padding="0 20px">
						<Box marginRight="auto">
							<Heading size="md">dedit</Heading>
						</Box>
						<Box>
							<Button colorScheme="blue" variant="solid">
								Login
							</Button>
						</Box>
					</HStack>
					<VStack alignItems="start" maxWidth="none" width="100%" spacing={0}>
						<TemplateDocuments />
						<RecentDocuments />
					</VStack>
				</VStack>
			)}
		</>
	);
};

export default Home;
