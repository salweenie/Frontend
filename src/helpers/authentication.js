function isLoggedIn(){
  return localStorage.getItem("token") !== null;
}
function userLogout(){
  localStorage.removeItem("token");
  window.location.href = "/";
}
function saveUser({token}){
  localStorage.setItem("token", token);
}
function userInfo(){
  return {
    full_name: "Mustafa Hanif"
  }
}
export {
  isLoggedIn,
  saveUser,
  userInfo,
  userLogout
}