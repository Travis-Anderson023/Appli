import { useMutation } from '@apollo/client';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, ListItem, ListItemAvatar, Typography } from "@mui/material";
import { differenceInCalendarDays, format } from 'date-fns';
import React, { useState } from 'react';
import { DELETE_APPLICATION } from '../../utils/mutations';

export const CompanySelector = ({ company, newCompany, selectedCompany, setSelectedCompany, indexToChange, setApplications, index }) => {

    const [deleteApplication] = useMutation(DELETE_APPLICATION);

    const [message, setMessage] = useState('');
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');

        if (company._id !== selectedCompany._id) {
            setMessage("Please select the application you would like to delete prior to deleting!")
            setOpen(true);
        }

        if (company._id === selectedCompany._id) {
            if (id) {
                try {
                    const { data } = await deleteApplication({
                        variables: { applicationId: id },
                    });
                    setApplications(applications => applications.filter((_, i) => i !== indexToChange));
                    setSelectedCompany({ ...newCompany })
                } catch (e) {
                    console.error(e)
                }
            }
        }
    };

    const getTimeColor = (days) => {
        switch (true) {
            //greater than 30 days
            case days >= 30:
                return 'error';
            //less than 30 days
            case days < 30 && days > 10:
                return 'warning';
            //less than 10 days
            case days <= 10:
                return 'primary';
            default:
                return 'inherit';
        }

    }

    return (
        <ListItem sx={{ display: 'flex' }} >
            <Button variant='contained'
                sx={{
                    borderRadius: '10px 0 0 10px',
                    alignItems: 'flex-start',
                    height: '36px',
                    width: '100%',
                    justifyContent: 'space-between'
                }}
                color={getTimeColor(differenceInCalendarDays(new Date(), new Date(company.response)))}

                onClick={() => setSelectedCompany({ ...company })}
            >
                <Box sx={{ display: 'flex' }}>
                    <ListItemAvatar>
                        <Avatar sx={{ height: '25px', width: '25px' }}>
                            <WorkIcon sx={{ width: '60%' }} />
                        </Avatar >
                    </ListItemAvatar>
                    <Typography
                        sx={{ width: '28vw' }}
                        noWrap
                        variant='h10'
                    >
                        {company.company}
                    </Typography>
                </Box>
                <Typography sx={{ ml: '10px' }}>{format(new Date(company.date_applied), 'MM/dd')}</Typography>
            </Button>
            <Button
                edge="end"
                aria-label="delete"
                data-id={company._id}
                onClick={(event) => { handleFormSubmit(event) }}
                sx={{ height: '36px', borderRadius: '0 10px 10px 0' }}
                color='error'
                variant='contained'>
                Delete
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
        </ListItem >
    )
}