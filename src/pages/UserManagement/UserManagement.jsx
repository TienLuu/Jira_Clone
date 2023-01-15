import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";

import MoreMenu from "../../components/MoreMenu";
import SearchBar from "../../components/SearchBar";
import TableData from "../../components/TableData";
import Icon from "../../components/Icon";
import Avatar from "../../components/Avatar";
import NewUserForm from "./NewUserForm";

import userAPI from "../../services/userAPI";
import useRequest from "../../hooks/useRequest";
import { getUsers } from "../../slices/userSlice";

import { showError, showSuccess } from "../../utils/toast";
import { Wrapper, Title, StyledSearch, Container } from "./Styles";

const UserManagement = () => {
   const { users, loading, error } = useSelector((state) => state.user);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [searchParams, setSearchParams] = useSearchParams();
   const searchValue = searchParams.get("keyword") || "";

   const deleteUser = useRequest(userAPI.deleteUser, { manual: true });

   const getUserList = () => {
      dispatch(getUsers(searchValue));
   };

   useEffect(() => {
      getUserList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleCreateSuccess = () => {
      getUserList();
   };

   const handleSearchParams = (debounceValue) => {
      dispatch(getUsers(debounceValue));

      if (!debounceValue) {
         setSearchParams();
         return;
      }

      setSearchParams({ keyword: debounceValue });
   };

   const handleSelect = (action, id) => {
      if (action === "detail") {
         navigate(`/users/${id}`);
         return;
      }

      if (action === "delete") {
         deleteUser
            .runAsync(id)
            .then(() => {
               showSuccess("Delete user successfull");
               dispatch(getUsers(searchValue));
            })
            .catch((error) => {
               showError(error);
            });
         return;
      }
   };

   const actions = [
      {
         title: "Detail",
         icon: <Icon type="settings" />,
         action: "detail",
      },
      {
         title: "Delete",
         icon: <Icon type="trash" />,
         action: "delete",
      },
   ];

   const columns = [
      {
         field: "name",
         headerName: "Name",
         flex: 2,
         minWidth: 150,
      },
      {
         field: "avatar",
         headerName: "Avatar",
         flex: 1,
         minWidth: 80,
         renderCell: (params) => <Avatar avatarUrl={params.value} size={24} />,
      },
      {
         field: "email",
         headerName: "Email",
         flex: 3,
         minWidth: 200,
         renderCell: (params) => params.value.name,
      },
      {
         field: "phoneNumber",
         headerName: "Phone",
         flex: 2,
         minWidth: 150,
         renderCell: (params) => params.value.name,
      },
      {
         field: "action",
         headerName: "More",
         description: "Do more action with this",
         sortable: false,
         flex: 1,
         minWidth: 80,
         renderCell: (params) => {
            return (
               <MoreMenu
                  items={actions}
                  placement="bottom-end"
                  onChange={({ action }) => {
                     handleSelect(action, params.row.userId);
                  }}
               >
                  <Icon type="more" />
               </MoreMenu>
            );
         },
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
   ];

   return (
      <Wrapper>
         <Title>
            <h2>Users</h2>
         </Title>
         <StyledSearch>
            <SearchBar
               placeholder="Search user here"
               value={searchValue}
               loading={searchValue && loading}
               onClearSearchValue={() => setSearchParams()}
               options={{
                  debounce: true,
                  time: 400,
                  onDebounce: handleSearchParams,
               }}
            />
         </StyledSearch>
         <Container>
            <TableData
               rows={users || []}
               columns={columns}
               getRowId={(row) => row.userId}
               getEstimatedRowHeight={() => 100}
               autoRowHeight
               sx={{
                  "&.MuiDataGrid-root--densityCompact .MuiDataGrid-cell": {
                     py: "4px",
                  },
                  "&.MuiDataGrid-root--densityStandard .MuiDataGrid-cell": {
                     py: "4px",
                  },
                  "&.MuiDataGrid-root--densityComfortable .MuiDataGrid-cell": {
                     py: "4px",
                  },
               }}
               loading={loading}
               error={error ? error : null}
            />
         </Container>
         <NewUserForm onCreateSuccess={handleCreateSuccess} />
      </Wrapper>
   );
};

export default UserManagement;
