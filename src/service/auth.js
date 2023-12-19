import api from "./api"

export const AuthLogin = async (data) => {
    const response = await api.post('/auth/login',data );
    return response;
}
export const AuthSignUp = async (data) => {
    const response = await api.post('/user/client',data );
    return response;
}