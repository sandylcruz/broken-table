import { ajax } from "jquery";

export const signUp = (user) => {
  const formData = new FormData();
  formData.append("user[username]", user.username);
  formData.append("user[password]", user.password);
  formData.append("user[email]", user.email);
  formData.append("user[photo]", user.photo);
  formData.append("user[name]", user.name);
  formData.append("user[phoneNumber]", user.phoneNumber);
  formData.append("user[city]", user.city);
  formData.append("user[state]", user.state);

  return new Promise((resolve, reject) => {
    ajax({
      type: "POST",
      url: "/api/users",
      data: formData,
      contentType: false,
      processData: false,
      success: (userResponse) => {
        resolve(userResponse);
      },
      error: () => {
        reject();
      },
    });
  });
};

export const login = (user) =>
  new Promise((resolve, reject) => {
    ajax({
      type: "POST",
      url: "api/session/",
      data: { user },
      success: (userInfo) => {
        resolve(userInfo);
      },
      error: () => {
        reject();
      },
    });
  });

export const logout = () =>
  new Promise((resolve, reject) => {
    ajax({
      type: "DELETE",
      url: "api/session/",
      success: () => {
        resolve();
      },
      error: () => {
        reject();
      },
    });
  });
