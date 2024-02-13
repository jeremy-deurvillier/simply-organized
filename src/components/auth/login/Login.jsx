import { Box, Button, Callout, Flex, Heading, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { useState } from "react";
import { Link, redirect } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { login, setUser } from "../../../features/AuthSlice";
import './Login.css'

/* ** Radix UI Styles.
*/
const contentWrapper = {
    direction: "column",
    align: "center",
    justify: 'center',
    height: { initial: '50%', sm: '100%' },
    width: { initial: '100%', sm: '50%' },
    gap: '3',
    p: '4'
}

const formContent = {
    direction: 'column',
    gap: '3',
    pt: '7',
    width: { initial: 'max-content', sm: '100%' }
}

/* ** Rendering.
*/
export default function Login() {
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
        <Flex {...contentWrapper}>
            <Heading as="h3" align="center" color="orange">Connexion</Heading>
            <form id="loginForm" method="post" className='loginForm'>
                <Flex {...formContent}>
                    <TextField.Input name="username" value={username} onChange={handleUsernameChange} placeholder="Votre e-mail ou identifiant" />
                    <TextField.Input type="password" name="password" placeholder="Votre mot de passe" />
                    <Button type="submit" color="plum" onClick={l}>Me connecter</Button>

                    <Text as='p' align='center' mt='5'>
                        Pas de compte ? <Link to='/auth/new'>S'inscrire</Link>
                    </Text>
                </Flex>
            </form>
        </Flex>
    </>)
}
