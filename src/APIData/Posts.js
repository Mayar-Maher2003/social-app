import axios from "axios";
// display posts
export async function getAllPosts() {
  const token = localStorage.getItem("user-token");

  const { data } = await axios.get("https://route-posts.routemisr.com/posts", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: {
      sort: "-createdAt",
    },
  });
  // console.log("API Response:", data.data.posts);

  // return posts
  return data.data.posts;
}

export async function getSinglePost(id) {
  const token = localStorage.getItem("user-token");

  const response = await axios.get(
    `https://route-posts.routemisr.com/posts/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );

  // console.log("API RESPONSE:", response.data);

  return response.data.data;
}




