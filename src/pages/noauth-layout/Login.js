import axios from "../../axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  toastError,
  toastSuccess,
  toastWarning,
} from "../../helpers/common-functions";

const Login = () => {
  const [FormInputs, setFormInputs] = useState({});
  const [HandleStates, setHandleStates] = useState({});
  const [data, setdata] = useState({});

  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();
    if (FormInputs.phone.length < 11) {
      alert("correct inputs");
      return;
    }
    axios
      .post(`/auth/login`, {
        phone: FormInputs.phone,
      })
      .then((res) => {
        if (res.data) {
          toastSuccess(res.data.msg);
          setHandleStates({
            ...HandleStates,
            Verify: true,
          });
          setdata({
            ...data,
            otp: res.data.data.otp,
          });
        } else {
          toastError("Wrong credentials");
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          toastError(err || "Something went wrong");
        }
      });
  };
  const verifyHandler = (e) => {
    e.preventDefault();
    let formData = {
      otp: FormInputs.otp,
      phone: FormInputs.phone,
    };
    axios
      .post(`/auth/verify-otp`, {
        otp: FormInputs.otp,
        phone: FormInputs.phone,
      })
      .then((res) => {
        console.log(res.data.data);
        if (res.data?.data) {
          localStorage.setItem("token", res.data.data.token);
          toastSuccess("you'er logged In.");
          setTimeout(() => {
            navigate("/dashboard");
            window.location.reload();
            // setdata({});
            // setFormInputs({});
            // setHandleStates({});
          }, 2000);
        } else {
          toastError("Loggon In Fail.");
        }
      })
      .catch((err) => {
        if (err) {
          console.log(err);
          if (err.response.data.err == "Wrong OTP") {
            toastError(err.response.data.err);
            return;
          }
          toastError("Something went wrong");
        }
      });
  };
  return (
    <>
      {/* Log in section */}
      <section className="sign-in-up login">
        <div className="overlay pt-120 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                {HandleStates.Verify ? (
                  <div className="form-content pb-16 ">
                    <div className="section-header">
                      <h2 className="title">Verify - OTP</h2>
                      <p>
                        <b>What is OTP?</b> To Login or Register your account,
                        you need verify it using OTP which is a 4 digit code
                        that is sended on your Mobile NO. which you previously
                        entered.
                      </p>
                    </div>
                    <form>
                      <div className="row">
                        <div className="col-6">
                          <div className="single-input ">
                            <label htmlFor="confirmPass">
                              {FormInputs.phone}
                            </label>
                            <div className="password-show d-flex align-items-center">
                              <input
                                type="number"
                                id="OTP"
                                name="OTP"
                                placeholder="4 Digit Code"
                                autoComplete="off"
                                min={1000}
                                max={9999}
                                required
                                onChange={(e) =>
                                  setFormInputs({
                                    ...FormInputs,
                                    otp: e.target.value,
                                  })
                                }
                              />
                            </div>
                            <p>Hint : {data?.otp}</p>
                          </div>
                        </div>
                      </div>
                      <div className="btn-area">
                        <button className="cmn-btn" onClick={verifyHandler}>
                          PayBill
                        </button>
                      </div>
                    </form>
                  </div>
                ) : (
                  <div className="form-content pb-16 ">
                    <div className="section-header">
                      <h2 className="title">Let's Get Started</h2>
                      <p>
                        <b>Already have an account?</b> No Problem Login Here if
                        your account already exist then it will autmatically
                        restore your data.
                      </p>
                    </div>
                    <form onSubmit={loginHandler}>
                      <div className="row">
                        <div className="col-6">
                          <div className="single-input">
                            <label htmlFor="Username">Mobile No.</label>
                            <input
                              type="tel"
                              name="phone"
                              placeholder="03*******"
                              autoComplete="on"
                              required
                              onChange={(e) =>
                                setFormInputs({
                                  ...FormInputs,
                                  phone: e.target.value,
                                })
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div className="btn-area">
                        <button className="cmn-btn">Login</button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
