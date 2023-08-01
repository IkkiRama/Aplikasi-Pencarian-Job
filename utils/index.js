// export const checkImageURL = (url) => {
//   if (typeof str !== "string") return false;
//   return !!str.match(/\w+\.(jpg|jpeg|gif|png|tiff|bmp)$/gi);
// };
export const checkImageURL = (url) => {
  if (!url) return false;
  else {
    const pattern = new RegExp(
      "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
      "i"
    );
    return pattern.test(url);
  }
};
