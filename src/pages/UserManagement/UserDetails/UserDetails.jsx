import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2";

import Button from "../../../components/Button";
import Avatar from "../../../components/Avatar";
import CustomLoadingOverlay from "../../../components/TableData/CustomLoadingOverlay";
import CustomErrorOverLay from "../../../components/TableData/CustomErrorOverLay";
import UserEditFormModal from "./UserEditFormModal";

import useToggle from "../../../hooks/useToggle";
import useRequest from "../../../hooks/useRequest";
import userAPI from "../../../services/userAPI";

import { showSuccess, showError } from "../../../utils/toast";
import { Wrapper, Heading, Control, UserInfo } from "./Styles";

const UserDetail = () => {
   const [isActive, setValue] = useToggle(false);
   const { userId } = useParams();
   const navigate = useNavigate();

   const deleteUser = useRequest(userAPI.deleteUser, { manual: true });
   const userDetails = useRequest(userAPI.getUsers, { manual: true });

   const getUserDetails = () => {
      userDetails.runAsync(userId).then();
   };

   const handleUpdateSuccess = () => {
      getUserDetails();
   };

   const handleDelete = () => {
      deleteUser
         .runAsync(userId)
         .then(() => {
            showSuccess("Delete user successfully & Redirecting ...", () =>
               navigate("/users")
            );
         })
         .catch((error) => {
            showError(error);
         });
   };

   useEffect(() => {
      getUserDetails();
   }, [userId]);

   if (!userDetails.data) {
      return <CustomLoadingOverlay />;
   }

   if (userDetails.error) {
      return <CustomErrorOverLay />;
   }

   const { avatar, name, email, phoneNumber } = userDetails.data[0];

   return (
      <Wrapper>
         <Heading>
            <div>
               <h3>Basic Infomation</h3>
            </div>
            <Control>
               <Button onClick={() => setValue(!isActive)}>Edit</Button>
               <Button onClick={handleDelete}>Delete</Button>
            </Control>
         </Heading>
         <Grid container spacing={2} maxWidth="72rem">
            <Grid
               xs={12}
               md={4}
               display="flex"
               alignItems="flex-start"
               justifyContent="center"
            >
               <Avatar square size={200} avatarUrl={avatar} />
            </Grid>
            <Grid xs={12} md={8}>
               <UserInfo>
                  <div>
                     <p>Name:</p>
                     <span>{name}</span>
                  </div>
                  <div>
                     <p>Email:</p>
                     <span>{email}</span>
                  </div>
                  <div>
                     <p>Phone:</p>
                     <span>{phoneNumber}</span>
                  </div>
               </UserInfo>
            </Grid>
         </Grid>

         <UserEditFormModal
            open={isActive}
            onClose={() => setValue(!isActive)}
            onUpdateSuccess={handleUpdateSuccess}
            user={userDetails.data[0]}
         />
      </Wrapper>
   );
};

export default UserDetail;
