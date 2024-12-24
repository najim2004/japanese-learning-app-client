import { useEffect } from "react";
import { useGetUserMutation } from "@/redux/service/userApi";
import { useGetLessonsNamesQuery } from "@/redux/service/lessonApi";

export const InitialDataFetcher = ({ children }) => {
  const [getUser] = useGetUserMutation();
  const { data } = useGetLessonsNamesQuery();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUser();
    }
  }, [getUser]);
  return <>{children}</>;
};
