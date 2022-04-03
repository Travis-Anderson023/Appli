import { useMutation } from '@apollo/client';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import { differenceInCalendarDays } from 'date-fns';
import React, { useState } from 'react';
import { Avatar, Box, Button, ListItem, ListItemAvatar, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { format } from 'date-fns';
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
        console.log(selectedCompany._id);
        console.log(company._id);
        console.log(indexToChange);

        if (company._id != selectedCompany._id) {
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
        console.log(days);
        switch (true) {
            //greater than 30 days
            case days >= 30:
                return 'error';
            //less than 30 days
            case days < 30 && days > 10:
                return 'warning';
            //less than 10 days
            case days <= 10:
                return 'success';
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
                    height: '100%',
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
                sx={{ height: '100%', borderRadius: '0 10px 10px 0' }}
                color='error'
                variant='contained'>
                <DeleteIcon />
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