import { Box, CardMedia } from '@mui/material';
import { useState } from 'react';
import homeSlope from '../assets/home/homeSlope.png';
import logoIcon from '../assets/logo-icon.png';
import logoTextFB from '../assets/logo-textFB.png';
import { Login } from '../components/account/Login';
import { SignUp } from '../components/account/SignUp';
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
                {isLoginScreen ? <Login setIsLoginScreen={setIsLoginScreen} isLoginScreen={isLoginScreen} /> : <SignUp setIsLoginScreen={setIsLoginScreen} isLoginScreen={isLoginScreen} />}
            </Box>
        </Box >
    )
}