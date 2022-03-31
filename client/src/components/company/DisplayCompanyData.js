import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from 'date-fns';
import { useEffect, useState } from "react";
import { reStyles } from "../../reusableStyles";
export const DisplayCompanyData = (props) => {
    const { company, date_applied, contact_name, contact_phone, contact_email, contact_website, response, coverletter } = props.company;
    const [date, setDate] = useState(format(new Date(date_applied), "yyyy-MM-dd"))
    useEffect(() => {
        setDate(format(new Date(date_applied), "yyyy-MM-dd"))
    }, [date_applied])
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
                    value={company}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}

                />
                <TextField
                    type="date"
                    id="date-applied"
                    name="date-applied"
                    multiline
                    label="Date Applied"
                    value={date}
                    onChange={(e) => { setDate(e.target.value) }}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                />
            </Box>
            <Typography sx={{ ...style.formTypography }} variant='h4'>Contact Information</Typography>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-name"
                    label="Contact Name"
                    multiline
                    defaultValue={contact_name}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                />
                <TextField
                    id="contact-phone"
                    label="Contact Phone"
                    multiline
                    defaultValue={contact_phone}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                />
            </Box>
            <Box sx={{ ...style.formItem, ...style.formBox }}>
                <TextField
                    id="contact-email"
                    label="Contact Email"
                    multiline
                    defaultValue={contact_email}
                    sx={{ ...style.formItem, ml: [undefined, undefined, undefined, '0'] }}
                />
                <TextField
                    id="contact-website"
                    label="Contact Website"
                    multiline
                    defaultValue={contact_website}
                    sx={{ ...style.formItem, mr: [undefined, undefined, undefined, '0'] }}
                />
            </Box>
            <TextField
                id="response"
                label="Response"
                multiline
                defaultValue={response}
                sx={{ ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
            />
            <Typography sx={{ ...style.formTypography }} variant='h4'>Cover Letter</Typography>
            <TextField
                id="outlined-multiline-static"
                label="Cover Letter"
                multiline
                rows={8}
                defaultValue={coverletter.text}
                sx={{ ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
            />
            <Button
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 3, mb: 2, ...style.formItem, ml: ['20px', '20px', '20px', '10px'] }}
                onClick={() => console.log(company)}
            >
                Submit Changes
            </Button>
        </Box >
    )
}