import api from "./api";
export const CollectionGet = async () => {
  try {
    const res = await api.get(`/collection`, { withCredentials: true });
    return res.data;
  } catch (error) {
    console.log(error.response.data.message);
  }
};
