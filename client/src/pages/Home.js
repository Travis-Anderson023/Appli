import { Box, CardMedia, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import homeSlope from '../assets/home/homeSlope.png';
import HomeSlopeHoriz from '../assets/home/homeSlopeHoriz.png';
import logoIcon from '../assets/logo-icon.png';
import logoTextFB from '../assets/logo-textFB.png';
import { Login } from '../components/account/Login';
import { SignUp } from '../components/account/SignUp';
import { reStyles } from '../reusableStyles';

export const Home = () => {
    const [isLoginScreen, setIsLoginScreen] = useState(true);

    return (
        <Box sx={{ ...reStyles.background, ...reStyles.flexContainer, flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'] }}>
            <Box sx={{ ...reStyles.flexContainer, flexDirection: ['column', 'column', 'row'], position: 'relative', maxWidth: '40%', transform: ['scale(.7)', 'scale(.7)', 'scale(1)'], mt: ['-50px', '-50px', '0px'], ml: ['0px', '0px', '0px', '20px'] }}>
                <img src={logoIcon} style={{ height: ['10px', '20%', '20%', 'fit-content'] }} alt='logo' />
                <img src={logoTextFB} style={{ height: '10vh' }} alt='logotest' />
            </Box>
            <Box sx={{ maxHeight: '100%', overflow: ['visible', 'visible', 'visible', 'hidden'], ...reStyles.flexContainer, alignItems: 'center', flexDirection: ['column-reverse', 'column-reverse', 'column-reverse', 'row'] }}>
                <CardMedia component='img' src={useMediaQuery((theme) => theme.breakpoints.up('lg')) ? homeSlope : HomeSlopeHoriz} alt='slope asset'
                    sx={{
                        height: ['200px', '200px', '200px', '100%'],
                        display: 'block',
                        width: ['100%', '100%', '100%', '200px'],
                    }} />
                {isLoginScreen ? <Login setIsLoginScreen={setIsLoginScreen} isLoginScreen={isLoginScreen} /> : <SignUp setIsLoginScreen={setIsLoginScreen} isLoginScreen={isLoginScreen} />}
            </Box>
        </Box >
    )
}