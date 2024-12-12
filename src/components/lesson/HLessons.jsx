import { Link } from "react-router-dom";
import { LessonCard } from "./LessonCard";

// Example usage component
export const HLessons = () => {
  const lessons = [
    {
      number: 1,
      name: "Basic Greetings",
      vocabularyCount: 15,
      completed: false,
      locked: false,
    },
    {
      number: 2,
      name: "Numbers and Counting",
      vocabularyCount: 20,
      completed: true,
      locked: false,
    },
    {
      number: 3,
      name: "Daily Phrases",
      vocabularyCount: 25,
      completed: false,
      locked: true,
    },
  ];

  return (
    <div className="px-6 mt-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-4">Lessons</h1>
        <Link to="/lessons" className="font-semibold text-blue-400">
          See all lessons
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.number}
            lessonNumber={lesson.number}
            lessonName={lesson.name}
            vocabularyCount={lesson.vocabularyCount}
            isCompleted={lesson.completed}
            isLocked={lesson.locked}
          />
        ))}
      </div>
    </div>
  );
};
