export const getUserInfo = function () {
  if(sessionStorage.getItem('userInfo')){
    return JSON.parse(sessionStorage.getItem('userInfo'))
  }else {
    return null;
  }
};

export const setUserInfo = function (userInfo) {
    sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
};
