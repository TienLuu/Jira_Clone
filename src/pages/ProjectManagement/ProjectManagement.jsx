import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import AvatarGroup from "@mui/material/AvatarGroup";

import MoreMenu from "../../components/MoreMenu";
import SearchBar from "../../components/SearchBar";
import TableData from "../../components/TableData";
import Icon from "../../components/Icon";
import Avatar from "../../components/Avatar";
import NewProjectForm from "./NewProjectForm";
import MenuSelect from "../../components/MenuSelect";

import useRequest from "../../hooks/useRequest";
import { getProjects } from "../../slices/projectSlice";
import projectAPI from "../../services/projectAPI";

import { showError, showSuccess } from "../../utils/toast";
import {
   Wrapper,
   Title,
   StyledSearch,
   Container,
   StyledMenuItem,
} from "./Styles";

const UserManagement = () => {
   const { projects, loading, error } = useSelector((state) => state.project);
   const navigate = useNavigate();
   const dispatch = useDispatch();

   const [searchParams, setSearchParams] = useSearchParams();
   const searchValue = searchParams.get("keyword") || "";

   const deleteProject = useRequest(projectAPI.deleteProject, { manual: true });

   const getProjectList = () => {
      dispatch(getProjects(searchValue));
   };

   useEffect(() => {
      getProjectList();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   const handleCreateSuccess = () => {
      getProjectList();
   };

   const handleSearchParams = (debounceValue) => {
      dispatch(getProjects(debounceValue));

      if (!debounceValue) {
         setSearchParams();
         return;
      }

      setSearchParams({ keyword: debounceValue });
   };

   const handleSelect = (action, id) => {
      if (action === "detail") {
         navigate(`/projects/${id}/board`);
         return;
      }

      if (action === "setting") {
         navigate(`/projects/${id}/settings`);
      }

      if (action === "delete") {
         deleteProject
            .runAsync(id)
            .then(() => {
               showSuccess("Delete project successfull");
               dispatch(getProjects(searchValue));
            })
            .catch((error) => {
               showError(error);
            });
         return;
      }
   };

   const handleSelectUser = (item) => {
      navigate(`/users/${item.userId}`);
   };

   const actions = [
      {
         title: "Detail",
         icon: <Icon type="board" />,
         action: "detail",
      },
      {
         title: "Setting",
         icon: <Icon type="settings" />,
         action: "setting",
      },
      {
         title: "Delete",
         icon: <Icon type="trash" />,
         action: "delete",
      },
   ];

   const columns = [
      {
         field: "projectName",
         headerName: "Name",
         flex: 3,
         minWidth: 200,
      },
      {
         field: "categoryName",
         headerName: "Category",
         flex: 2,
         minWidth: 150,
      },
      {
         field: "creator",
         headerName: "Creator",
         flex: 2,
         minWidth: 150,
         renderCell: (params) => params.value.name,
      },
      {
         field: "members",
         headerName: "Member",
         flex: 2,
         minWidth: 150,
         renderCell: (params) => {
            return (
               <MenuSelect
                  items={params.value}
                  maxRender={3}
                  stepRender={2}
                  renderItem={(item) => (
                     <StyledMenuItem>
                        <Avatar avatarUrl={item.avatar} size={24} />
                        <span>{item.name}</span>
                        {item.userId === params.row.creator.id
                           ? " ✨Creator"
                           : null}
                     </StyledMenuItem>
                  )}
                  getSearchKey={(item) => item.name}
                  getItemsKey={(item) => item.userId}
                  rootClass="memberWrapper"
                  onChange={handleSelectUser}
                  defaultPlaceHolder={
                     <AvatarGroup
                        max={4}
                        total={params.value.lenght}
                        sx={{
                           "& .MuiAvatar-root": {
                              width: 22,
                              height: 22,
                              fontSize: 12,
                              lineHeight: "22px",
                           },
                        }}
                        className="styledGroup"
                     >
                        {params.value?.map((item) => (
                           <Avatar
                              key={item.userId}
                              className="memberAvatar"
                              avatarUrl={item?.avatar}
                              size={26}
                              alt={item?.name}
                           />
                        ))}
                     </AvatarGroup>
                  }
               />
            );
         },
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
                     handleSelect(action, params.row.id);
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
            <h2>Projects</h2>
         </Title>
         <StyledSearch>
            <SearchBar
               placeholder="Search project here"
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
               rows={projects || []}
               columns={columns}
               getRowId={(row) => row.id}
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
         <NewProjectForm onCreateSuccess={handleCreateSuccess} />
      </Wrapper>
   );
};

export default UserManagement;
