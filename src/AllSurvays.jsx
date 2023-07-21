import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import axios from 'axios'
import Button from 'react-bootstrap/Button';

const AllSurvays = () => {
    const [allSurvays, setAllSurvays] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8080/survays/allsurvays').then((res) => {
            setAllSurvays(res.data)
            console.log(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [allSurvays])
    return (
        <div>
            <center><h1>All Survays</h1></center>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>S.NO</th>
                        <th>Age Group</th>
                        <th>Gender</th>
                        <th>Is Registered Voter</th>
                        <th>Voting Frequency</th>
                        <th>Important Elections</th>
                        <th>Voting Issues</th>
                        <th>Voting Factors</th>
                        <th>Information Sources</th>
                        <th>Changed Preference</th>
                        <th>Voter Turnout Measures</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        allSurvays && allSurvays.length > 0 ? allSurvays.map((item, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.ageGroup}</td>
                                    <td>{item.gender}</td>
                                    <td>{item.isRegisteredVoter}</td>
                                    <td>{item.votingFrequency}</td>
                                    <td>{item.importantElections[0]}</td>
                                    <td>{item.votingIssues[0]}</td>
                                    <td>{item.votingFactors[0]}</td>
                                    <td>{item.informationSources[0]}</td>
                                    <td>{item.changedPreference}</td>
                                    <td>{item.voterTurnoutMeasures[0]}</td>
                                </tr>
                            )
                        }) : null
                    }
                </tbody>
            </Table>
            <center>

            <Button variant="primary" onClick={()=> {window.location.href = '/'}}>Add Survay</Button>{' '}
            </center>
        </div>
    )
}

export default AllSurvays;