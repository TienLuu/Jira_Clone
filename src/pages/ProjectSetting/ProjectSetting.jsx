import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

import MoreMenu from "../../components/MoreMenu";
import TextField from "../../components/TextField";
import MenuSelect from "../../components/MenuSelect";
import Editor from "../../components/Editor";
import Button from "../../components/Button";
import Icon from "../../components/Icon";

import { getProjectDetail } from "../../slices/projectSlice";
import useRequest from "../../hooks/useRequest";
import projectAPI from "../../services/projectAPI";
import anothersAPI from "../../services/anothersAPI";

import { showSuccess, showError } from "../../utils/toast";
import {
   Wrapper,
   StyledTitle,
   StyledForm,
   OnlyReadField,
   CategoryItem,
} from "./Styles";

const ProjectSetting = () => {
   const { selectedProject } = useSelector((state) => state.project);
   const dispatch = useDispatch();
   const editorRef = useRef();
   const selectRef = useRef();

   const updateProject = useRequest(projectAPI.updateProject, { manual: true });

   const {
      handleSubmit,
      register,
      formState: { errors },
      setValue,
   } = useForm({
      defaultValues: {
         creator: "",
         id: "",
         projectName: "",
      },
   });

   useEffect(() => {
      setValue("id", selectedProject?.id);
      setValue("creator", selectedProject?.creator.id);
      setValue("projectName", selectedProject?.projectName);

      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [selectedProject]);

   const onSubmit = async (values) => {
      const updateValues = {
         ...values,
         description:
            editorRef.current?.getData() || selectedProject?.description || "",
         categoryId: selectRef.current.getValue().id,
      };

      try {
         const data = await updateProject.runAsync(values.id, updateValues);

         showSuccess("Save change successful");
         dispatch(getProjectDetail(data.id));
      } catch (error) {
         showError(error);
      }
   };

   return (
      <Wrapper>
         <StyledTitle>
            <h2>Project Details</h2>
            <MoreMenu items={[{ title: "Do something..." }]}>
               <Icon type="more" />
            </MoreMenu>
         </StyledTitle>
         <form onSubmit={handleSubmit(onSubmit)}>
            <StyledForm>
               <OnlyReadField>
                  <TextField
                     label="ID"
                     readOnly
                     disabled
                     {...register("id", {
                        required: {
                           value: true,
                           message: "Project ID is required",
                        },
                     })}
                     error={errors.id && errors.id.message}
                  />
                  <TextField
                     label="CreatorId"
                     disabled
                     readOnly
                     {...register("creator", {
                        required: {
                           value: true,
                           message: "Creator ID is required",
                        },
                     })}
                     error={errors.creator && errors.creator.message}
                  />
               </OnlyReadField>
               <TextField
                  label="Project Name"
                  {...register("projectName", {
                     required: {
                        value: true,
                        message: "Project Name is required",
                     },
                  })}
                  error={errors.projectName && errors.projectName.message}
               />
               <MenuSelect
                  value={selectedProject?.projectCategory}
                  serviceAPI={anothersAPI.getProjectCategories}
                  getItemsKey={(item) => item.id}
                  getSearchKey={(item) => item.projectCategoryName}
                  renderItem={(item) => (
                     <CategoryItem>
                        {item.projectCategoryName || item.name}
                     </CategoryItem>
                  )}
                  arrow
                  label="Category"
                  selectPlaceHolder={
                     <CategoryItem>Select Category</CategoryItem>
                  }
                  ref={selectRef}
               />
               <Editor
                  label="Description"
                  editorRef={editorRef}
                  data={selectedProject?.description}
               />
            </StyledForm>
            <Button variant="primary">Save</Button>
         </form>
      </Wrapper>
   );
};

export default ProjectSetting;
