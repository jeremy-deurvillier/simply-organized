import { Avatar, Box, Flex, Grid, Text } from "@radix-ui/themes";
import { Link } from "react-router-dom";
import { LuLineChart, LuPencil, LuKeyRound, LuShieldAlert } from "react-icons/lu";
import "./Profile.css";

/* ** Radix UI Styles.
*/
const statisticsContent = {
    direction: { initial: 'column', sm: 'row' },
    align: 'center',
    justify: 'center',
    gap: { sm: '9' },
    height: 'max-content',
    width: '100%',
    p: '3'
};

const statisticsDetailsText = {
    as: "p",
    size: { initial: 7, sm: 8 },
    weight: "bold",
    align: "center"
};

const statisticsDetailsLabel = {
    as: "p",
    size: { initial: 4, sm: 5 },
    weight: "bold",
    align: "center"
};

const iconButton = {
    color: '#9D53FF'
}

/* ** Rendering
*/
export default function Profile() {
    return (
        <Flex direction="column" align="center" className='profileContainer'>
            <Flex {...statisticsContent} className='statisticsContent'>
                <Flex direction='column' align='center' justify='center'>
                    <Avatar fallback='J' radius='full' size="7" m='3' className='avatar' />
                    <Text as='p' size='8' weight='bold' mt='1' mb='3' className='userAlias'>Jejerem</Text>
                </Flex>
                <Flex direction="row" className='statisticsDetails'>
                    <Box my="3" mx="2">
                        <Text {...statisticsDetailsText}>17</Text>
                        <Text {...statisticsDetailsLabel}>projets</Text>
                    </Box>
                    <Box my="3" mx="2">
                        <Text {...statisticsDetailsText}>5</Text>
                        <Text {...statisticsDetailsLabel}>événem.</Text>
                    </Box>
                    <Box my="3" mx="2">
                        <Text {...statisticsDetailsText}>28</Text>
                        <Text {...statisticsDetailsLabel}>act. valid.</Text>
                    </Box>
                </Flex>
            </Flex>

            <Grid columns="2" gap="0">
                <Link className='button'>
                    <LuLineChart {...iconButton} size={50} />
                    <Text>Statistiques</Text>
                </Link>
                <Link className='button'>
                    <LuPencil {...iconButton} size={46} />
                    <Text>Éditer mon profil</Text>
                </Link>
                <Link className='button'>
                    <LuKeyRound {...iconButton} size={44} />
                    <Text>Modifier mon mot de passe</Text>
                </Link>
                <Link className='button'>
                    <LuShieldAlert {...iconButton} size={44} />
                    <Text>Supprimer mon compte</Text>
                </Link>
            </Grid>
        </Flex>
    );
};
