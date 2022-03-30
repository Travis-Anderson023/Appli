import { CardMedia, MenuItem, TextField, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import logoTextBlack from '../../assets/logo-textBlack.png';

export const Nav = (props) => {
    return (
        <AppBar position="static" color='primary' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => window.location = '/'}>
                    <CardMedia component='img' src={logoTextBlack} sx={{ height: '30px' }} />
                </IconButton>
                <MenuItem onClick={() => window.location = '/applications'}>
                    <Typography textAlign="center">Applications</Typography>
                </MenuItem>
                <MenuItem onClick={() => window.location = '/Account'}>
                    <Typography textAlign="center">Account</Typography>
                </MenuItem>
                {window.location.pathname === '/applications' ? <TextField
                    label="Search"
                    id="filled-size-small"
                    placeholder='Search for an application'
                    variant="filled"
                    size="small"
                    onChange={(e) => props.setAppFilter(e.target.value)}
                /> : undefined}

            </Toolbar>
            <MenuItem onClick={() => console.log('logout')}>
                <Typography textAlign="center">Logout</Typography>
            </MenuItem>
        </AppBar>
    )
}