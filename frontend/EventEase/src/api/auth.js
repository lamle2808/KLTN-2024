import axios from "axios";

export const URL_BASE = 'http://localhost:8521/KLTN-2024/api/v1';

export const register = async (data) => {
  const response = await axios ({
    url: URL_BASE + '/auth/register',
    method: 'POST',
    data: {
      userName: data.userName,
      email: data.email,
      passWordAccount: data.password, 
    }
  });
  return response.data;
};

export const login = async (data) => {
  const response = await axios ({
    url: URL_BASE + '/auth/login',
    method: 'POST',
    data: {
      email: data.email,
      passWordAccount: data.password,
    }
  });
  return response;
}