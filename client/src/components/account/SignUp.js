/* eslint-disable no-useless-escape */
import { useMutation } from '@apollo/client';
import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Paper, TextField, Typography } from "@mui/material";
import React, { useState } from 'react';
import { reStyles } from "../../reusableStyles";
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';


export const SignUp = (props) => {
    const [formState, setFormState] = useState({
        username: '',
        email: '',
        password: '',
        confirm_password: ''
    });

    const [addUser] = useMutation(ADD_USER);
    const [message, setMessage] = useState('');

    // update state based on form input changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    //alerthandler??
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!formState.password || !formState.confirm_password || !formState.email || !formState.username) {
            setMessage("One or more field needs to be filled")
            setOpen(true);
        } else if (!formState.email.match(/.+@.+\..+/)) {
            setMessage("Please check your email format")
            setOpen(true);
        } else if (formState.password.length < 5) {
            setMessage("Your password needs to be at least 5 characters long")
            setOpen(true);
        } else if (formState.password !== formState.confirm_password) {
            setMessage("Your passwords are not matching")
            setOpen(true);
        } else {
            try {
                setOpen(false);
                const { data } = await addUser({
                    variables: { ...formState },
                });
                Auth.login(data.addUser.token);
            } catch (e) {
                setMessage("Username or email is already in use")
                setOpen(true);
                console.error(e);
            }
        }
    }

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
                    transform: ['scale(.6)', 'scale(.75)', 'scale(1)'], mb: ['-160px', '0px']
                }}>
                < Typography sx={{ fontSize: '3rem' }} >
                    Signup
                </Typography >
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="Username"
                    label="Username"
                    name="username"
                    type="username"
                    value={formState.name}
                    onChange={handleChange}
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    type="email"
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="confirm_password"
                    label="Confirm Password"
                    name="confirm_password"
                    type="password"
                    autoComplete='false'
                    value={formState.confirm_password}
                    onChange={handleChange}
                />
                <Button style={{ padding: 0 }} color='inherit'>
                    <Typography sx={{ fontSize: '16px', textTransform: 'none', m: '9px', mr: '0px' }} onClick={() => { props.setIsLoginScreen(!props.isLoginScreen) }}>Have an account?</Typography>
                </Button>
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
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-describedby="alert-dialog-description"
                    aria-labelledby="alert-dialog-title"
                >
                    <DialogTitle sx={{ color: 'error.main' }} id="alert-dialog-title">
                        {"Oops!"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            {message}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='error' onClick={handleClose}>Close</Button>
                    </DialogActions>
                </Dialog>
            </Paper >
        </Box >
    )
};
