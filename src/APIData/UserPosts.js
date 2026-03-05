import axios from "axios";

const BASE_URL = "https://route-posts.routemisr.com";
const USER_ENDPOINTS = "users";
const ENDPOINTS = "posts";

export default async function getUserPosts(userId) {
  const token = localStorage.getItem("user_token");
  if (!token) throw new Error("No user token found");

  return axios.get(`${BASE_URL}/${USER_ENDPOINTS}/${userId}/${ENDPOINTS}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}