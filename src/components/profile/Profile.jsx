import { Avatar, Box, Flex, Grid, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <Flex direction="column" align="center" p="3">
        <Avatar color="orange" radius="full" size="7" fallback="J" />
        <Text as="p" color="plum" size="7" weight="bold">Jejerem</Text>
        <Flex direction="row">
            <Box my="5" mx="2">
                <Text as="p" color="plum" size="7" weight="bold" align="center">17</Text>
                <Text as="p" color="plum" size="5" weight="bold" align="center">projets</Text>
            </Box>
            <Box my="5" mx="2">
                <Text as="p" color="plum" size="7" weight="bold" align="center">5</Text>
                <Text as="p" color="plum" size="5" weight="bold" align="center">événem.</Text>
            </Box>
            <Box my="5" mx="2">
                <Text as="p" color="plum" size="7" weight="bold" align="center">28</Text>
                <Text as="p" color="plum" size="5" weight="bold" align="center">act. valid.</Text>
            </Box>
        </Flex>

        <Grid columns="2" gap="0" height="100%">
            <Box height="8" align="center">
                <Link>Statistiques</Link>
            </Box>
            <Box height="8" align="center">
                <Link>Éditer mon profil</Link>
            </Box>
            <Box height="8" align="center">
                <Link>Modifier mon mot de passe</Link>
            </Box>
            <Box height="8" align="center">
                <Link>Supprimer mon compte</Link>
            </Box>
        </Grid>
    </Flex>
  )
}
