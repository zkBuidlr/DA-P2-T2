import { useState, useEffect } from "react";

// 3. addNewPost

const AddNewPost = ({ data, setData }) => {
  function postAddHandle(event) {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const post = {
      title: title,
      body: body,
      id: 2,
    };
    const newPosts = data.concat(post);
    setData(newPosts);
  }

  return (
    <div>
      <h1 className="font-bold text-2xl m-2">ADD POSTS</h1>
      <form onSubmit={postAddHandle} className="w-2/5">
        <input
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          name="title"
          placeholder="Title"
        />
        <input
          className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
          name="body"
          placeholder="Body"
        />
        <button
          className="border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Add post
        </button>
      </form>
    </div>
  );
};

export default AddNewPost;
