import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-1">
                      <i className="fas fa-dollar-sign" />
                    </span>
                    <div className="dash-count">
                      <div className="dash-title">Total Bill's</div>
                      <div className="dash-counts">
                        <p>678</p>
                      </div>
                    </div>
                  </div>
                  <div className="progress progress-sm mt-3">
                    <div
                      className="progress-bar bg-5"
                      role="progressbar"
                      style={{ width: (678 / 678) * 100 + "%" }}
                      aria-valuenow={100}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <p class="text-muted mt-3 mb-0"><span class="text-danger me-1"><i
											class="fas fa-arrow-down me-1"></i>95%</span> since last week</p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-2">
                      <i className="fas fa-file-alt" />
                    </span>
                    <div className="dash-count">
                      <div className="dash-title">Bills Due</div>
                      <div className="dash-counts">
                        <p>20</p>
                      </div>
                    </div>
                  </div>
                  <div className="progress progress-sm mt-3">
                    <div
                      className="progress-bar bg-6"
                      role="progressbar"
                      style={{ width: "40%" }}
                      aria-valuenow
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <p class="text-muted mt-3 mb-0"><span class="text-success me-1">since last monday</span></p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-3">
                      <i className="fas fa-file" />
                    </span>
                    <div className="dash-count">
                      <div className="dash-title">Bill's Paid</div>
                      <div className="dash-counts">
                        <p>
                        30
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="progress progress-sm mt-3">
                    <div
                      className="progress-bar bg-7"
                      role="progressbar"
                      style={{ width: "50%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                  {/* <p class="text-muted mt-3 mb-0"><span class="text-success me-1"><i
											class="fas fa-arrow-up me-1"></i>100%</span> since last 2 years</p> */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12">
              <div className="card">
                <div className="card-body">
                  <div className="dash-widget-header">
                    <span className="dash-widget-icon bg-6">
                      <i className="fas fa-dollar-sign" />
                    </span>
                    <div className="dash-count">
                      <div className="dash-title">Your Balance</div>
                      <div className="dash-counts">
                        <p>PKR 200</p>
                      </div>
                    </div>
                  </div>
                  <div className="progress progress-sm mt-3">
                    <div
                      className="progress-bar bg-6"
                      role="progressbar"
                      style={{ width: "45%" }}
                      aria-valuenow={75}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-7 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">Bill's History</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table table-center table-hover datatable">
                      <thead className="thead-light">
                        <tr>
                          <th>Bill Company</th>
                          <th>Reference NO#</th>
                          <th>Bill Amount</th>
                          {/* <th>Due Date</th>
												<th>Pay Date</th> */}
                          <th className="text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {/* foreach billcompanies*/}
                      {/*  <tr id="dataitem">
                          <td>
                            <h2 className="table-avatar">
                              <a className="avatar avatar-sm me-2">
                                <img
                                  className="avatar-img rounded-circle"
                                  src=""
                                  alt="User Image"
                                />
                              </a>
                              <a>
                                company_name
                                <span>bill_type</span>
                              </a>
                            </h2>
                          </td>
                          <td>
                            <a href="/Users_Bills/{{$Bill_History->bill_picture}}">
                              View Bill
                            </a>
                          </td>
                          <td>PKR 400</td>
                           <td>
                            <span className="badge badge-pill text-right bg-{{$Bill_History->status != 'Pending' ? 'success' : 'danger'}}-light">
                              Pending
                            </span>
                          </td>
                      </tr> */}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-5 d-flex">
              <div className="card flex-fill">
                <div className="card-header">
                  <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">This Month Report</h5>
                    {/* <div class="dropdown">
										<button class="btn btn-white btn-sm dropdown-toggle" type="button"
											id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
											Monthly
										</button>
										<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
											<li>
												<a href="javascript:void(0);" class="dropdown-item">Weekly</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item">Monthly</a>
											</li>
											<li>
												<a href="javascript:void(0);" class="dropdown-item">Yearly</a>
											</li>
										</ul>
									</div> */}
                  </div>
                </div>
                <div className="card-body">
                  <div className="text-center text-muted">
                    <div className="row">
                      <div className="col-4">
                        <div className>
                          <p className="mb-2 text-truncate">Total Bill's</p>
                          <h5
                            className="text-primary"
                            id="MonthReportTotalBills"
                          >
                            <i className="fas fa-circle text-primary me-1" />
                            60
                          </h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className>
                          <p className="mb-2 text-truncate">Paid Bill's</p>
                          <h5
                            className="text-success"
                            id="MonthReportPaidBills"
                          >
                            <i className="fas fa-circle text-success me-1" />
                            40
                          </h5>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className>
                          <p className="mb-2 text-truncate">Due Bill's</p>
                          <h5 className="text-danger" id="MonthReportDueBills">
                            <i className="fas fa-circle text-danger me-1" />
                            30
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="invoice_chart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
