import { useMutation } from '@apollo/client';
import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, ListItem, ListItemAvatar, Typography } from "@mui/material";
import { format } from 'date-fns';
import { DELETE_APPLICATION } from '../../utils/mutations';

export const CompanySelector = ({ company, setSelectedCompany }) => {

    const [deleteApplication] = useMutation(DELETE_APPLICATION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('data-id');
        console.log("hi", id);
        if (id) {
            console.log("hi", id);
            try {
                const { data } = await deleteApplication({
                    variables: { applicationId: id },
                });
                console.log(data.user);
            } catch (e) {
                console.error(e)
            }
        }
    };

    return (
        <ListItem sx={{ display: 'flex' }} >
            <Button color='inherit' variant='contained'
                sx={{
                    borderRadius: '10px 0 0 10px',
                    alignItems: 'flex-start',
                    height: '100%',
                    width: '100%',
                    justifyContent: 'space-between'
                }}
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
        </ListItem >
    )
}