import { React, useState } from "react";
import { Link} from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/login", {
        email,
        password,
      });
      console.log(response.data);
      
      if (response.data.message === 'success') {
        toast.success("LogIn Successful");
        document.getElementById("my_modal_3").close();
      }  else if(response.data.message==='Invalid Username or Password') {
        toast.error("Invalid Username or Password");
      } else {
        toast.error('No such Username found.')
      }
    } catch (error) {
      console.error(error);
      toast.error("Error: " + err.response.data.message);
      setTimeout(() => {}, 1000);
    }
  };
    
   
  return (
    <div>
      <button
        className="dark:bg-slate-300 dark:text-slate-800 bg-slate-900 text-slate-400 duration-75"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-300 dark:text-slate-800 bg-slate-900 text-slate-400">
          <form
            onSubmit={handleSubmit}
            method="dialog"
            className="flex flex-col  gap-y-7"
          >
            <h3 className="font-bold text-xl md:text-2xl">Login</h3>

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
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

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
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>

            <div className="bottom flex justify-between">
              <button className="btn btn-secondary" type="submit">
                Submit
              </button>

              <div className="btm flex justify-evenly pt-3 gap-4">
                <Link to='/Signup'>Not registered</Link>
                <Link
                  to="/Signup"
                  className="hover:text-blue-600 hover:underline"
                >
                  Signup
                </Link>
              </div>
            </div>

            <button
              className="absolute right-2 top-2  dark:bg-slate-300 dark:text-slate-800 bg-slate-900 text-slate-400"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
