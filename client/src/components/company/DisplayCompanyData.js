import { Box, TextField } from "@mui/material";
import { reStyles } from "../../reusableStyles";
export const DisplayCompanyData = (props) => {
    const { company } = props;
    return (
        <Box sx={{ ...reStyles.flexContainer }}>
            {/* 
            {props.company.company}
            {props.company.date_applied}
            {props.company.contact_name}
            {props.company.contact_phone}
            {props.company.contact_email}
            {props.company.contact_website}
            {props.company.response}
            {props.company.coverletter.createdAt}
            {props.company.coverletter.text} 
            */}
            <TextField
                id="outlined-multiline-static"
                label="Cover Letter"
                multiline
                rows={8}
                defaultValue={company.coverletter.text}
                sx={{ width: '80%' }}
            />
        </Box>
    )
}