/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Table } from 'react-bootstrap';
export default function Yearfilter() {
    const [inputYear, setIputYear] = useState([]);
    const [search, setSearch] = useState("");


    function getUserval() {
        axios.get('http://localhost:8000/prizes')
            .then(function (res) {
                return res
            })
            .then(data => {
                console.log(data.data)
                setIputYear(data.data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {

        getUserval();
    }, [])
    return (
        <div className="container">
            <h2 className="text-center mt-3">Nobel Winner Name Search By Year</h2>
            <center>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <input placeholder="Enter Year" className="form-control" size="sm" onChange={e => { setSearch(e.target.value) }} />
                        {"  "}
                    </Col>
                </Row>
            </center>,

            <Table className="text-center" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td><h4>WinnersName By Year</h4></td>
                    </tr>
                </thead>
                {
                    inputYear.filter(item => {
                        if (search === "") return item
                        else if (item.year.includes(search)) {
                            return { item }
                        }
                    })
                        .map((item) => {
                            return (
                                <>
                                    {item.laureates.map((sub, i) => {
                                        let fullName = `${sub.firstname}${"  "}${sub.surname}`
                                        return (
                                            <tbody>
                                                <tr key={i}>
                                                    <td>{fullName}</td>
                                                </tr>
                                            </tbody>

                                        )
                                    })}
                                </>
                            )
                        })
                }
            </Table>
        </div>
    )
}
