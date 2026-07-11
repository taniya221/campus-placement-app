import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'

const ViewReg = () => {
     const  [data,changeData]=useState([])
    const fetchData=()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/placement.json").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }

    useEffect(
        ()=>{
            fetchData()
        },[]
    )
  return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">

                            {
                                data.map( 
                                    (Value,Index)=>{
                                        return(
                                            <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">
                                                   <div className="card">
                                               
                                                <div className="card-body">
                                                    <h5 className="card-title">Card title</h5>
                                                    <strong>Registration Number:</strong>{Value.regNo}<br />
                                                    <strong>FullName:</strong>{Value.fullName}<br />
                                                    <strong>AadharNumber:</strong>{Value.aadharNumber}<br />
                                                    <strong>PhoneNumber:</strong>{Value.phoneNumber}<br />
                                                    <strong>Branch:</strong>{Value.branch}<br />
                                                    <strong>sslcmark:</strong>{Value.sslcMark}<br />
                                                    <strong>PlusTwoMark:</strong>{Value.plusTwoMark}<br />
                                                    <strong>UGDegree:</strong>{Value.ugDegree}<br />
                                                    <strong>PGMark:</strong>{Value.pgMark}<br />
                                                    <button className="btn btn-primary">View Details</button>

                                                </div>
                                            </div>

                                            </div>
                                        )
                                    }
                                )
                            }
                            
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewReg