import { useEffect } from "react";
import { Link, useLocation, Navigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, Slide } from "react-toastify";
import { FaFacebookSquare } from "react-icons/fa";

import TextField from "../../../components/TextField";
import Button from "../../../components/Button";

import { signin } from "../../../slices/authSlice";
import { color } from "../../../utils/styles";
import { showError } from "../../../utils/toast";
import { Text, StyledLink } from "./Styles";

const Signin = () => {
   const dispatch = useDispatch();
   const { user } = useSelector((state) => state.auth);
   const [searchParams, setSearchParams] = useSearchParams();
   const location = useLocation();

   const {
      register,
      handleSubmit,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: {
         email: "",
         passWord: "",
      },
      mode: "onTouched",
   });

   useEffect(() => {
      const registerInfo = location.state;
      if (!registerInfo) return;

      setValue("email", registerInfo.email);
      setValue("passWord", registerInfo.passWord);
   }, []);

   const onSubmit = (values) => {
      dispatch(signin(values))
         .unwrap()
         .then()
         .catch((error) => {
            showError(error.message);
         });
   };

   const authenticate = () => {
      // loginWithFacebook();
   };

   // const handleSignout = () => {
   //    logoutFacebook();
   // };

   if (user) {
      const redirectUrl = searchParams.get("redirectUrl");
      return <Navigate to={redirectUrl || "/"} replace />;
   }

   return (
      <>
         <Text className="title">Sign in to your account</Text>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
               placeholder="Email"
               {...register("email", {
                  required: {
                     value: true,
                     message: "Please enter your email!",
                  },
               })}
               error={errors.email && errors.email.message}
            />
            <TextField
               type="password"
               placeholder="Password"
               {...register("passWord", {
                  required: {
                     value: true,
                     message: "Please enter your password!",
                  },
               })}
               error={errors.passWord && errors.passWord.message}
            />
            <Button
               fullWidth={true}
               variant="primary"
               className="loginBtn"
               textCenter
            >
               Log in
            </Button>
         </form>
         <Text className="normal">Or</Text>
         <Button
            icon={<FaFacebookSquare color={color.primary} />}
            className="loginBtn"
            textCenter
            onClick={authenticate}
         >
            Continue with Facebook
         </Button>
         {/* <Button
            icon={<FaFacebookSquare color={color.primary} />}
            className="loginBtn"
            variant="secondary"
            onClick={handleSignout}
         >
            signout
         </Button> */}
         <StyledLink>
            <Link to="/backup">Can't log in? </Link>
            <Link to="/signup">Sign up for an account</Link>
         </StyledLink>
         <ToastContainer transition={Slide} />
      </>
   );
};

export default Signin;
