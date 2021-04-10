import { ajax } from "jquery";

export const signUp = (user) =>
  new Promise((resolve, reject) => {
    ajax({
      type: "POST",
      url: "/api/users",
      data: { user },
      success: (userResponse) => {
        resolve(userResponse);
      },
      error: () => {
        reject();
      },
    });
  });

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