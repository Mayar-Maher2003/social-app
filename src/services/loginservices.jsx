import  axios  from "axios";
export async function loginData(dataForm) {
  let { data } = await axios.post(
    "https://route-posts.routemisr.com/users/signin",
    dataForm,
  );
    return data;

}

