const signup = (user) =>
  new Promise((resolve, reject) => {
    $.ajax({
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

export default signup;
