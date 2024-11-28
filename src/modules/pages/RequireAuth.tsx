import { useAppSelector } from "../../hooks";
import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate} from "react-router-dom";
import useUserApi from "../hooks/useUserApi";
import { useAppDispatch } from "../../hooks";
import {
  setAuthenticatedUser,
  clearAuthenticatedUser,
  selectAuthenticatedUser,
} from "../slices/authSlice";

export default function RequireAuth(props: PropsWithChildren) {
  const userApi = useUserApi();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectAuthenticatedUser)
  const [loading, setLoading] = useState<boolean>();

  const getCurrentUser = async () => {
    setLoading(true);
    const result = await userApi.currentUser();
    if (result.error) {
      dispatch(clearAuthenticatedUser());
    } else if (result.data) {
      dispatch(setAuthenticatedUser(result.data));
    }
    setLoading(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (loading === false && !user) return <Navigate to="/users/login" replace />;
  if (loading === false && user) return props.children;
  if (loading) return <>Loading...</>;

  {
    /*if (!user) {
    return <Navigate to="/users/login" replace />;
  } else{
     return <>{props.children}</>;
  */
  }
}
