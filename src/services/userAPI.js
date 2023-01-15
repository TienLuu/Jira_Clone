import fetcher from "./fetcher";

const userAPI = {
   getUsers: (keyword) => {
      return fetcher.get("Users/getUser", {
         params: {
            keyword: keyword,
         },
      });
   },

   getUserByProjectId: (projectId) => {
      return fetcher.get("Users/getUserByProjectId", {
         params: {
            idProject: projectId,
         },
      });
   },

   updateUser: (values) => {
      return fetcher.put("/Users/editUser", values);
   },

   deleteUser: (userId) => {
      return fetcher.delete("Users/deleteUser", {
         params: {
            id: userId,
         },
      });
   },
};

export default userAPI;
