import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { GetLoader } from "../../../common/helper-components";
import { toastError } from "../../../helpers/common-functions";
import lesco from "../../../assets/images/LESCO.png";
import mepco from "../../../assets/images/MEPCO.png";
import { Link } from "react-router-dom";

const BillDetail = () => {
  const [data, setdata] = useState(false);
  var images = { MEPCO: mepco, LESCO: lesco };
  useEffect(() => {
    getUserBill();
  }, []);
  const getUserBill = () => {
    axios
      .get(`user-bill`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setTimeout(() => {
            setdata(res.data.data);
          }, 1000);
        } else {
          toastError("data not found!");
        }
      })
      .catch((err) => {
        console.log(err);
        toastError("Something went wrong");
      });
  };
  return (
    <>
      <GetLoader time={0} data={data} />
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">Bill's Details</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="Dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">Bill's Details</li>
                  </ul>
                </div>
                <div className="col">
                  <Link to={"/bill-details/add"} className="btn btn-primary">
                    <i className="fas fa-university" /> Add Bill Details
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="card card-table">
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-center table-hover datatable">
                        <thead className="thead-light">
                          <tr>
                            <th>Bill Company</th>
                            <th>Reference NO#</th>
                            <th>Bill Amount</th>
                            <th style={{ textAlign: "center" }}>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {/* foreach billcompanies*/}
                          {data
                            ? data.map((item, i) => {
                                return (
                                  <tr key={i} id="dataitem">
                                    <td>
                                      <h2 className="table-avatar">
                                        <a className="avatar avatar-sm me-2">
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={images[item.bill_company.name]}
                                            alt="User Image"
                                          />
                                        </a>
                                        <a>
                                          {item.bill_company.name}
                                          <span>
                                            {item.bill_company.bill_type}
                                          </span>
                                        </a>
                                      </h2>
                                    </td>
                                    <td>
                                      <a href="/Users_Bills/{{$Bill_Detail->bill_picture}}">
                                        Click here to view the Bill
                                      </a>
                                    </td>
                                    <td>{item.bill_amount}</td>
                                    <td style={{ textAlign: "center" }}>
                                      <a className="btn btn-success">
                                        <i className="fas fa-edit" /> Edit
                                      </a>
                                      {/* 
                            <button
                              type="button"
                              onclick="SetModalValue(this)"
                              className="btn btn-success"
                              data-bs-toggle="modal"
                              data-bs-target="#PayBillFeeModel"
                              description="{{ $Bill_Detail->company_name }} Bill Fee of {{ $Month }}"
                              bill-id="{{ $Bill_Detail->id }}"
                            >
                              <i className="fas fa-university" /> Pay Bill
                            </button>
                            <a
                              href="Bills_Details/Delete/{{$Bill_Detail->Crypt_ID}}"
                              className="btn btn-danger"
                            >
                              <i className="fas fa-trash" /> Delete
                       </a> */}
                                    </td>
                                  </tr>
                                );
                              })
                            : null}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BillDetail;
