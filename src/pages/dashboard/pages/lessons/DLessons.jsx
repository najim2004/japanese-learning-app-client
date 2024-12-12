import { LessonCard } from "@/components/lesson/LessonCard";
import React from "react";

export const DLessons = () => {
  const lessons = [
    {
      number: 1,
      name: "Basic Greetings",
      vocabularyCount: 15,
      completed: false,
      locked: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.number}
          lessonNumber={lesson.number}
          lessonName={lesson.name}
          vocabularyCount={lesson.vocabularyCount}
          isCompleted={lesson.completed}
          isLocked={lesson.locked}
          isAdmin={true}
        />
      ))}
    </div>
  );
};
