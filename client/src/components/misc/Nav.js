import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import { BottomNavigation, BottomNavigationAction, CardMedia, MenuItem, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom';
import logoTextBlack from '../../assets/logo-textBlack.png';
import logoTextWhite from '../../assets/logo-textWhite.png';
import auth from '../../utils/auth';

export const Nav = (props) => {
    const navigate = useNavigate();

    const styles = {
        botNavAction: {
            color: 'text.primary',
            '&& .Mui-selected': {
                color: 'text.primary',
            }
        }
    }

    if (props.isSmOrUp) {
        return (
            <AppBar position="static" color='primary' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Toolbar variant="dense">
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu" sx={{ mr: 2 }}
                        onClick={() => window.location = '/'}
                    >
                        <CardMedia
                            component='img'
                            src={logoTextWhite}
                            sx={{
                                height: '30px'
                            }}
                        />
                    </IconButton>
                    <MenuItem onClick={() => { navigate('/applications') }}>
                        <Typography textAlign="center" sx={{color:"white"}}>Applications</Typography>
                    </MenuItem>
                    <MenuItem onClick={() => { navigate('/account') }}>
                        <Typography textAlign="center" sx={{color:"white"}}>Account</Typography>
                    </MenuItem>
                </Toolbar>
                <MenuItem onClick={() => auth.logout()}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
            </AppBar>
        )
    } else {
        return (
            <BottomNavigation
                sx={{ bgcolor: 'primary.main', height: '65px' }}
                showLabels
                color='primary'
                value={props.page}
                onChange={(event, newValue) => {
                    //dont want logout to have a page value
                    if (newValue !== 3) {
                        props.setPage(newValue);
                    }
                }}
            >
                <BottomNavigationAction sx={{ ...styles.botNavAction, transform: 'scale(85%)' }} label="Home" icon={<HomeIcon sx={styles.botNavAction} />} onClick={() => navigate('/')} />
                <BottomNavigationAction sx={{ ...styles.botNavAction, transform: 'scale(85%)' }} label="Applications" icon={<ContentPasteIcon sx={styles.botNavAction} />} onClick={() => { navigate('/applications') }} />
                <BottomNavigationAction sx={{ ...styles.botNavAction, transform: 'scale(85%)' }} label="Account" icon={<AccountCircleIcon sx={styles.botNavAction} />} onClick={() => { navigate('/account') }} />
                <BottomNavigationAction sx={{ ...styles.botNavAction, transform: 'scale(85%)' }} label="Logout" icon={<LogoutIcon sx={styles.botNavAction} />} onClick={() => auth.logout()} />
            </BottomNavigation >
        )
    }
}