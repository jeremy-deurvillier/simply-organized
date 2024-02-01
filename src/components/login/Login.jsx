import { Button, Flex, Heading, TextField } from "@radix-ui/themes";
import HeaderLogo from "../header-logo/HeaderLogo";

export default function Login() {
    return (<>
        <HeaderLogo />
        
        <Flex direction="column" gap="3" p="4">
            <Heading as="h3" align="center" color="orange">Connexion</Heading>
            <form action="/login" method="post">
                <Flex direction="column" gap="3" p="7">
                    <TextField.Input placeholder="Votre e-mail ou identifiant" />
                    <TextField.Input placeholder="Votre mot de passe" />
                    <Button color="violet">Me connecter</Button>
                </Flex>
            </form>
        </Flex>
    </>)
}
