import { AddLessonBtn } from "@/components/lesson/AddLessonBtn";
import { LessonCard } from "@/components/lesson/LessonCard";
import { LessonForm } from "@/components/lesson/LessonForm";
import { useToast } from "@/hooks/use-toast";
import {
  useCreateLessonMutation,
  useGetLessonsByAdminQuery,
} from "@/redux/service/lessonApi";
import { useEffect, useState } from "react";

export const DLessons = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [onCreateLesson, { isLoading: mutationLoading, isError }] =
    useCreateLessonMutation();
  const { data } = useGetLessonsByAdminQuery();
  const { toast } = useToast();
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

  const handleToast = (res) => {
    if (res?.success) {
      toast({
        variant: "default",
        title: "Success",
        description: res.msg || "Lesson created successfully",
      });
      setOpen(false);
    } else {
      toast({
        variant: "destructive",
        title: "Error",
        description: res?.msg || "Failed to create lesson",
      });
    }
  };

  const onSubmit = async (data) => {
    if (!isEdit && !isDelete) {
      try {
        const {
          lesson_name: name,
          lesson_number: lessonNumber,
          lesson_description: description,
        } = data;
        const res = await onCreateLesson({
          name,
          lessonNumber,
          description,
        }).unwrap();
        handleToast(res);
      } catch (error) {
        console.error(error);
      }
    }
    // if (isEdit && !isDelete) {
    // }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <AddLessonBtn setOpen={setOpen} />
        {data?.data?.lessons?.map((lesson) => (
          <LessonCard
            key={lesson?._id}
            lessonNumber={lesson?.lessonNumber}
            lessonName={lesson.name}
            lessonDescription={lesson?.description}
            vocabularyCount={lesson?.vocabularyCount}
            isAdmin={true}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
      <LessonForm
        onSubmit={onSubmit}
        open={open}
        setOpen={setOpen}
        isEdit={isEdit}
        isDelete={isDelete}
        lessonName={lessonName}
      />
    </>
  );
};
