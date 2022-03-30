import { Box, CardMedia } from '@mui/material';
import { useState } from 'react';
// @ts-ignore
import homeSlope from '../assets/home/homeSlope.png';
// @ts-ignore
import logoIcon from '../assets/logo-icon.png';
// @ts-ignore
import logoTextFB from '../assets/logo-textFB.png';
import { Login } from '../components/Login';
import { reStyles } from '../reusableStyles';

export const Home = () => {
    const [isLoginScreen, setIsLoginScreen] = useState(true);

    return (
        <Box sx={{ ...reStyles.background, ...reStyles.flexContainer, flexDirection: ['column', 'column', 'column', 'row'] }}>
            <Box sx={{ ...reStyles.flexContainer, flexDirection: ['column', 'column', 'row'], position: 'relative', maxWidth: '40%' }}>
                <img src={logoIcon} style={{ height: 'fit-content' }} alt='logo' />
                <img src={logoTextFB} style={{ height: '10vh' }} alt='logotest' />
            </Box>
            <Box sx={{ maxHeight: '100%', overflow: 'hidden', ...reStyles.flexContainer, alignItems: 'center', flexDirection: ['column', 'column', 'column', 'row'] }}>
                <CardMedia component='img' src={homeSlope} alt='slope asset' sx={{ height: '101%', display: ['none', 'none', 'none', 'block'], width: 'auto' }} />
                <Login setIsLoginScreen={setIsLoginScreen} isLoginScreen={isLoginScreen} />
            </Box>
        </Box >
    )
}