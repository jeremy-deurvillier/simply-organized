import { Box, Flex } from '@radix-ui/themes'
import { Outlet } from 'react-router-dom'
import HeaderLogo from '../header-logo/HeaderLogo'
import './AuthLayout.css'

/* ** Radix UI Styles
*/
const wrapper = {
    direction: { initial: 'column', sm: 'row' },
    height: '100%'
}

/* ** Rendering
*/
export default function AuthLayout() {
    return (<Box className='authWrapper'>
        <Flex {...wrapper}>
            <HeaderLogo />

            <Outlet />
        </Flex>
    </Box>)
}
