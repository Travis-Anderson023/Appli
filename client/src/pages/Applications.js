import { useQuery } from '@apollo/client';
import { Box, Divider, List, useMediaQuery } from "@mui/material";
import { differenceInCalendarDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { AddSelector } from '../components/company/AddSelector';
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

    useEffect(() => {
        const getApplications = async () => {
            await data;
            setApplications(data.user.applications);
        }

        getApplications();
    }, [data]);


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
            <Box sx={{ m: '50px', height: ["25%", "25%", "80%", "80%"], overflow: 'auto' }}>
                <List sx={{ width: 'max-content', ...reStyles.background, }}>
                    <AddSelector company={newCompany} setSelectedCompany={setSelectedCompany} />
                    {applications?.map((company, index) => {
                        if (company._id === selectedCompany._id) {
                            if (indexToChange !== index) {
                                setIndexToChange(index);
                            }
                        }
                        return (

                            < CompanySelector company={company} newCompany={newCompany} selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} indexToChange={indexToChange} setIndexToChange={setIndexToChange} setApplications={setApplications} key={index} index={index} />
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