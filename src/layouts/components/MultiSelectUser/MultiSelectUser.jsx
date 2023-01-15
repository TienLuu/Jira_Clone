import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useSelector } from "react-redux";

import MenuSelect from "../../../components/MenuSelect";
import Avatar from "../../../components/Avatar";
import Icon from "../../../components/Icon";

import {
   Assignment,
   ButtonAssignment,
   ButtonRemove,
   Member,
   Wrapper,
   WrapperMember,
} from "./Styles";

const MultiSelectUser = forwardRef((_, ref) => {
   const { selectedProject } = useSelector((state) => state.project);
   const [selectedMember, setSelectedMember] = useState([]);
   const selectRef = useRef();

   const handleSelectUser = (item, selectMethod) => {
      setSelectedMember((prev) => {
         if (prev.find((x) => x.userId === item.userId)) return prev;
         return [...prev, item];
      });
      selectMethod.toggleSelect(false);
   };

   const handleRemoveUser = (id) => {
      setSelectedMember((prev) => {
         return prev.filter((item) => item.userId !== id);
      });
   };

   const multiSelectMethod = {
      getValue: () => selectedMember,
      setValue: (value) => {
         setSelectedMember(value);
      },
   };

   useImperativeHandle(ref, () => multiSelectMethod);

   return (
      <Wrapper>
         <MenuSelect
            ref={selectRef}
            onChange={handleSelectUser}
            defaultPlaceHolder={
               <WrapperMember>
                  {selectedMember.map((item) => (
                     <Member
                        key={item.userId}
                        onClick={(evt) => evt.stopPropagation()}
                     >
                        <Avatar avatarUrl={item.avatar} size={18} />
                        <span>{item.name}</span>
                        <ButtonRemove
                           onClick={() => handleRemoveUser(item.userId)}
                        >
                           <Icon type="close" size={18} center />
                        </ButtonRemove>
                     </Member>
                  ))}
                  <ButtonAssignment>
                     <Icon type="plus" size={14} />
                     <span>Add User</span>
                  </ButtonAssignment>
               </WrapperMember>
            }
            renderItem={(item) => (
               <Assignment
                  className={`${
                     !!selectedMember.find(
                        (member) => member.userId === item.userId
                     )
                        ? "alreadySelect"
                        : ""
                  }`}
               >
                  <Avatar avatarUrl={item.avatar} size={22} />
                  <span>
                     {item.name}
                     {selectedProject.creator.id === item.userId
                        ? " ✨ (Project owner)"
                        : ""}
                  </span>
               </Assignment>
            )}
            maxRender={4}
            stepRender={2}
            getSearchKey={(item) => item.name}
            getItemsKey={(item) => item.userId}
            items={selectedProject?.members || []}
            rootClass="assignmentBtnWrapper"
            label="Assigment"
         />
      </Wrapper>
   );
});

export default MultiSelectUser;
