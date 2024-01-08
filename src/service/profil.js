import api from "./api"
export const ProfilGet = async (id) => {
  try {
    const res = await api.get(`/user/client/${id}`, { withCredentials: true });
    return res.data
  } catch (error) {
    console.log(error.response.data.message)
  }
};
export const ProfillUpdate = async (id,data) => {
  const response = await api.patch(`/user/client/${id}`, data)
  return response;
};
