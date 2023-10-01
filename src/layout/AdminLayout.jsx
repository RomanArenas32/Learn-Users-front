import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";

export const AdminLayout = () => {


  const { auth } = useAuth();
  const {rol} = auth;
  console.log(rol)

  return (
    <>
      {
        auth ?
          (
            <Outlet />
          )
          : <Navigate to="/home" />
      }
    </>
  )
}
