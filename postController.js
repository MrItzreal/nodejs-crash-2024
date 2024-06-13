const posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

//Different ways to export
// 1:
export const getPosts = () => posts;
// 2:
// export { getPosts };
// 3:
export default getPosts;

//You can also export something as default and another as not default
export const getPostsLength = () => posts.length;
