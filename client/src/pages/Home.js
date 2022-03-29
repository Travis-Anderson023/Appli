import { Box } from '@mui/material';
import { Login } from '../components/Login';
import { reStyles } from '../reusableStyles';

export const Home = () => {
    const styles = {
        svg: {
            transform: 'rotate(90deg)',
            position: 'relative',
            height: '100vh',
            width: '100vh',
            //shows top half of image
            objectFit: 'cover',
            objectPosition: '50% 50%',

        }
    }

    return (
        <Box sx={{ ...reStyles.background, ...reStyles.flexContainer }}>
            <Box sx={{ flex: 1, bgcolor: 'background.default' }} >

            </Box>
            <Box sx={{ ...styles.svg }}>
                <svg style={{ display: "block" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 320">
                    <path fill="#f44336" fill-opacity="1" d="M0,96L48,117.3C96,139,192,181,288,197.3C384,213,480,203,576,218.7C672,235,768,277,864,298.7C960,320,1056,320,1152,298.7C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>

                </svg>
            </Box>
            <Login />
        </Box>
    )
}