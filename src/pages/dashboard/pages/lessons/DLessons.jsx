import { AddLessonBtn } from "@/components/lesson/AddLessonBtn";
import { LessonCard } from "@/components/lesson/LessonCard";
import { LessonForm } from "@/components/lesson/LessonForm";
import { useToast } from "@/hooks/use-toast";
import {
  useCreateLessonMutation,
  useDeleteLessonMutation,
  useGetLessonsByAdminQuery,
  useUpdateLessonMutation,
} from "@/redux/service/lessonApi";
import { useEffect, useState } from "react";

export const DLessons = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [lessonName, setLessonName] = useState("");
  const [lessonNumber, setLessonNumber] = useState(null);
  const [lessonDescription, setLessonDescription] = useState("");
  const [lessonId, setLessonId] = useState(null);

  const [onCreateLesson, { isLoading: mutationLoading, isError }] =
    useCreateLessonMutation();

  const [onDeleteLesson, { isLoading: deleteLoading, isError: deleteError }] =
    useDeleteLessonMutation();

  const [onUpdateLesson, { isLoading: updateLoading, isError: updateError }] =
    useUpdateLessonMutation();

  const { data } = useGetLessonsByAdminQuery();

  const { toast } = useToast();

  useEffect(() => {
    if (!open) {
      setIsEdit(false);
      setIsDelete(false);
      setLessonName("");
      setLessonNumber(null);
      setLessonDescription("");
      setLessonId(null);
    }
  }, [open, setIsEdit, setIsDelete, setLessonName]);

  const onEdit = (id) => {
    const lesson = data?.data?.lessons?.find((lesson) => lesson._id === id);
    setLessonId(id);
    setLessonName(lesson?.name);
    setLessonNumber(lesson?.lessonNumber);
    setLessonDescription(lesson?.description);
    setIsEdit(true);
    setOpen(true);
  };
  const onDelete = async (id, lessonName) => {
    setIsDelete(true);
    setOpen(true);
    setLessonName(lessonName);
    setLessonId(id);
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
    if (isEdit && !isDelete) {
      try {
        const lesson = {};
        if (lessonName !== data?.lesson_name) {
          lesson.name = data?.lesson_name;
        }
        if (lessonNumber !== data?.lesson_number) {
          lesson.lessonNumber = data?.lesson_number;
        }
        if (lessonDescription !== data?.lesson_description) {
          lesson.description = data?.lesson_description;
        }
        const res = await onUpdateLesson({
          id: lessonId,
          ...lesson,
        }).unwrap();
        handleToast(res);
        console.log(res);
      } catch (error) {
        console.error(error);
        handleToast({ success: false, msg: error.message });
      }
    }
    if (isDelete && !isEdit) {
      try {
        if (lessonName === data?.lesson_name) {
          const res = await onDeleteLesson(lessonId).unwrap();
          handleToast(res);
        } else {
          throw new Error("Lesson name does not match");
        }
      } catch (error) {
        console.error(error);
        handleToast({ success: false, msg: error.message });
      }
    }
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <AddLessonBtn setOpen={setOpen} />
        {data?.data?.lessons?.map((lesson) => (
          <LessonCard
            key={lesson?._id}
            id={lesson?._id}
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
        lessonNumber={lessonNumber}
        lessonDescription={lessonDescription}
        isLoading={mutationLoading || deleteLoading}
      />
    </>
  );
};
