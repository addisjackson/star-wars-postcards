import React from "react";
import { Stack, SimpleGrid, Button, Heading, Text, VStack, useBreakpointValue, Center } from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function Hero() {
	return (
		<SimpleGrid
			w={"full"}
			h={"100vh"}
			backgroundImage={
				"url(https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
			}
			backgroundSize={"cover"}
			backgroundPosition={"center center"}>
			<VStack
				w={"full"}
				justify={"center"}
				px={useBreakpointValue({ base: 4, md: 8 })}>
				<Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
					<Center>
						<Heading as='h1' className="hero-heading">Star Wars Postcards</Heading>
					</Center>
					<Center>
						<Text 
							color={"white"}
							fontWeight={700}
							lineHeight={1.2}
							fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}>
						Your Premium Venue for All Your Interstellar Communication Needs
						</Text>
					</Center>
						<Stack direction={ "row" }>
					<Center>
							<Button
							className="hero-button"
							bg={"blue.400"}
							rounded={"full"}
							color={"black"}
							_hover={{ bg: "white.500" }}>
							<Link to='/postcards'>The Force Awaits You!</Link>
						</Button>
					</Center>
					</Stack>
				</Stack>
			</VStack>
		</SimpleGrid>
	);
}

export default Hero;
