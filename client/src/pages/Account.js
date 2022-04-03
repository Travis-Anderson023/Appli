import { useQuery } from '@apollo/client';
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { reStyles } from "../reusableStyles";
import Auth from '../utils/auth';
import { QUERY_USER } from "../utils/queries";

export const Account = () => {

    const user = Auth.getProfile();
    let username = user.data.username;

    const { data } = useQuery(QUERY_USER, {
        variables: { username }
    });

    let coverLetterCount = 0;

    data?.user.applications.map((application) => {
        if (application.cover_letter) {
            coverLetterCount = coverLetterCount + 1
        }
        return coverLetterCount
    })

    console.log(coverLetterCount);

    const userStats = {
        totalApplications: 3,
        totalCoverletters: 2,
        mostRecentApplication: "March 31, 2022",
        mostRecentInterviewerContact: "March 31, 2022"
    }

    const styles = {
        text: {
            margin: '10px',
        },
        formItem: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
        }
    }
    return (

        <Paper sx={{ height: '100%', ml: ['2%', '10%'], mr: ['2%', '10%'], mt: ['2%', '30px'], p: ['10px', '30px'], overflow: 'auto' }} >
            <Typography sx={styles.text} variant='h2'>Accounts</Typography>
            <Typography sx={styles.text} variant='h4'>User Information</Typography>
            <TableContainer component={Paper} sx={{ ...reStyles.background }}>
                <Table aria-label="User Info Table">
                    <TableBody>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Username:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {data?.user.username}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Email:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {data?.user.email}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={styles.text} variant='h4'>Logout</Typography>
            <Button variant='contained' color='secondary' fullWidth>Logout</Button>
        </Paper >
    )
}