import PropTypes from "prop-types";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";

import TextField from "../../../components/TextField";
import Button from "../../../components/Button/Button";
import Editor from "../../../components/Editor";
import MenuSelect from "../../../components/MenuSelect";

import projectAPI from "../../../services/projectAPI";
import anothersAPI from "../../../services/anothersAPI";
import useRequest from "../../../hooks/useRequest";

import { showSuccess, showError } from "../../../utils/toast";
import {
   StyledButton,
   TextFieldWrapper,
   Title,
   CategoryItem,
   ButtonClose,
   FormControl,
   Overlay,
   StyledModal,
   ModalContainer,
} from "./Styles";

const propTypes = {
   onCreateSuccess: PropTypes.func.isRequired,
};

const NewProjectForm = ({ onCreateSuccess }) => {
   const [open, setOpen] = useState(false);

   const editorRef = useRef();
   const selectRef = useRef();

   const createProject = useRequest(projectAPI.createProject, { manual: true });

   const {
      handleSubmit,
      register,
      formState: { errors },
      reset,
   } = useForm({
      defaultValues: {
         alias: "",
         projectName: "",
      },
   });

   const handleOpenForm = () => {
      setOpen(true);
   };

   const handleCloseForm = () => {
      setOpen(false);
      formMethod.reset();
   };

   const handleCreateProject = async (values) => {
      try {
         const projectValue = {
            ...values,
            description: editorRef.current.getData(),
            categoryId: selectRef.current.getValue()?.id,
         };

         const createdProject = await createProject.runAsync(projectValue);

         await projectAPI.addUserToProject({
            userId: createdProject.creator,
            projectId: createdProject.id,
         });

         onCreateSuccess();
         formMethod.reset();

         showSuccess(`Create project ${values.projectName} successful`);
      } catch (error) {
         showError(error);
      }
   };

   const formMethod = {
      reset: (...params) => {
         reset(...params);
         editorRef.current.setData("");
         selectRef.current.setValue();
      },
      closeForm: handleCloseForm,
   };

   return (
      <>
         <StyledButton onClick={handleOpenForm}>
            <Button variant="primary">Add Project</Button>
         </StyledButton>
         <StyledModal className={`${open ? "open" : ""}`}>
            <ModalContainer>
               <Title>
                  <h2>Create Project</h2>
               </Title>
               <form onSubmit={handleSubmit(handleCreateProject)}>
                  <TextFieldWrapper>
                     <TextField
                        placeholder="Project Name"
                        {...register("projectName", { required: true })}
                        error={
                           errors.projectName
                              ? "Project Name is required"
                              : null
                        }
                     />
                     <TextField
                        placeholder="Alias Name"
                        {...register("alias", { required: true })}
                        error={errors.alias ? "Alias Name is required" : null}
                     />
                     <MenuSelect
                        serviceAPI={anothersAPI.getProjectCategories}
                        getItemsKey={(item) => item.id}
                        getSearchKey={(item) => item.projectCategoryName}
                        renderItem={(item, index) => (
                           <CategoryItem key={index}>
                              {item.projectCategoryName || item.name}
                           </CategoryItem>
                        )}
                        arrow
                        selectPlaceHolder={
                           <CategoryItem>Select Category</CategoryItem>
                        }
                        ref={selectRef}
                     />
                     <Editor editorRef={editorRef} />
                     <FormControl>
                        <Button variant="primary">Create</Button>
                     </FormControl>
                  </TextFieldWrapper>
               </form>
            </ModalContainer>
            <ButtonClose onClick={handleCloseForm}>X</ButtonClose>
         </StyledModal>
         <Overlay
            className={`${open ? "open" : ""}`}
            onClick={handleCloseForm}
         ></Overlay>
      </>
   );
};

NewProjectForm.propTypes = propTypes;

export default NewProjectForm;
