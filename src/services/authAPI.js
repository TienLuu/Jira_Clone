import fetcher from "./fetcher";

const authAPI = {
   signin: (values) => {
      return fetcher.post("Users/signin", values);
   },
   signup: (values) => {
      return fetcher.post("Users/signup", values);
   },
};

export default authAPI;
