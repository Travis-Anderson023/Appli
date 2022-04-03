import { useQuery } from '@apollo/client';
import { Box, Divider, List, useMediaQuery } from "@mui/material";
import { useState } from 'react';
import { CompanySelector } from "../components/company/CompanySelector";
import { DisplayCompanyData } from "../components/company/DisplayCompanyData";
import { reStyles } from "../reusableStyles";
import Auth from '../utils/auth';
import { QUERY_USER } from "../utils/queries";

export const Applications = () => {
    const user = Auth.getProfile();
    let username = user.data.username;

    const { data } = useQuery(QUERY_USER, {
        variables: { username }
    });

    const [applications, setApplications] = useState();
    let [indexToChange, setIndexToChange] = useState(0);

    const getApplications = async () => {
        await data;
        setApplications(data.user.applications);
    }

    getApplications();

    console.log(applications);

    const [selectedCompany, setSelectedCompany] = useState({
        "company": "Add",
        "date_applied": "Jan 1 2022",
        "contact_name": "Enter a contact name",
        "contact_phone": "Enter a contact phone",
        "contact_email": "Enter an email",
        "contact_website": "Enter a website",
        "response": "Jan 1 2022",
        "cover_letter": "test"
    })

    const newCompany = {
        "company": "Add",
        "date_applied": "Jan 1 2022",
        "contact_name": "Enter a contact name",
        "contact_phone": "Enter a contact phone",
        "contact_email": "Enter an email",
        "contact_website": "Enter a website",
        "response": "Jan 1 2022",
        "cover_letter": "test"
    };

    console.log(selectedCompany);
    return (
        <Box
            sx={{
                ...reStyles.flexContainer,
                ...reStyles.background,
                justifyContent: 'flex-start',
                width: 'auto',
                maxHeight: '100%',
                height: 'fit-content',
                flexDirection: ['column', 'column', 'row', 'row'],
            }
            }
        >
            <Box sx={{ m: '50px', height: "25%", overflow: 'auto' }}>
                <List sx={{ width: 'max-content', ...reStyles.background, }}>
                    <CompanySelector company={newCompany} setSelectedCompany={setSelectedCompany} />
                    {applications?.map((company, index) => {
                        console.log(company._id);
                        console.log(selectedCompany._id);
                        if (company._id === selectedCompany._id) {
                            if (indexToChange !== index) {
                                setIndexToChange(index);
                            }
                        }
                        return (

                            < CompanySelector company={company} setSelectedCompany={setSelectedCompany} key={index} />
                        )
                    }
                    )}
                </List>
            </Box>
            {useMediaQuery((theme) => theme.breakpoints.up('md')) ? <Divider orientation="vertical" flexItem sx={{ mt: '50px', mb: '50px' }} /> : <Divider flexItem />}
            <DisplayCompanyData applications={applications} indexToChange={indexToChange} company={selectedCompany} newCompany={newCompany} setApplications={setApplications} />
        </Box >
    )
}