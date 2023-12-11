import React from 'react';
import { nanoid } from "nanoid";
import { Link } from 'react-router-dom';
import { LinkOverlay } from '@chakra-ui/react';
import { Card, CardBody } from "@chakra-ui/react";
function Postcard({postcard, id}) {
  return (
    <LinkOverlay as={Link} to='/postcards/:id'>
       <Card
        id={ nanoid( 4 ) }
				direction={{ base: "column", sm: "row" }}
				overflow='hidden'
				variant='outline'>
				<Image
					objectFit='cover'
					maxW={{ base: "100%", sm: "200px" }}
					src={postcard.image_url}
				/>

				<Stack>
					<CardBody>
						<Heading size='md'>{planet.name}</Heading>

						<Text py='2'>
							{planet.terrain}
            </Text>
            <Text py=''>
              {planet.population}
            </Text>
					</CardBody>
				</Stack>
			</Card>
    </LinkOverlay>
     
	);
}

export default Postcard