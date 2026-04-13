import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import google from "../assets/f88184c68dee88f348660b174d22c163e0848498.png"
import StartSection from '../components/StartSection';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { showThankYouToast } from '../components/Toast';

export default function LoginForm() {
  async function handleLogin(values) {
    await axios.post("http://localhost:1337/api/auth/local", {
      identifier: values.identifier , password: values.password
    }).then((res) => {
      console.log(res)
      showThankYouToast({
        title: "Logged in successfully!",
        subtitle: "Glad to see you again",
      })
      setTimeout(() => navigate("/"), 3000);
    }).catch((err) => {
      console.log(err)
    })
  }
  const validationSchema = Yup.object({
    identifier: Yup.string()
      .email("Invalid email")
      .required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const navigate = useNavigate();
  return (
    <>
      <div className="w-[620px] min-h-screen bg-white">
        <div className="container mx-auto flex flex-col justify-center gap-2 pt-20">
          <h2 className="font-primary font-bold text-[70px] text-(--primary-color)">
            Login
          </h2>
          <Formik
            initialValues={{ identifier: "", password: "", rememberMe: "false" }}
            validationSchema={validationSchema}
            onSubmit={handleLogin}
          >
            <Form className="flex flex-col justify-center items-start gap-2 ">
              <label className="font-primary font-normal text-[16px] text-[#A1A1A1]">
                Email
              </label>
              <Field
                name="identifier"
                type="email"
                className="w-[425px] h-[45px] rounded-lg p-2 bg-[#f2f2f2]"
                placeholder="Enter Email"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
              <label className="font-primary font-normal text-[16px] text-[#A1A1A1]">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="w-[425px] h-[45px] rounded-lg p-2 bg-[#f2f2f2]"
                placeholder="Enter Password"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
              <div className="flex items-center justify-between w-[426px]">
                <label className="flex items-center gap-2">
                  <Field
                    type="checkbox"
                    name="rememberMe"
                    className="checkbox bg-(--primary-color)"
                  />
                  <span>Remember me</span>
                </label>

                <a
                  href="/forgot-password"
                  className="text-sm text-(--primary-color) hover:underline"
                >
                  Forgot password?
                </a>
              </div>
              <button type='submit' className="w-[425px] h-[46px] rounded-lg p-2 bg-(--primary-color) font-primary text-[22px] font-medium text-white">
                Sign in
              </button>
              <div className="w-[425px] h-[46px] rounded-lg p-2 bg-[#1D5423]  flex justify-center items-center gap-1 mt-2">
                <img src={google} alt="" className="w-[35px] h-[35px]" />
                <button className=" font-primary font-normal text-[22px] text-white">
                  Or sign in with Google
                </button>
              </div>
            </Form>
          </Formik>
          {/* here i'll use navigate to navigate to register page */}
          <p className="font-primary font-normal text-lg text-[#1A1A1A]">
            Don’t have an account?
            <span
              onClick={() => navigate("/register")}
              className="font-primary font-normal text-lg text-(--primary-color)"
            >
              Sign up now
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
