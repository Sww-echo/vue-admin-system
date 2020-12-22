import myaxios from "../myaxios/myaxios";

/* 
    导出各种接口
*/
// export const login = (params) =>
//   myaxios.post("admin/login", params).catch((err) => console.log(err));
export const login = (params) =>{
   return  myaxios.post("admin/login", params).catch((err) => console.log(err));
}
/* 退出接口 */
export const logout = ()=>{
    return myaxios.get("admin/signout").catch(err=>{console.log(err)})
}

// import { logout } from "..."
// export default logout  // import logout from "...."
