import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

import TextField from "../../../components/TextField";
import Button from "../../../components/Button/";

import useToggle from "../../../hooks/useToggle";
import useRequest from "../../../hooks/useRequest";
import authAPI from "../../../services/authAPI";

import { showSuccess, showError } from "../../../utils/toast";
import {
   StyledButton,
   StyledModal,
   Overlay,
   ModalContainer,
   Title,
   TextFieldWrapper,
   FormControl,
   ButtonClose,
} from "./Styles";

const propTypes = {
   onCreateSuccess: PropTypes.func.isRequired,
};

const NewUserForm = ({ onCreateSuccess }) => {
   const [isActive, setIsActive] = useToggle();
   const createUser = useRequest(authAPI.signup, { manual: true });
   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
      setValue,
   } = useForm({
      defaultValues: {
         email: "",
         password: "",
         name: "",
         phoneNumber: "",
      },
   });

   const handleCreateNewUser = async (value) => {
      try {
         await createUser.runAsync(value);

         onCreateSuccess();
         formMethod.reset();

         showSuccess("Create user Successfully!");
      } catch (error) {
         showError(error);
      }
   };

   const handleOpenForm = () => {
      setIsActive(true);
   };

   const handleCloseForm = () => {
      setIsActive(false);
      formMethod.reset();
   };

   const formMethod = {
      reset: (...params) => {
         reset(...params);
      },
      setValue: (...params) => {
         setValue(...params);
      },
      closeForm: handleCloseForm,
   };

   return (
      <>
         <StyledButton onClick={handleOpenForm}>
            <Button variant="primary">Add User</Button>
         </StyledButton>
         <StyledModal className={`${isActive ? "open" : ""}`}>
            <ModalContainer>
               <Title>
                  <h2>Add New User</h2>
               </Title>
               <form onSubmit={handleSubmit(handleCreateNewUser)}>
                  <TextFieldWrapper>
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
                     <FormControl>
                        <Button variant="primary">Create</Button>
                     </FormControl>
                  </TextFieldWrapper>
               </form>
            </ModalContainer>
            <ButtonClose onClick={handleCloseForm}>X</ButtonClose>
         </StyledModal>
         <Overlay
            className={`${isActive ? "open" : ""}`}
            onClick={handleCloseForm}
         ></Overlay>
      </>
   );
};

NewUserForm.propTypes = propTypes;

export default NewUserForm;
