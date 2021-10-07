/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Table } from 'react-bootstrap';
export default function WinnersName() {
    const [firstName, setFirstname] = useState([]);
    const [search, setSearch] = useState("");


    function getUserval() {
        axios.get('http://localhost:8000/prizes')
            .then(function (res) {
                return res
            })
            .then(data => {
                console.log(data.data)
                setFirstname(data.data);
            }

            )

            // .then(data => console.log(data.data[0].laureates[0].firstname))
            .catch(function (error) {
                console.log(error);
            })
    }

    useEffect(() => {

        getUserval();
    }, [])
    return (
        <div className="container">
            <h2 className="text-center mt-3">Nobel Winner Name Search Here</h2>
            <center>
                <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                        <input placeholder="Type here" className="form-control" size="sm" onChange={e => { setSearch(e.target.value) }} />
                        {"  "}
                    </Col>
                </Row>
            </center>,

            <Table className="text-center" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td><h4>WinnersName</h4></td>
                    </tr>
                </thead>
                {
                    firstName.map((item) => {
                        return (
                            <>
                                {item.laureates.filter(sub => {
                                    if (search === "") return sub
                                    else if (sub.firstname.toLowerCase().includes(search.toLowerCase())) {
                                        return { sub }
                                    }

                                }).map((sub, i) => {
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
