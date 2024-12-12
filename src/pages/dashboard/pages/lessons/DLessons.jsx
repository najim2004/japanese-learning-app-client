import { AddLessonBtn } from "@/components/lesson/AddLessonBtn";
import { LessonCard } from "@/components/lesson/LessonCard";
import { LessonForm } from "@/components/lesson/LessonForm";
import { useEffect, useState } from "react";

export const DLessons = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const lessons = [
    {
      number: 1,
      name: "Basic Greetings",
      vocabularyCount: 15,
      completed: false,
      locked: false,
    },
  ];
  useEffect(() => {
    if (!open) {
      setIsEdit(false);
      setIsDelete(false);
      setLessonName("");
    }
  }, [open, setIsEdit, setIsDelete, setLessonName]);

  const onEdit = (id) => {
    setIsEdit(true);
    setOpen(true);
  };
  const onDelete = (id, lessonName) => {
    setIsDelete(true);
    setOpen(true);
    setLessonName(lessonName);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <AddLessonBtn setOpen={setOpen} />
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.number}
            lessonNumber={lesson.number}
            lessonName={lesson.name}
            vocabularyCount={lesson.vocabularyCount}
            isCompleted={lesson.completed}
            isLocked={lesson.locked}
            isAdmin={true}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
      <LessonForm
        open={open}
        setOpen={setOpen}
        isEdit={isEdit}
        isDelete={isDelete}
        lessonName={lessonName}
      />
    </>
  );
};
