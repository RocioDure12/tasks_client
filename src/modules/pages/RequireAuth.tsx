import { useAppSelector } from "../../hooks";
import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuthApi from "../hooks/useAuthApi";
import { useAppDispatch } from "../../hooks";
import {
  authenticateUser,
  currentUser,
  setUserNull,
} from "../slices/authSlice";

export default function RequireAuth(props: PropsWithChildren) {
  const authApi = useAuthApi();
  const dispatch = useAppDispatch();
  const user = useAppSelector(currentUser);
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>();

  const getCurrentUser = async () => {
    setLoading(true);
    const result = await authApi.currentUser();
    if (result.error) {
      dispatch(setUserNull());
    } else if (result.data) {
      dispatch(authenticateUser(result.data));
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
