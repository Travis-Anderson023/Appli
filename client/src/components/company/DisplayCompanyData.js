import { useMutation } from '@apollo/client';
import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { reStyles } from "../../reusableStyles";
import { ADD_APPLICATION, UPDATE_APPLICATION } from "../../utils/mutations";

export const DisplayCompanyData = (props) => {
    let tempcompany = {};
    let { company, date_applied, contact_name, contact_phone, contact_email, contact_website, response, coverletter } = props.newCompany

    const [updateApplication] = useMutation(UPDATE_APPLICATION);
    const [addApplication] = useMutation(ADD_APPLICATION);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        let value = document.getElementById('button').textContent;

        if (value === 'Add Application') {
            try {
                const { data } = await addApplication({
                    variables: {
                        company: formState.company,
                        contact_name: formState.contact_name,
                        contact_email: formState.contact_email,
                        contact_phone: formState.contact_phone,
                        contact_website: formState.contact_website,
                        response: formState.response,
                        date_applied: formState.date_applied,
                        cover_letter: formState.cover_letter,
                    }
                });
                props.setApplications(prevstate => [...prevstate, data.addApplication]);
            } catch (e) {
                console.error(e)
            }
        } else if (value === 'Submit Changes') {
            try {
                const { data } = await updateApplication({
                    variables: {
                        applicationId: props.company._id,
                        company: formState.company,
                        contact_name: formState.contact_name,
                        contact_email: formState.contact_email,
                        contact_phone: formState.contact_phone,
                        contact_website: formState.contact_website,
                        response: formState.response,
                        date_applied: formState.date_applied,
                        cover_letter: formState.cover_letter,
                    }
                });
                let tempVar = JSON.parse(JSON.stringify(props.applications));
                let tempArray = tempVar;
                tempArray[props.indexToChange] = data.updateApplication;
                props.setApplications(tempArray);
                
            } catch (e) {
                console.error(e)
            }
        }
    };

    useEffect(() => {
        if (props.company) {
            company = props.company.company;
            date_applied = props.company.date_applied;
            contact_name = props.company.contact_name;
            contact_phone = props.company.contact_phone;
            contact_email = props.company.contact_email;
            contact_website = props.company.contact_website;
            response = props.company.response;
            coverletter = props.company.cover_letter;
        }
    }, [props.company])

    const [formState, setFormState] = useState({
        company: company,
        date_applied: date_applied,
        // date_applied: format(new Date(date_applied), "yyyy-MM-dd"),
        contact_name: contact_name,
        contact_phone: contact_phone,
        contact_email: contact_email,
        contact_website: contact_website,
        response: response,
        cover_letter: coverletter
    })

    useEffect(() => {
        setFormState(prevState => ({
            company: company,
            date_applied: date_applied,
            contact_name: contact_name,
            contact_phone: contact_phone,
            contact_email: contact_email,
            contact_website: contact_website,
            response: response,
            // response: format(new Date(response), "yyyy-MM-dd"),
            cover_letter: coverletter
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
                width: ['fit-content', '80%'],
                textAlign: 'center'
            }}
        >

            <Typography sx={{ ...style.formTypography, }} variant='h4'>Company Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="Company-name"
                    label="Company Name"
                    multiline
                    value={formState.company}
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, company: e.target.value }))}
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
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, date_applied: e.target.value }))}
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
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, contact_name: e.target.value }))}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-phone"
                    label="Contact Phone"
                    multiline
                    value={formState.contact_phone}
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, contact_phone: e.target.value }))}
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
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, contact_email: e.target.value }))}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
                <TextField
                    id="contact-website"
                    label="Contact Website"
                    multiline
                    value={formState.contact_website}
                    onChange={(e) => setFormState(prevstate => ({ ...prevstate, contact_website: e.target.value }))}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                    InputLabelProps={{ shrink: true }}
                />
            </Box>
            <TextField
                id="response"
                label="Response"
                multiline
                value={formState.response}
                onChange={(e) => setFormState(prevstate => ({ ...prevstate, response: e.target.value }))}
                sx={{ ...style.formItem }}
                InputLabelProps={{ shrink: true }}
            />
            <Typography sx={{ ...style.formTypography }} variant='h4'>Cover Letter</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Cover Letter"
                multiline
                rows={8}
                value={formState.cover_letter}
                onChange={(e) => setFormState(prevstate => ({ ...prevstate, cover_letter: e.target.value }))}
                sx={{ ...style.formItem }}
                InputLabelProps={{ shrink: true }}
            />
            <Button
                fullWidth
                id="button"
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, ...style.formItem }}
                onClick={(event) => handleFormSubmit(event)}
            >
                {props.company.company == 'Add' ? 'Add Application' : 'Submit Changes'}
            </Button>
        </Box >
    )
}