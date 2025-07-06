import axios from "axios";

async function registerUserRequest(formData) {
  const { username, email, password } = formData;
  const url = `${import.meta.env.VITE_BACKEND_URL}/authentication/register`;

  try {
    if (!username) {
      throw Error("Username is required");
    }
    if (!email) {
      throw Error("Email is required");
    }
    if (!password) {
      throw Error("Password is required");
    }
    const response = await axios.post(url, formData, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error?.response?.data);
    }

    throw Error(error.message);
  }
}

async function loginUserRequest(formData) {
  const { email, password } = formData;
  const url = `${import.meta.env.VITE_BACKEND_URL}/authentication/login`;

  try {
    if (!email) {
      throw Error("Email is required");
    }
    if (!password) {
      throw Error("Password is required");
    }
    const response = await axios.post(url, formData, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error?.response?.data);
    }

    throw Error(error.message);
  }
}

async function checkUserStatusRequest() {
  const url = `${import.meta.env.VITE_BACKEND_URL}/authentication/status`;

  try {
    const response = await axios.get(url, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error?.response?.data);
    }
  }
}

async function logoutUserRequest() {
  const url = `${import.meta.env.VITE_BACKEND_URL}/authentication/logout`;

  try {
    const response = await axios.post(url, null, { withCredentials: true });
    return response.data;
  } catch (error) {
    if (error?.response?.data) {
      throw Error(error?.response?.data);
    }
  }
}

export {
  registerUserRequest,
  loginUserRequest,
  checkUserStatusRequest,
  logoutUserRequest,
};
