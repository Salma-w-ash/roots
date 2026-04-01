import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from "yup"
import google from "../assets/f88184c68dee88f348660b174d22c163e0848498.png"
import StartSection from '../components/StartSection';

export default function LoginForm() {
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),

    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  return (
    <>
    <div className="w-[620px] min-h-screen bg-white">
      <div className="container mx-auto flex flex-col justify-center gap-2">
        <h2 className="font-primary font-bold text-[70px] text-(--primary-color)">
          Login
        </h2>
        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="flex flex-col justify-center">
            <label>Email</label>
            <Field
              name="email"
              type="email"
              className="w-[425px] h-[45px] rounded-lg p-2 bg-[#f2f2f2]"
              placeholder="Enter Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm"
            />
            <label>Password</label>
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
            <button className="w-[425px] h-[46px] rounded-lg p-2 bg-(--primary-color) font-primary text-[22px] font-normal">
              Sign in
            </button>
            <div className="w-[425px] h-[46px] rounded-lg p-2 bg-[#1D5423] flex justify-center items-center gap-1">
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
          <span className="font-primary font-normal text-lg text-(--primary-color)" >
            Sign up now
          </span>
        </p>
      </div>
    </div>
    </>
  );
}
