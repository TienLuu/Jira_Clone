import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import TextField from "../../../components/TextField";
import Button from "../../../components/Button";

import authAPI from "../../../services/authAPI";
import useRequest from "../../../hooks/useRequest";

import { showError, showSuccess } from "../../../utils/toast";
import { Text, StyledLink } from "./Styles";

const Signup = () => {
   const navigate = useNavigate();
   const { runAsync } = useRequest(authAPI.signup, {
      manual: true,
   });

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      defaultValues: {
         email: "",
         passWord: "",
         name: "",
         phoneNumber: "",
         terms: "",
      },
      mode: "onTouched",
   });

   const onSubmit = async (values) => {
      const { terms, ...newValues } = values;

      await runAsync(newValues)
         .then(() => {
            showSuccess("Sign up Successfully!", () =>
               navigate("/signin", {
                  state: {
                     email: newValues.email,
                     passWord: newValues.passWord,
                  },
               })
            );
         })
         .catch((error) => {
            showError(error);
         });
   };

   return (
      <>
         <Text className="title">Sign up for an account</Text>
         <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
               placeholder="Email"
               {...register("email", {
                  required: {
                     value: true,
                     message: "Please enter your email!",
                  },
                  pattern: {
                     value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                     message:
                        "Please enter your email address in format: yourname@example.com",
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
            <TextField
               placeholder="Name"
               {...register("name", {
                  required: {
                     value: true,
                     message: "Please enter your name!",
                  },
                  maxLength: {
                     value: 100,
                     message: "Please change your name",
                  },
               })}
               error={errors.name && errors.name.message}
            />
            <TextField
               placeholder="Phone Number"
               {...register("phoneNumber", {
                  required: {
                     value: true,
                     message: "Please enter your phone number!",
                  },
                  pattern: {
                     value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
                     message:
                        "Please enter your phone in format: 840901234567 || 0901234567",
                  },
               })}
               error={errors.phoneNumber && errors.phoneNumber.message}
            />

            <Button fullWidth variant="primary" className="loginBtn" textCenter>
               Sign up
            </Button>
         </form>
         <StyledLink>
            Already have an account? <Link to="/signin">Sign in</Link>
         </StyledLink>
      </>
   );
};

export default Signup;
