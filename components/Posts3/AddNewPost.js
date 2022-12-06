import React, { Component } from "react";

export default class AddNewPost extends Component {
  static props = {};

  render() {
    const postAddHandle = this.props.postAddHandle;
    return (
      <div>
        <h1 className="font-bold text-2xl m-2">ADD POSTS.</h1>
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
  }
}
