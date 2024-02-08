import { Box, Button, Callout, Flex, Heading, TextField } from "@radix-ui/themes";
import HeaderLogo from "../header-logo/HeaderLogo";
import axios from "axios";
import { useState } from "react";
import { redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, setUser } from "../../features/AuthSlice";

export default function Login() {
    const count = useSelector(state => state.auth.value)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()

    function l(e) {
        e.preventDefault()

        const form = document.querySelector("#loginForm")
        const submitter = document.querySelector("button[type=submit]")
        const formData = new FormData(form, submitter)
        const user = {
            username: formData.get('username'),
            password: formData.get('password')
        }

        axios.post('http://simply-organized.dev.local/api/auth', user)
            .then(function (res) {

                if (res.status === 200) {
                    console.log(res.status)
                    setAuthSuccess(true)
                    dispatch(login(res.data.token))
                    dispatch(setUser(atob(res.data.token.split('.')[1])))
                    console.log(token)
                    console.log(user)

                    // return redirect("/user")
                    new Response("", {
                        status: 302,
                        headers: {
                            Location: "/user",
                        },
                    });
                }
            })
            .catch(function (err) {
                console.error(err)

                if (!err.response) {
                    setError({
                        code: err.code,
                        message: err.message
                    });
                    
                    return;
                }

                setError(err.response.data)
            })
    }

    const [username, setUsername] = useState('018d417f-a862-7cc0-89ca-0a2d4367796e')
    const [error, setError] = useState(null)
    const [authSuccess, setAuthSuccess] = useState(false)

    const errorWidth = {
        initial: '100%',
        sm: 'max-content'
    }

    const errorRight = {
        initial: 'auto',
        sm: '0'
    }

    const loginDirection = {
        initial: 'column',
        sm: 'row'
    }

    const loginHeight = {
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

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function showError() {
        if (error !== null) {
            return (<Box position="absolute" right={errorRight} width={errorWidth}>
                <Callout.Root color="plum" role="alert" variant="surface" highContrast m="2">
                    <Callout.Text>
                        {error.message || 'Une erreur est survenue.'}
                    </Callout.Text>
                </Callout.Root>
            </Box>)
        }

        return null;
    }

    if (authSuccess) redirect('/user')

    return (<>
        {showError()}
        <Flex height={loginHeight} direction={loginDirection} >
            <HeaderLogo />

            <Flex direction="column" align="center" justify='center' height='100%' width={contentWrapper} gap="3" p="4">
                <Heading as="h3" align="center" color="orange">Connexion</Heading>
                <form id="loginForm" method="post" style={formStyle}>
                    <Flex direction="column" gap="3" pt="7" width={formContentWidth}>
                        <TextField.Input name="username" value={username} onChange={handleUsernameChange} placeholder="Votre e-mail ou identifiant" />
                        <TextField.Input type="password" name="password" placeholder="Votre mot de passe" />
                        <Button type="submit" color="plum" onClick={l}>Me connecter</Button>
                    </Flex>
                </form>
            </Flex>
        </Flex>
    </>)
}
