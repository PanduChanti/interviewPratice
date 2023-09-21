export const getFakeLogin = () => {
  return sessionStorage.getItem("Islogged") === "true" ? true : false
}
