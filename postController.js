const posts = [
    {id: 1, title: "post one"},
    {id: 2, title: "post two"},

];
const getPosts = () => posts; 
// to export this  we have two ways: 
// 1_ export const getPosts = () => posts; 
// 2_export {getPosts};
//in index.js we should impoert it like this import  {getPosts}  from "./postController.js"; 
// export defualt getposts; in index.js we should impoert it like this import  getPosts  from "./postController.js"; 

export const getpostsLength = () => posts.length;

export default getPosts;