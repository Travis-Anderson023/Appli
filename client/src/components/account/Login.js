import { useMutation } from '@apollo/client';
import { Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { reStyles } from "../../reusableStyles";
import Auth from '../../utils/auth';
import { LOGIN } from '../../utils/mutations';


export const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN);

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            console.log(data);
            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <Box sx={{
            ...reStyles.flexContainer, bgcolor: 'primary.main', width: '100%', alignItems: 'center',
        }} component='form'>
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
                    type="email"
                    autoComplete='false'
                    value={formState.email}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    type="password"
                    autoComplete='false'
                    value={formState.password}
                    onChange={handleChange}
                />
                <Box sx={{ position: 'relative' }}>
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                    <Button style={{ position: 'absolute', padding: 0, right: 0 }} color='inherit'>
                        <Typography sx={{ fontSize: '16px', textTransform: 'none', m: '9px', mr: '0px' }}
                            onClick={() => { props.setIsLoginScreen(!props.isLoginScreen) }}>Need an account?</Typography>
                    </Button>
                </Box>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 3, mb: 2 }}
                    onClick={(event) => { handleFormSubmit(event) }}
                >
                    Sign In
                </Button>
            </Paper >
        </Box >
    )
}