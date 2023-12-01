import { Flex } from '@radix-ui/themes'
import './HeaderLogo.css'

export default function HeaderLogo() {
    return (
        <Flex justify='center' align='center' className='headerLogo'>
            <Flex justify='center' align='center' className='logoWrapper'>
                <img src='/assets/img/logo.svg' alt='Logo de Simply Organized' className='logo' />
            </Flex>
        </Flex>
    )
}
