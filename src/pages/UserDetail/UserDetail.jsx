import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2";
import { toast } from "react-toastify";

import Button from "../../components/Button";
import CustomLoadingOverlay from "../../components/TableData/CustomLoadingOverlay";
import CustomErrorOverLay from "../../components/TableData/CustomErrorOverLay";
import UserEditFormModal from "./UserEditFormModal";

import useRequest from "../../hooks/useRequest";
import userAPI from "../../services/userAPI";
import { getUsersDetail } from "../../redux/slices/userSlice";

import styles from "./UserDetail.module.scss";

const UserDetail = () => {
   const { userId } = useParams();
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const { selectedUser, loading, error } = useSelector((state) => state.user);
   const deleteUser = useRequest(userAPI.deleteUser, { manual: true });

   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      dispatch(getUsersDetail(userId));
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [userId]);

   const handleDelete = () => {
      deleteUser
         .runAsync(userId)
         .then(() => {
            toast.success("Delete user successfully");
            navigate(-1);
         })
         .catch((error) => {
            toast.error(error.message);
         });
   };

   if (loading) {
      return <CustomLoadingOverlay />;
   }

   if (error) {
      return <CustomErrorOverLay />;
   }

   return (
      <div className={styles.wrapper}>
         <div className={styles.title}>
            <h3>Basic Infomation</h3>
            <div className={styles.control}>
               <Button solid onClick={() => setIsOpen(!isOpen)}>
                  Edit
               </Button>
               <Button solid onClick={handleDelete}>
                  Delete
               </Button>
            </div>
         </div>
         <Grid container spacing={2}>
            <Grid
               xs={12}
               md={4}
               display="flex"
               alignItems="flex-start"
               justifyContent="center"
            >
               <div className={styles.avatar}>
                  <img src={selectedUser?.avatar} alt={selectedUser?.name} />
               </div>
            </Grid>
            <Grid xs={12} md={8}>
               <div className={styles.infoWrapper}>
                  <div className={styles.info}>
                     <p>Name:</p>
                     <span>{selectedUser?.name}</span>
                  </div>
                  <div className={styles.info}>
                     <p>Email:</p>
                     <span>{selectedUser?.email}</span>
                  </div>
                  <div className={styles.info}>
                     <p>Phone:</p>
                     <span>{selectedUser?.phoneNumber}</span>
                  </div>
               </div>
            </Grid>
         </Grid>
         <UserEditFormModal open={isOpen} onClose={() => setIsOpen(!isOpen)} />
      </div>
   );
};

export default UserDetail;
