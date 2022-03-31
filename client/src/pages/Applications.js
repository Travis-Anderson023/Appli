import { Box, Divider, List } from "@mui/material";
import { useState } from "react";
import { CompanySelector } from "../components/company/CompanySelector";
import { DisplayCompanyData } from "../components/company/DisplayCompanyData";
import { reStyles } from "../reusableStyles";

export const Applications = () => {
    const [selectedCompany, setSelectedCompany] = useState(null)
    const companyArray = [
        {
            "company": "Google",
            "date_applied": `March 29 2022`,
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
            "company": "Microsoft",
            "date_applied": "March 29",
            "contact_name": "Tim",
            "contact_phone": "123-456-7890",
            "contact_email": "microsoft@email.com",
            "contact_website": "microsoft.ca",
            "response": null,
            "coverletter": {
                "createdAt": "March 29",
                "text": "coverletter text"
            }
        },
        {
            "company": "Amazon",
            "date_applied": "March 29",
            "contact_name": "Jane",
            "contact_phone": "123-456-7890",
            "contact_email": "amazon@email.com",
            "contact_website": "amazon.ca",
            "response": "March 31",
            "coverletter": {
                "createdAt": "March 29",
                "text": "coverletter text"
            }
        }
    ]

    return (
        <Box sx={{ ...reStyles.flexContainer, ...reStyles.background, justifyContent: 'flex-start', width: 'auto' }}>
            <List sx={{ width: 'max-content ', bgcolor: 'background.paper', m: '50px' }}>
                {companyArray.map((company, index) => {
                    return (
                        <CompanySelector company={company} key={index} />
                    )
                }
                )}
            </List>
            <Divider orientation="vertical" flexItem sx={{ mt: '50px', mb: '50px' }} />
            <DisplayCompanyData company={companyArray[0]} />
        </Box>
    )
}