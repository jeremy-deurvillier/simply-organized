import { Flex } from '@radix-ui/themes'
import './HeaderLogo.css'

export default function HeaderLogo() {
    const headerLogoWidth = {
        initial: '100%',
        sm: '50%'
    }

    return (
        <Flex justify='center' align='center' className='headerLogo' height="100%" width={headerLogoWidth}>
            <Flex justify='center' align='center' className='logoWrapper'>
                <img src='/assets/img/logo.svg' alt='Logo de Simply Organized' className='logo' />
            </Flex>
        </Flex>
    )
}
