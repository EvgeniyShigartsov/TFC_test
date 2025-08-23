import axios from "axios";

const apiInstance = axios.create({ baseURL: "/", timeout: 10000 });

const getUsers = async () => {
  const response = await apiInstance.get<User[]>("users.json");

  return response.data;
};

export const api = { getUsers };
