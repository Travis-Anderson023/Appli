import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { reStyles } from "../../reusableStyles";
export const DisplayCompanyData = (props) => {
    const { company, date_applied, contact_name, contact_phone, contact_email, contact_website, response, coverletter } = props.company;

    const [formState, setFormState] = useState({
        company: company,
        date_applied: format(new Date(date_applied), "yyyy-MM-dd"),
        contact_name: contact_name,
        contact_phone: contact_phone,
        contact_email: contact_email,
        contact_website: contact_website,
        response: format(new Date(response), "yyyy-MM-dd"),
        coverletterText: coverletter.text
    })

    useEffect(() => {
        setFormState(prevState => ({
            company: company,
            date_applied: format(new Date(date_applied), "yyyy-MM-dd"),
            contact_name: contact_name,
            contact_phone: contact_phone,
            contact_email: contact_email,
            contact_website: contact_website,
            response: format(new Date(response), "yyyy-MM-dd"),
            coverletterText: coverletter.text
        }));
    }, [props.company]);

    const style = {
        formItem: {
            margin: '10px',
            width: '100%',
        },
        formBox: {
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'row'],
        },
        formTypography: {
            margin: ['20px', '20px', '20px', '10px'],
            color: 'text.secondary',
        }
    }
    return (
        <Box
            sx={{
                ...reStyles.flexContainer,
                flexDirection: 'column',
                p: '50px',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: '80%',
                overflow: 'auto',
                overflowX: 'hidden'
            }}
        >

            <Typography sx={{ ...style.formTypography }} variant='h4'>Company Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="Company-name"
                    label="Company Name"
                    multiline
                    value={formState.company}
                    onChange={(e) => setFormState(e.target.value)}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}

                />
                <TextField
                    type="date"
                    id="date-applied"
                    name="date-applied"
                    multiline
                    label="Date Applied"
                    value={formState.date_applied}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Typography sx={{ ...style.formTypography }} variant='h4'>Contact Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-name"
                    label="Contact Name"
                    multiline
                    value={formState.contact_name}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-phone"
                    label="Contact Phone"
                    multiline
                    value={formState.contact_phone}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-email"
                    label="Contact Email"
                    multiline
                    value={formState.contact_email}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-website"
                    label="Contact Website"
                    multiline
                    value={formState.contact_website}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <TextField
                id="response"
                label="Response"
                multiline
                value={formState.response}
                onChange={(e) => { setFormState(e.target.value) }}
                sx={{ ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                InputLabelProps={{ shrink: true }}
            />
            <Typography sx={{ ...style.formTypography }} variant='h4'>Cover Letter</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Cover Letter"
                multiline
                rows={8}
                value={formState.coverletterText}
                onChange={(e) => { setFormState(e.target.value) }}
                sx={{ ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                InputLabelProps={{ shrink: true }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                onClick={() => console.log(`formState:` + formState)}
            >
                Submit Changes
            </Button>
        </Box >
    )
}