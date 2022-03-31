import DeleteIcon from '@mui/icons-material/Delete';
import WorkIcon from '@mui/icons-material/Work';
import { Avatar, Box, Button, ListItem, ListItemAvatar, Typography } from "@mui/material";

export const CompanySelector = (props) => {
    return (
        <ListItem sx={{ display: 'flex' }} onClick={() => console.log(props.company)}>
            <Button color='inherit' variant='contained'
                sx={{ borderRadius: '10px 0 0 10px', alignItems: 'flex-start', width: '100%', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex' }}>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <Typography variant='h4'>{props.company.company}</Typography>
                </Box>
                <Typography sx={{ ml: '10px' }}>{props.company.date_applied}</Typography>

            </Button>
            <Button edge="end" aria-label="delete" onClick={() => console.log('TODO DELETE VALIDATION USING DIALOG MUI')} sx={{ height: '53px', borderRadius: '0 10px 10px 0' }} color='error' variant='contained'>
                <DeleteIcon />
            </Button>
        </ListItem >
    )
}