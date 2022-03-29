import { Box } from '@mui/material';
// @ts-ignore
import homeSlope from '../assets/home/homeSlope.png';
// @ts-ignore
import logoIcon from '../assets/logo-icon.png';
// @ts-ignore
import logoTextFB from '../assets/logo-textFB.png';
import { Login } from '../components/Login';
import { reStyles } from '../reusableStyles';

export const Home = () => {

    return (
        <Box sx={{ ...reStyles.background, ...reStyles.flexContainer, flexDirection: ['column', , , 'row'] }}>
            <Box sx={{ ...reStyles.flexContainer, flexDirection: ['column', , 'row'], position: 'relative', maxWidth: '40%' }}>
                <img src={logoIcon} style={{ height: 'fit-content' }} alt='logo' />
                <img src={logoTextFB} style={{ height: '10vh' }} alt='logotest' />
            </Box>
            <Box sx={{ maxHeight: '101%', overflow: 'hidden', ...reStyles.flexContainer, alignItems: 'center' }}>
                <img src={homeSlope} alt='slope asset' style={{ height: '110%' }} />
                <Login />
            </Box>
        </Box >
    )
}