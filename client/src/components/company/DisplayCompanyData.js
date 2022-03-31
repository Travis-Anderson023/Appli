import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from 'date-fns';
import { reStyles } from "../../reusableStyles";
export const DisplayCompanyData = (props) => {
    const style = {
        formItem: {
            margin: '10px',
            width: '100%',
        },
        formBox: {
            display: 'flex',
            flexDirection: 'row'
        },
        formTypography: {
            margin: '10px',
            color: 'text.secondary',
        }
    }
    return (
        <Box sx={{ ...reStyles.flexContainer, flexDirection: 'column', p: '50px', alignItems: 'flex-start', height: '70vh', overflow: 'auto' }} >
            {/* 
            {props.company.company}
            {props.company.date_applied}
            {props.company.contact_name}
            {props.company.contact_phone}
            {props.company.contact_email}
            {props.company.contact_website}
            {props.company.response}
            {props.company.coverletter.createdAt}
            {props.company.coverletter.updatedAt}
            {props.company.coverletter.text} 
            */}
            <Typography sx={{ ...style.formTypography }} variant='h4'>Company Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="Company-name"
                    label="Company Name"
                    multiline
                    defaultValue={props.company.company}
                    sx={{ ...style.formItem, ml: '0' }}

                />
                <TextField
                    type="date"
                    id="date-applied"
                    name="date-applied"
                    multiline
                    label="Date Applied"
                    defaultValue={format(new Date(props.company.date_applied), "yyyy-MM-dd")}
                    sx={{ ...style.formItem, mr: '0' }}
                />
            </Box>
            <Typography sx={{ ...style.formTypography }} variant='h4'>Contact Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-name"
                    label="Contact Name"
                    multiline
                    defaultValue={props.company.contact_name}
                    sx={{ ...style.formItem, ml: '0' }}
                />
                <TextField
                    id="contact-phone"
                    label="Contact Phone"
                    multiline
                    defaultValue={props.company.contact_phone}
                    sx={{ ...style.formItem, mr: '0' }}
                />
            </Box>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-email"
                    label="Contact Email"
                    multiline
                    defaultValue={props.company.contact_email}
                    sx={{ ...style.formItem, ml: '0' }}
                />
                <TextField
                    id="contact-website"
                    label="Contact Website"
                    multiline
                    defaultValue={props.company.contact_website}
                    sx={{ ...style.formItem, mr: '0' }}
                />
            </Box>
            <TextField
                id="response"
                label="Response"
                multiline
                defaultValue={props.company.response}
                sx={{ ...style.formItem }}
            />
            <Typography sx={{ ...style.formTypography }} variant='h4'>Cover Letter</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Cover Letter"
                multiline
                rows={8}
                defaultValue={props.company.coverletter.text}
                sx={{ ...style.formItem }}
            />
            <Button
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ mt: 3, mb: 2, ...style.formItem }}
                onClick={() => console.log(format(new Date(props.company.date_applied), 'yyyy-MM-dd'))}
            >
                Submit Changes
            </Button>
        </Box >
    )
}