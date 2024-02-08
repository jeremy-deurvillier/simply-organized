import { Button, Flex, Heading, TextField } from "@radix-ui/themes";
import HeaderLogo from "../header-logo/HeaderLogo";

export default function SignIn() {
    const signinDirection = {
        initial: 'column',
        sm: 'row'
    }

    const signinHeight = {
        initial: '100%'
    }

    const contentWrapper = {
        initial: '100%',
        sm: '50%'
    }

    const formContentWidth = {
        initial: 'max-content',
        sm: '100%'
    }

    const formStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '50%'
    }

    return (<>
        <Flex height={signinHeight} direction={signinDirection} >
            <HeaderLogo />

            <Flex direction="column" align="center" justify='center' height='100%' width={contentWrapper} gap="3" p="4">
                <Heading as="h3" align="center" color="orange">Inscription</Heading>
                <form action="/signin" method="post" style={formStyle}>
                    <Flex direction="column" gap="3" pt="7" width={formContentWidth}>
                        <TextField.Input placeholder="Votre pseudo ou e-mail" />
                        <TextField.Input placeholder="Votre mot de passe" />
                        <TextField.Input placeholder="Votre mot de passe" />
                        <Button color="plum">M'inscrire</Button>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    </>)
}
