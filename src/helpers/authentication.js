function isLoggedIn(){
  return localStorage.getItem("token") !== null;
}
function userLogout(){
  localStorage.removeItem("token");
  window.location.href = "/";
}
function saveUser({token, name}){
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
}
function userInfo(){
  if (localStorage.getItem("name") !== null){
    return {
      full_name: localStorage.getItem("name")
    }
  }
  return null;
  
}
export {
  isLoggedIn,
  saveUser,
  userInfo,
  userLogout
}