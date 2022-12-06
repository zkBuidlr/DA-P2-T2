import React, { Component } from "react";
import AddNewPost from "../../components/Posts3/AddNewPost";
import DisplayPosts from "../../components/Posts3/DisplayPosts";

export default class Posts3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };

    this.postAddHandle = this.postAddHandle.bind(this);
  }

  //   }

  //   componentDidMount() {
  //     fetchBlogPosts().then(result => this.setState({posts: result}))
  //   }

  // componentDidMount() {
  //   const post = {
  //     title: "Post1",
  //     body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nisi turpis, ultrices in tristique eget, faucibus ut dui. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  //     id: 1,
  //   };
  //   this.setState({ posts: [...this.state.posts, post] });
  // }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((output) => {
        this.setState({ posts: output });
      });
  }

  postAddHandle(event) {
    event.preventDefault();
    const title = event.target.elements.title.value;
    const body = event.target.elements.body.value;
    const post = {
      title: title,
      body: body,
      id: 2,
    };
    // const newPosts = this.state.posts.concat(post);
    this.setState({
      posts: [...this.state.posts, post],
    });
  }

  render() {
    const data = this.state.posts;
    if (!data) return <p>No POSTS fetched</p>;
    return (
      <div>
        <AddNewPost postAddHandle={this.postAddHandle} />
        <DisplayPosts data={data} />
      </div>
    );
  }
}
