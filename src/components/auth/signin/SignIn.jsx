import { Button, Flex, Heading, Text, TextField } from '@radix-ui/themes';
import { Link } from 'react-router-dom';
import './SignIn.css'

/* ** Radix UI Styles.
*/
const contentWrapper = {
    direction: 'column',
    align: 'center',
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
export default function SignIn() {
    return (<>
        <Flex {...contentWrapper} className='contentWrapper'>
            <Heading as='h3' align='center' color='orange'>Inscription</Heading>
            <form action='/signin' method='post' className='signinForm'>
                <Flex {...formContent}>
                    <TextField.Input placeholder='Votre pseudo ou e-mail' />
                    <TextField.Input placeholder='Votre mot de passe' />
                    <TextField.Input placeholder='Votre mot de passe' />
                    <Button color='plum'>M'inscrire</Button>

                    <Text as='p' align='center' mt='5'>
                        Déjà inscrit ? <Link to='/auth'>Se connecter</Link>
                    </Text>
                </Flex>
            </form>
        </Flex>
    </>)
}
