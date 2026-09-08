import axios from "../../../axios";
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../../helpers/common-functions";

const Add = () => {
  const [FormInputs, setFormInputs] = useState({});
  const [companyData, setcompanyData] = useState(false);
  const [companies, setcompanies] = useState(false);
  var company_output = companies ? JSON.parse(companies) : null;
  const navigate = useNavigate();
  useEffect(() => {
    getUserBill();
  }, []);
  const getUserBill = () => {
    axios
      .get(`bill-companies`)
      .then((res) => {
        if (res.data.data) {
          console.log(res.data.data);
          setTimeout(() => {
            setcompanyData(res.data.data);
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
  const submitHandler = (e) => {
    e.preventDefault();
    if (company_output == 0 || company_output == null) {
      toastError("Select company to proceed");
      return;
    }
    let formData = new FormData();
    // formData.append("bill_company_id", data.id);
    formData.append("bill_amount", FormInputs.bill_amount);
    formData.append("is_payed", 0);
    formData.append("is_active", 0);
    formData.append("bill_picture", FormInputs.image);
    axios
      .post(`/user-bill`, formData)
      .then((res) => {
        console.log(res.data);
        if (res.data?.msg != "" && res.data) {
          e.target.reset();
          setFormInputs({});
          toastSuccess(res.data.msg);
          setTimeout(() => {
            navigate("/bill-history");
          }, 1000);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(company_output);
  return (
    <div className="page-wrapper">
      <div className="content container-fluid">
        <div className="page-header">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title">Add New Bill Details</h3>
              <ul className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="Dashboard">Dashboard</a>
                </li>
                <li className="breadcrumb-item active">Bill's Details</li>
                <li className="breadcrumb-item active">Add New Bill Details</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">New Bill Details</h4>
                <form onSubmit={submitHandler}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Company Name</label>
                        <select
                          onChange={(e) => setcompanies(e.target.value)}
                          className="form-control"
                        >
                          <option value={0}>--Select Company--</option>
                          {companyData
                            ? companyData.map((c, i) => (
                                <option key={i} value={JSON.stringify(c)}>
                                  {c.name}
                                </option>
                              ))
                            : null}
                        </select>
                      </div>
                      {company_output && company_output != 0 ? (
                        <div className="form-group">
                          <label>Company Type</label>
                          <input
                            type="text"
                            className="form-control"
                            disabled
                            defaultValue={
                              company_output && company_output.bill_type
                            }
                          />
                        </div>
                      ) : null}
                      <div className="form-group">
                        <label>Bill Amount</label>
                        <input
                          type="number"
                          className="form-control"
                          required
                          onChange={(e) =>
                            setFormInputs({
                              ...FormInputs,
                              bill_amount: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="formFile" className="form-label">
                          Bill Picture
                        </label>
                        <input
                          className="form-control"
                          type="file"
                          name="BillPicture"
                          id="formFile"
                          accept="image/*"
                          onChange={(e) =>
                            setFormInputs({
                              ...FormInputs,
                              image: e.target.files[0],
                            })
                          }
                        />
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save Record
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
