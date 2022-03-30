import { Button, CardMedia, TextField } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import logoTextBlack from '../../assets/logo-textBlack.png';

export const Nav = () => {
    return (
        <AppBar position="static" color='primary' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
            <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={() => window.location = '/'}>
                    <CardMedia component='img' src={logoTextBlack} sx={{ height: '30px' }} />
                </IconButton>
                <Button color="inherit" onClick={() => window.location = '/applications'}>
                    Applications
                </Button>
                <Button color="inherit" onClick={() => window.location = '/account'}>
                    Account
                </Button>
                <TextField
                    label="Search"
                    id="filled-size-small"
                    placeholder='Search for an application'
                    variant="filled"
                    size="small"
                />

            </Toolbar>
            <Button sx={{ width: '80px' }} color='inherit'>
                Logout
            </Button>
        </AppBar>
    )
}