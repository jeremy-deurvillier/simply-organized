import { Flex } from '@radix-ui/themes'
import './HeaderLogo.css'

export default function HeaderLogo() {
    const wrapper = {
        justify: 'center',
        align: 'center',
        height: {initial: '50vh', sm: '100%'},
        width: {initial: '100vw', sm: '50%'}
    }

    return (
        <Flex {...wrapper} className='headerLogo'>
            <Flex justify='center' align='center' className='logoWrapper'>
                <img src='/assets/img/logo.svg' alt='Logo de Simply Organized' className='logo' />
            </Flex>
        </Flex>
    )
}
