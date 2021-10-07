/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Row, Table } from 'react-bootstrap';
export default function YearCategory() {
    const [inputYear, setIputYear] = useState([]);
    const [searchyear, setSearchYear] = useState("");
    const [searchcategory, setSearchCategory] = useState("");


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
            <h2 className="text-center mt-3 mb-3">Nobel Winner Name Search By Year and Category</h2>
            <center>
                <Row>
                    <Col md={{ span: 3, offset: 2 }}>
                        <input placeholder="Enter the Year" className="form-control" size="sm" onChange={e => { setSearchYear(e.target.value) }} />
                        {"  "}
                    </Col>
                    <Col md={{ span: 3, offset: 2 }}>
                        <input placeholder="Enter the category" className="form-control" size="sm" onChange={e => { setSearchCategory(e.target.value) }} />
                        {"  "}
                    </Col>
                </Row>
            </center>,

            <Table className="text-center" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td><h4>WinnersName</h4></td>
                        <td><h4>Year</h4></td>
                        <td><h4>Category</h4></td>
                    </tr>
                </thead>
                {
                    inputYear.filter(item => {
                        if (searchyear === "" && searchcategory === "") return item
                        else if (item.year.includes(searchyear) && item.category.includes(searchcategory)) {
                            return { item }
                        }
                    }).map((item, i) => {
                        return (
                            <tbody>
                                <tr key={i}>

                                    <td>{item.laureates.map((sub, j) => {
                                        let fullName = `${sub.firstname}${"  "}${sub.surname}`
                                        return <div>{fullName}</div>
                                    })}</td>
                                    <td>{item.year}</td>
                                    <td>{item.category}</td>
                                </tr>
                            </tbody>
                        )
                    })
                }
            </Table>
        </div>
    )
}
