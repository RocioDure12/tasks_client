import { useAppSelector } from "../../hooks";
import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);

  const getCurrentUser = async () => {
    setLoading(true);
    const result = await authApi.currentUser();
    if (result.error) {
      dispatch(setUserNull());
      return;
    }
    if (result.data) {
      dispatch(authenticateUser(result.data));
    }
    setLoading(false);
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  if (loading) {
    return <div>Loading</div>;
  } else if (!user) {
    return <Navigate to="/users/login" replace />;
  }

  return <>{props.children}</>;
}
