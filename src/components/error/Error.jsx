import { Box, Em, Flex, Heading, Text } from "@radix-ui/themes"
import { Link, useRouteError } from "react-router-dom"
import '../../styles.css'

export default function Error() {
    const error = useRouteError()

    return (
        <Flex direction='column' justify='between' className='viewport-height-full'>
            <Flex justify='center' align='center' className='viewport-height-medium'>
                LOGO
            </Flex>
            <Flex direction='column' justify='between' align='center' className='viewport-height-medium'>
                <Box py='3'>
                    <Heading as='h1' hidden>Simply Organized</Heading>
                    <Heading as='h2'>Erreur</Heading>
                </Box>
                <Box>
                    <Text as='p' align='center'>Oups ! Une erreur s'est produite.</Text>
                    <Text as='p' align='center'>
                        Essayez de revenir à la <Link to='/'>page d'accueil</Link>.
                    </Text>
                </Box>
                <Box py='1'>
                    <Text as='p' align='center'>
                        <Em>
                            Statut : {error.statusText.toLowerCase() || error.message.toLowerCase()}
                        </Em>
                    </Text>
                </Box>
            </Flex>
        </Flex>
    )
}
