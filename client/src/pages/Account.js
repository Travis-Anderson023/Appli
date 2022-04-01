import { Paper, Switch, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import { reStyles } from "../reusableStyles";
import { capitalize } from "../utils/helpers";
export const Account = () => {

    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    const handleChange = (event) => {
        setIsDarkMode(event.target.checked);
        localStorage.setItem('darkMode', event.target.checked);
        console.log(isDarkMode);
    };

    const UserData = {
        "username": "johndoe",
        "email": "email@email.com"
    }
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
                                {capitalize(UserData.username)}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Email:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {UserData.email}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Dark Mode:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                <Switch
                                    checked={isDarkMode}
                                    onChange={handleChange}
                                    inputProps={{ 'aria-label': 'controlled' }}
                                />
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Typography sx={styles.text} variant='h4'>User Stats</Typography>
            <TableContainer component={Paper} sx={{ ...reStyles.background }}>
                <Table aria-label="User Info Table">
                    <TableBody>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Total Applications:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {userStats.totalApplications}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Total Cover Letters:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {userStats.totalCoverletters}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Most Recent Application:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {userStats.mostRecentApplication}
                            </TableCell>
                        </TableRow>
                        <TableRow >
                            <TableCell component="th" scope="row">
                                Most Recent Interviewer Contact:
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="right">
                                {userStats.mostRecentInterviewerContact}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper >
    )
}