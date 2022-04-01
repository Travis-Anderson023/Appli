import { Box, Divider, List } from "@mui/material";
import { useEffect, useState } from 'react';
import { CompanySelector } from "../components/company/CompanySelector";
import { DisplayCompanyData } from "../components/company/DisplayCompanyData";
import { reStyles } from "../reusableStyles";
import { useQuery } from '@apollo/client';
import { QUERY_USERS, QUERY_USER, QUERY_APPLICATIONS } from "../utils/queries";
import Auth from '../utils/auth';

export const Applications = () => {
    const user = Auth.getProfile();
    console.log(user);
    let username = user.data.username;

    const { data } = useQuery(QUERY_USER, {
        variables: {username}
    });

    const applications = data?.user.applications;
    console.log(data);
    console.log(applications);

    const [selectedCompany, setSelectedCompany] = useState(null)
    const companyArray = [
        {
            "company": "Google",
            "date_applied": `March 31 2022`,
            "contact_name": "Mary",
            "contact_phone": "123-456-7890",
            "contact_email": "google@email.com",
            "contact_website": "google.ca",
            "response": "March 30",
            "coverletter": {
                "createdAt": "March 29",
                "text": "coverletter text"
            }
        },
        {
            "company": "Microsoftt",
            "date_applied": "March 29",
            "contact_name": "Tim",
            "contact_phone": "123-456-7890",
            "contact_email": "microsoft@email.com",
            "contact_website": "microsoft.ca",
            "response": null,
            "coverletter": {
                "createdAt": "March 29",
                "text": "coverlettder text"
            }
        },
        {
            "company": "Amazon",
            "date_applied": "March 7",
            "contact_name": "Jane",
            "contact_phone": "123-456-7890",
            "contact_email": "amazon@email.com",
            "contact_website": "amazon.ca",
            "response": "March 31",
            "coverletter": {
                "createdAt": "March 29",
                "text": "coverleddtter text"
            }
        }
    ]
    const newCompany = {
        "company": "Add",
        "date_applied": "Jan 1 2022",
        "contact_name": "Enter a contact name",
        "contact_phone": "Enter a contact phone",
        "contact_email": "Enter an email",
        "contact_website": "Enter a website",
        "response": "Jan 1 2022",
        "coverletter": {
            "createdAt": "Jan 1 2022",
            "text": "Enter a coverletter"
        }
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
            <List sx={{ width: 'max-content ', ...reStyles.background, m: '50px' }}>
                <CompanySelector company={newCompany} setSelectedCompany={setSelectedCompany} />
                {applications?.map((company, index) => {
                    return (
                        <CompanySelector company={company} setSelectedCompany={setSelectedCompany} key={index} />
                    )
                }
                )}
            </List>
            <Divider orientation="vertical" flexItem sx={{ mt: '50px', mb: '50px' }} />
            {/* <DisplayCompanyData company={selectedCompany} /> */}
        </Box >
    )
}