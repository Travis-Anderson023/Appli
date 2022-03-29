import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import { reStyles } from "../reusableStyles";

export const Login = () => {
    return (
        <Box sx={{
            flex: 1, minWidth: '300px', bgcolor: 'secondary.main', ...reStyles.flexContainer, height: '100%', alignItems: 'center'
        }}>
            < Paper
                elevation={20}
                sx={{
                    height: '400px',
                    transform: 'translate(-25%)',
                    padding: '20px',
                }}>
                {/* h1 */}
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
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
            </Paper >
        </Box >
    )
}