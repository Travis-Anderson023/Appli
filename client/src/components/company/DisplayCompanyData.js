import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { reStyles } from "../../reusableStyles";
export const DisplayCompanyData = (props) => {
    console.log('props.company------')
    console.log(props.company);
    console.log('props.newcompany---')
    console.log(props.newCompany)
    let tempcompany = {};
    if (props.company === null) {
        tempcompany = props.newCompany;
    } else {
        tempcompany = props.company;
    };
    let { company, date_applied, contact_name, contact_phone, contact_email, contact_website, response, coverletter } = props.newCompany

    useEffect(() => {
        if (props.company) {
            company = props.company.company;
            date_applied = props.company.date_applied;
            contact_name = props.company.contact_name;
            contact_phone = props.company.contact_phone;
            contact_email = props.company.contact_email;
            contact_website = props.company.contact_website;
            response = props.company.response;
            coverletter = props.company.coverletter;
        }
    }, [props.company])

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
            ml: '0',
            mr: '0',
            mb: '20px',
            width: '100%',
            gap: '10px',
        },
        formBox: {
            display: 'flex',
            flexDirection: ['column', 'column', 'column', 'row'],
        },
        formTypography: {
            margin: ['20px', '20px', '20px'],
            color: 'text.secondary',
        }
    }
    return (
        <Box
            sx={{
                ...reStyles.flexContainer,
                flex: 3,
                flexDirection: 'column',
                p: '50px',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                height: '80%',
                overflow: 'auto',
                overflowX: 'hidden',
                width: 'fit-content',
            }}
        >

            <Typography sx={{ ...style.formTypography, }} variant='h4'>Company Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="Company-name"
                    label="Company Name"
                    multiline
                    value={formState.company}
                    onChange={(e) => setFormState(e.target.value)}
                    sx={{ ...style.formItem }}
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
                    sx={{ ...style.formItem }}
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
                    sx={{ ...style.formItem, }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-phone"
                    label="Contact Phone"
                    multiline
                    value={formState.contact_phone}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem }}
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
                    sx={{ ...style.formItem }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-website"
                    label="Contact Website"
                    multiline
                    value={formState.contact_website}
                    onChange={(e) => { setFormState(e.target.value) }}
                    sx={{ ...style.formItem }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <TextField
                id="response"
                label="Response"
                multiline
                value={formState.response}
                onChange={(e) => { setFormState(e.target.value) }}
                sx={{ ...style.formItem }}
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
                sx={{ ...style.formItem }}
                InputLabelProps={{ shrink: true }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, ...style.formItem }}
                onClick={() => console.log(`formState:` + formState)}
            >
                Submit Changes
            </Button>
        </Box >
    )
}