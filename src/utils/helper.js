export const copyUrl = async () => {
   try {
      await navigator.clipboard.writeText(copyMe);
   } catch (error) {
      console.log(error);
   }
};
