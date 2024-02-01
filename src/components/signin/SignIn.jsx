import { Button, Flex, Heading, TextField } from "@radix-ui/themes";
import HeaderLogo from "../header-logo/HeaderLogo";

export default function SignIn() {
    return (<>
        <HeaderLogo />
        
        <Flex direction="column" gap="3" p="3">
            <Heading as="h3" align="center" color="orange">Inscription</Heading>
            <form action="/login" method="post">
                <Flex direction="column" gap="3" mx="3" p="4">
                    <TextField.Input placeholder="Votre pseudo ou e-mail" />
                    <TextField.Input placeholder="Votre mot de passe" />
                    <TextField.Input placeholder="Votre mot de passe" />
                    <Button color="violet">M'inscrire</Button>
                </Flex>
            </form>
        </Flex>
    </>)
}
