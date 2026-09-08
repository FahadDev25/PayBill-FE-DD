import React from "react";
import { getCurrentYearMonth } from "../../../common/helper-functions";

const Payments = () => {
  return (
    <>
      <div>
        <div className="page-wrapper">
          <div className="content container-fluid">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col">
                  <h3 className="page-title">My Payments</h3>
                  <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="Dashboard">Dashboard</a>
                    </li>
                    <li className="breadcrumb-item active">My Payments</li>
                  </ul>
                </div>
                <div className="col-auto">
                  <div className="form-group">
                    <label>My Balance : </label>
                    <input
                      type="text"
                      className="form-control"
                      disabled
                      defaultValue="232"
                    />
                  </div>
                </div>
                <div className="col-auto">
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#AddBalanceFormModel"
                  >
                    <i className="fas fa-plus" /> Add Balance
                  </button>
                </div>
                <div className="col-auto">
                  <div className="form-group">
                    <label>Month : </label>
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
                            <th>Payment Company</th>
                            <th>Invoice ID</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th className="text-right">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr id="dataitem">
                            <td>
                              <h2 className="table-avatar">
                                <a className="avatar avatar-sm me-2">
                                  <img
                                    className="avatar-img rounded-circle"
                                    src="{{ asset('Payment_Companies_Logo/' . $Payment->company_logo) }}"
                                    alt="User Image"
                                  />
                                </a>
                                <a>company_name</a>
                              </h2>
                            </td>
                            <td>transaction_id</td>
                            <td>description</td>
                            <td>PKR transaction_amount</td>
                            <td>Pending</td>
                            <td>
                              <span className="badge badge-pill text-right bg-danger-light">
                                Pending
                              </span>
                            </td>
                            <td>
                              {/* <form action="/Payment/Redeem" method="post">
                                <input
                                  type="hidden"
                                  name="ID"
                                  defaultValue="{{ $Payment->id }}"
                                />
                                <button type="submit" className="btn btn-info">
                                  <i className="fas fa-university" />
                                  Redeem
                                  <a className="btn btn-success">
                                    <i className="fas fa-check" /> Done
                                  </a>
                                </button>
                       </form> */}
                              <button type="button" className="btn btn-warning">
                                <i className="fas fa-spinner fa-fw fa-xl margin-right-md fa-spin" />
                                Approval
                              </button>
                              {/* <button
                                type="button"
                                className="btn btn-primary"
                                data-bs-toggle="modal"
                                data-bs-target="#PayPlanFeeModel"
                                description="{{ $Payment->description}}"
                                plan-id="{{ $Plan->Payment_ID }}"
                                plan-price="{{ $Plan->price * 12 }}"
                                id="Plan{{ $Plan->id }}"
                              >
                                <i className="fas fa-university" />
                              </button>
                              <a className="btn btn-success">
                                <i className="fas fa-check" /> Paid
                            </a> */}
                            </td>
                          </tr>
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

export default Payments;
