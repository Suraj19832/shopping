import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });
  const [data, setData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let newError = { ...error };

    switch (name) {
      case "email":
        newError.email =
          !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
            ? "Invalid email"
            : "";
        break;
      case "password":
        newError.password =
          value.length < 8 ? "Password must be at least 8 characters" : "";
        break;
      case "firstName":
        newError.firstName = !/^[a-zA-Z\s]+$/.test(value)
          ? "First name must contain only letters and spaces"
          : "";
        break;
      case "lastName":
        newError.lastName = !/^[a-zA-Z\s]+$/.test(value)
          ? "Last name must contain only letters and spaces"
          : "";
        break;
      case "phone":
        newError.phone =
          value.length < 10 ? "Number should not be less than 10" : "";
        break;
      default:
        break;
    }

    setError(newError);

    const emailFilled = data.email !== "";
    const passwordFilled = data.password !== "";
    setIsSubmit(
      emailFilled &&
        passwordFilled &&
        Object.values(newError).every((val) => val === "")
    );
  };
  function handleSubmit() {
    localStorage.setItem("user",JSON.stringify(data))
    alert("Sign Up Successfully!! : ) ")
    navigate('/signin')
    console.log(data);
  }

  return (
    <div className="my-20">
      <h1 className="font-bold text-2xl sm:text-4xl pl-7 py-5 sm:pl-14">
        Create an Account
      </h1>
      <div className="flex content-center justify-center">
        <div className="sm:w-1/3  w-[70%]">
          <div className="content-center">
            <h1 className="font-semibold text-sm sm:text-xl border-b-2 border-black text-center">
              Register
            </h1>
            <div className="input-field">
              <label htmlFor="fname">
                <p>FIRST NAME</p>
                <input
                  type="text"
                  name="firstName"
                  value={data.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  required
                />
                {error.firstName && (
                  <p className="text-red-500">{error.firstName}</p>
                )}
              </label>
              <label htmlFor="lname">
                <p>LAST NAME</p>
                <input
                  type="text"
                  name="lastName"
                  value={data.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                />
                {error.lastName && (
                  <p className="text-red-500">{error.lastName}</p>
                )}
              </label>
              <label htmlFor="phone">
                <p>PHONE</p>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                />
                {error.phone && <p className="text-red-500">{error.phone}</p>}
              </label>
              <label htmlFor="email">
                <p>EMAIL</p>
                <input
                  type="email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
                {error.email && <p className="text-red-500">{error.email}</p>}
              </label>
              <label htmlFor="password">
                <p>PASSWORD</p>
                <input
                  type="password"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                  placeholder="Password"
                />
                {error.password && (
                  <p className="text-red-500">{error.password}</p>
                )}
              </label>
              <label htmlFor="continue">
                <button
                  className={`flex justify-center w-full py-3.5 font-semibold ${
                    isSubmit ? "bg-black text-white" : "bg-gray-300 cursor-not-allowed"
                  }`}
                  disabled={!isSubmit}
                  onClick={handleSubmit}
                >
                  CONTINUE
                </button>
              </label>
              <div className="text-right font-medium sm:text-base text-sm">
              <Link to="">
                  Already have an account? Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
