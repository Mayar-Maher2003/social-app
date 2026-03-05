import axios from "axios";

const BASE_URL = "https://route-posts.routemisr.com";

// display all comments
export async function getPostComments(postId) {
  try {
const token = localStorage.getItem("token");
    const { data } = await axios.get(
      `${BASE_URL}/posts/${postId}/comments`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log("Comments Response:", data);
    return data.data;
  } catch (error) {
    console.error("Error fetching comments:", error.response?.data || error);
    throw error;
  }
}

// add new comment
export async function createNewComment(postId, content) {
  try {
const token = localStorage.getItem("token");
    const { data } = await axios.post(
      `${BASE_URL}/comments`,
      {
        content: content,
        post: postId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Create Comment Response:", data);

    return data;
  } catch (error) {
    console.error("Error creating comment:", error.response?.data || error);
    throw error;
  }
}