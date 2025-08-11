import { useAppSelector } from "../../hooks";
import { PropsWithChildren, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import useUserApi from "../hooks/useUserApi";
import { useAppDispatch } from "../../hooks";
import {
  setAuthenticatedUser,
  clearAuthenticatedUser,
  selectAuthenticatedUser,
} from "../slices/authSlice";
import Loading from "../components/Loading"; // Ajusta ruta si hace falta

export default function RequireAuth(props: PropsWithChildren) {
  const userApi = useUserApi();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectAuthenticatedUser);
  const [loading, setLoading] = useState<boolean>(true); // empieza en true porque carga

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

  if (loading) return <Loading />;
  if (!user) return <Navigate to="/users/login" replace />;
  return <>{props.children}</>;
}
