import LessonNavigation from "@/components/lesson/LessonCard";
import React from "react";

export const Lessons = () => {
  return (
    <div className="mt-2">
      <h1 className="text-2xl font-semibold">All Lessons</h1>
      <LessonNavigation />
    </div>
  );
};
