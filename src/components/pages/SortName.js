import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {  Table } from 'react-bootstrap';
export default function SortName() {
    const [inputYear, setIputYear] = useState([]);



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
            <h2 className="text-center mt-3">Nobel Winner Name Search Here</h2>
            <Table className="text-center" striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <td><h4>WinnersName</h4></td>
                        <td><h4>WinnersYear</h4></td>
                        <td><h4>Category</h4></td>
                    </tr>
                </thead>
                {
                    inputYear.map((item, i) => {
                        return (
                            <tbody>
                                <tr key={i}>
                                    <td>
                                        {item.laureates
                                            .map((sub, j) => {
                                                
                                                var Names = sub.firstname
                                                console.log(Names)
                                                return <div key={j}>{[...Names]
                                                    .sort((a,b)=>{
                                                     return a - b
                                                })
                                                }
                                                </div>
                                                
                                            })}
                                  
                                    </td>
                                    <td>{item.year}</td>
                                    <td>{item.category}</td>
                                </tr>
                            </tbody>

                        )
                    }
                    )}

            </Table>
        </div>
    )
}
