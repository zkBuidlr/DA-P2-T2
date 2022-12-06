import { useState, useEffect } from "react";
import AddNewPost from "../../components/Posts2/AddNewPost";
import DisplayPosts from "../../components/Posts2/DisplayPosts";

export default function POSTS() {
  const [data, setData] = useState(null);

  // 1. fetchPosts
  useEffect(() => {
    async function fetchPosts() {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      response = await response.json();
      setData(response);
    }

    fetchPosts();
  }, []);

  if (!data) return <p>No POSTS fetched</p>;
  return (
    <div>
      <AddNewPost data={data} setData={setData} />
      <DisplayPosts data={data} />
    </div>
  );
}
