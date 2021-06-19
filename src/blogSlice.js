import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  blogCounter: 0,
  blogdata: [{
    id: 1,
    head: "gokul",
    body: "you should really edit your example JSON payloads into your question ... it makes them much easier to readou should really edit your example JSON payloads into your question ... it makes them much easier to read\nou should really edit your example JSON payloads into your question ... it makes them much easier to read"
  },{
    id: 2,
    head: "gokul",
    body: "you should really edit your example JSON payloads into your question ... it makes them much easier to readou should really edit your example JSON payloads into your question ... it makes them much easier to read\nou should really edit your example JSON payloads into your question ... it makes them much easier to read"
  }]
};
export const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blog = action.payload;
    }
  }
});
export const { addBlog } = blogSlice.actions;
export const noofBlog = (state) => state.blog.blogCounter;
export const blogData = (state) => state.blog.blogdata;

export default blogSlice.reducer;