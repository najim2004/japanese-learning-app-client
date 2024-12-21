import { useEffect } from "react";
import { useGetUserMutation } from "@/redux/service/userApi";

export const InitialDataFetcher = ({ children }) => {
  const [getUser] = useGetUserMutation();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    }
  }, [getUser]);
  return <>{children}</>;
};
