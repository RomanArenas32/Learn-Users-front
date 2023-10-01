import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../hooks";


export const UsersLayout = () => {


  const { auth } = useAuth();

  return (
    <>
      {
        auth
          ?
          (
            <Outlet />
          )
          :
          <Navigate to="/home" />
      }

    </>

  )
}
