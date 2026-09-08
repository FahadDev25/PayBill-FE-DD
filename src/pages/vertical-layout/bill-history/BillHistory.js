import React, { useState, useEffect } from "react";
import axios from "../../../axios";
import { getCurrentYearMonth } from "../../../common/helper-functions";
import { toastError } from "../../../helpers/common-functions";
import { GetLoader } from "../../../common/helper-components";
import { image } from "../../../base_paths";
import { DefaultImage } from "../../../common/vertical-layout/image-imports";
import lesco from "../../../assets/images/LESCO.png";
import mepco from "../../../assets/images/MEPCO.png";

const BillHistory = () => {
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
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="page-header">
            <div className="row align-items-center">
              <div className="col">
                <h3 className="page-title">Bill's History</h3>
                <ul className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="Dashboard">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">Bill's History</li>
                </ul>
              </div>
              <div className="col-auto">
                <label>Month : </label>
                <div
                  className="form-group"
                  style={{
                    display: "-webkit-inline-box",
                    verticalAlign: "center",
                  }}
                >
                  <input
                    type="month"
                    className="form-control"
                    name="Month"
                    defaultValue={getCurrentYearMonth()}
                  />
                </div>
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
                          <th>Due Date</th>
                          <th>Pay Date</th>
                          <th className="text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data
                          ? data.map((item, i) => {
                              return (
                                <tr id="dataitem">
                                  <td>
                                    <h2 className="table-avatar">
                                      <a className="avatar avatar-sm me-2">
                                        <img
                                          className="avatar-img rounded-circle"
                                          src={images[item.bill_company.name]}
                                          alt="User Image"
                                        />
                                        {/*   {item.bill_picture ? (
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={`${image}/${item.bill_picture}`}
                                            alt="User Image"
                                          />
                                        ) : (
                                          <img
                                            className="avatar-img rounded-circle"
                                            src={DefaultImage}
                                            alt="User Image"
                                          />
                                        )} */}
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
                                    {item.bill_picture ? (
                                      <a
                                        href={`${image}/${item.bill_picture}`}
                                        target="_blank"
                                      >
                                        Click here to view the Bill
                                      </a>
                                    ) : (
                                      <a>No Available</a>
                                    )}
                                  </td>
                                  <td>PKR {item.bill_amount}</td>
                                  <td>{item.due_date}</td>
                                  <td>Pending</td>
                                  <td>
                                    <span className="badge badge-pill text-right bg-danger-light">
                                      Pending
                                    </span>
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
    </>
  );
};

export default BillHistory;
