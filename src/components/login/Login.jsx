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

                    return redirect("/user")
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
                setError(err.response.data)
            })
    }

    const [username, setUsername] = useState('018d417f-a862-7cc0-89ca-0a2d4367796e')
    const [error, setError] = useState(null)
    const [authSuccess, setAuthSuccess] = useState(false)

    function handleUsernameChange(e) {
        setUsername(e.target.value)
    }

    function showError() {
        if (error !== null) {
            return (<Box position="absolute" width="100%">
                <Callout.Root color="plum" role="alert" variant="surface" highContrast m="2">
                    <Callout.Text>
                        {error.message}
                    </Callout.Text>
                </Callout.Root>
            </Box>)
        }

        return null;
    }

    if (authSuccess) redirect('/user')

    return (<>
        {showError()}

        <HeaderLogo />

        <Flex direction="column" gap="3" p="4">
            <Heading as="h3" align="center" color="orange">Connexion</Heading>
            <form id="loginForm" method="post">
                <Flex direction="column" gap="3" p="7">
                    <TextField.Input name="username" value={username} onChange={handleUsernameChange} placeholder="Votre e-mail ou identifiant" />
                    <TextField.Input type="password" name="password" placeholder="Votre mot de passe" />
                    <Button type="submit" color="plum" onClick={l}>Me connecter</Button>
                </Flex>
            </form>
        </Flex>
    </>)
}
