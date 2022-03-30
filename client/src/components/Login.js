import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import { reStyles } from "../reusableStyles";

export const Login = (props) => {
    return (
        <Box sx={{
            ...reStyles.flexContainer, bgcolor: 'primary.main', width: '100%', alignItems: 'center',
        }}>
            < Paper
                elevation={20}
                sx={{
                    padding: '20px',
                    minWidth: '300px',
                    width: '70%',
                    ml: '30px',
                    mr: '30px',
                }}>
                < Typography sx={{ fontSize: '3rem' }} >
                    Login
                </Typography >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Box sx={{ position: 'relative' }}>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button style={{ position: 'absolute', right: '30px' }} color='inherit' href=''>
                        <Typography sx={{ fontSize: '16px', textTransform: 'none' }} onClick={() => { props.setIsLoginScreen(!props.isLoginScreen) }}>New? Create an account!</Typography>
                    </Button>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Paper >
        </Box >
    )
}