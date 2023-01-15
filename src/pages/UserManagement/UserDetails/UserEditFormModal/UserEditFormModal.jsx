import PropTypes from "prop-types";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Unstable_Grid2";

import Button from "../../../../components/Button";
import Modal from "../../../../components/Modal";
import TextField from "../../../../components/TextField";

import useRequest from "../../../../hooks/useRequest";
import userAPI from "../../../../services/userAPI";

import { showSuccess, showError } from "../../../../utils/toast";
import { StyledControl } from "./Styles";

const propTypes = {
   open: PropTypes.bool.isRequired,
   onClose: PropTypes.func.isRequired,
   onUpdateSuccess: PropTypes.func.isRequired,
   user: PropTypes.object.isRequired,
};

const UserEditFormModal = ({ open, onClose, onUpdateSuccess, user }) => {
   const updateUser = useRequest(userAPI.updateUser, { manual: true });

   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      setValue,
   } = useForm({
      defaultValues: {
         id: "",
         name: "",
         email: "",
         phoneNumber: "",
         password: "",
      },
   });

   const handleToggle = () => {
      reset();
      onClose();
   };

   useEffect(() => {
      if (!open) return;
      for (let [key, value] of Object.entries(user)) {
         if (key === "userId") key = "id";
         setValue(key, value);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [open]);

   const onSubmit = async (values) => {
      updateUser
         .runAsync(values)
         .then(() => {
            showSuccess("Update user successfully");
            onUpdateSuccess();
         })
         .catch((error) => {
            showError(error);
         });
   };

   return (
      <Modal
         open={open}
         title="Edit User"
         onClose={handleToggle}
         footer={
            <>
               <StyledControl>
                  <Button
                     onClick={handleSubmit(onSubmit)}
                     disabled={updateUser.loading}
                  >
                     Update
                  </Button>
                  <Button onClick={handleToggle}>Cancel</Button>
               </StyledControl>
            </>
         }
      >
         <form>
            <Grid container spacing={2} disableEqualOverflow>
               <Grid xs={12} sm={6}>
                  <TextField
                     placeholder="Id"
                     readOnly={true}
                     disabled
                     {...register("id", {
                        required: {
                           value: true,
                           message: "Id is required",
                        },
                     })}
                     error={errors.id && errors.id.message}
                  />
               </Grid>
               <Grid xs={12} sm={6}>
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
               </Grid>
               <Grid xs={12} sm={6}>
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
               </Grid>
               <Grid xs={12} sm={6}>
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
               </Grid>
               <Grid xs={12} sm={6}>
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
               </Grid>
            </Grid>
         </form>
      </Modal>
   );
};

UserEditFormModal.propTypes = propTypes;

export default UserEditFormModal;
