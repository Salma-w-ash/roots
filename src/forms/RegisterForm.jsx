import { Field, Form, Formik, validateYupSchema } from 'formik'
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';
import { showThankYouToast } from '../components/Toast';

export default function RegisterForm() {
  const navigate = useNavigate();
async function handleRegister(values){
if(values.password !== values.passwordConfirmation){
  toast.error("passwords are not matched")
return;
}else{
  await axios
    .post("http://localhost:1337/api/auth/local/register", {
      username: values.username,
      email: values.email,
      password: values.password,
    })
    .then((res) => {
      console.log(res);
      console.log("SUCCESS", res);
      showThankYouToast({
        title: "Registered successfully!",
        subtitle: "Enjoy your Healthy Life Plan",
      });
      setTimeout(() => navigate("/"), 4000);
    })
    .catch((err) => {
      console.log("ERROR RESPONSE:", err.response?.data);
    });
}

}

  const registerSchema = Yup.object({
  username: Yup.string()
    .min(3, "Username too short")
    .required("Username is required"),

  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),

  emailConfirmation: Yup.string()
    .oneOf([Yup.ref("email")], "Emails must match")
    .required("Confirm your email"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm your password"),
});
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="text-[#3BA846] font-primary font-bold text-7xl">
          Register
        </h1>
        <Formik
          initialValues={{
            username: "",
            email: "",
            emailConfirmation: "",
            password: "",
            passwordConfirmation: "",
          }}
          validationSchema={registerSchema}
          onSubmit= { handleRegister }
        >
          <Form className="w-[425px] h-[501px] flex flex-col justify-center items-start gap-1.5">
            <label className="font-primary font-normal text-[16px] text-[#a1a1a1]">
              user name
            </label>
            <Field
              name="username"
              type="text"
              className="w-full h-[45px] rounded-lg p-2.5 bg-[#f2f2f2]"
              placeholder="Enter userName"
            />

            <label className="font-primary font-normal text-[16px] text-[#a1a1a1]">
              Email
            </label>
            <Field
              name="email"
              type="email"
              className="w-full h-[45px] rounded-lg p-2.5 bg-[#f2f2f2]"
              placeholder="Enter userName"
            />

            <label className="font-primary font-normal text-[16px] text-[#a1a1a1]">
              Confirm Email
            </label>
            <Field
              name="emailConfirmation"
              type="email"
              className="w-full h-[45px] rounded-lg p-2.5 bg-[#f2f2f2]"
              placeholder="confirm email"
            />

            <label className="font-primary font-normal text-[16px] text-[#a1a1a1]">
              Password
            </label>
            <Field
              name="password"
              type="password"
              className="w-full h-[45px] rounded-lg p-2.5 bg-[#f2f2f2]"
              placeholder="Enter password"
            />

            <label className="font-primary font-normal text-[16px] text-[#a1a1a1]">
              Confirm Password
            </label>
            <Field
              name="passwordConfirmation"
              type="password"
              className="w-full h-[45px] rounded-lg p-2.5 bg-[#f2f2f2]"
              placeholder="confirm password"
            />
            <button
              type="submit"
              className="w-full h-[45px] rounded-lg p-2.5 mt-2 bg-[#3BA846] text-white font-primary font-normal text-[22px]"
            >
              Register Now
            </button>
            <p className="font-primary font-normal text-[16px] text-[#a1a1a1]">
              Already have account?
              <span
                className="font-primary font-normal text-[16px] text-[#3BA846]"
                onClick={() => navigate("/")}
              >
                Login
              </span>
            </p>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
