export const copyUrl = async (copyMe) => {
   try {
      await navigator.clipboard.writeText(copyMe);
   } catch (error) {
      console.log(error);
   }
};
