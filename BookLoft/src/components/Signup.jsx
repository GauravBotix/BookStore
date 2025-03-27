import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/user/Signup", {
        name,
        email,
        password,
      });
      console.log(response);
      if (response.data.message === "Already a user") {
        toast.error("Already a user. Please Login.");
      } else {
        toast.success("Signup Successful");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
      toast.error("Error: " + err.response.data.message);
    }
  };
  return (
    <>
      <div className="signupclass flex justify-center items-center h-screen dark:bg-slate-300 dark:text-slate-800 bg-slate-900 text-slate-400 ">
        <form
          onSubmit={handleSubmit}
          className=" justify-center items-center border-2 w-[500px] p-9 rounded-lg flex-col  relative "
        >
          <h1 className="text-center font-bold text-xl md:text-2xl pb-9">
            Signup
          </h1>
          <div className="name pb-9">
            <label className="input  w-full bg-slate-300 text-slate-800  dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                placeholder="Username"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
          </div>

          <div className="email pb-9">
            <label className="input input-bordered flex items-center gap-2 w-full bg-slate-300 text-slate-800  dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-100"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                className="grow "
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <div className="password ">
            <label className="input  w-full bg-slate-300 text-slate-800  dark:bg-slate-800 dark:text-slate-200 h-12 rounded-lg">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>

          <div className="flex justify-between pt-9">
            <button className="btn btn-secondary" type="submit">
              Submit
            </button>

            <div className="btm flex justify-evenly pt-3 gap-4">
              <div>Already a user ?</div>
              <Link to="/" className="hover:text-blue-600 hover:underline">
                Login
              </Link>
            </div>
          </div>
          <Link
            to="/"
            className=" absolute right-4 top-2 font-bold dark:bg-slate-300 dark:text-slate-800 bg-slate-900 text-slate-400 hover:scale-130 "
          >
            ✕
          </Link>
        </form>
      </div>
    </>
  );
};

export default Signup;
