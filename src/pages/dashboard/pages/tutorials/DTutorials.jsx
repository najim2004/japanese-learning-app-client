import { AddLessonBtn } from "@/components/lesson/AddLessonBtn";
import { TutorialCard } from "@/components/tutorial/TutorialCard";
import { TutorialForm } from "@/components/tutorial/TutorialForm";
import { useEffect, useState } from "react";

export const DTutorials = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [title, setTitle] = useState("");
  const tutorials = [
    {
      title: "Japanese Pronunciation Masterclass",
      duration: 25,
      difficulty: "Advanced",
      youtubeLink:
        "https://www.youtube.com/embed/SxTYjptEzZs?si=jVxLyMFooUPEQDzP",
    },
    {
      title: "Japanese Pronunciation Masterclass",
      duration: 25,
      difficulty: "Advanced",
      youtubeLink:
        "https://www.youtube.com/embed/SxTYjptEzZs?si=jVxLyMFooUPEQDzP",
    },
    {
      title: "Japanese Pronunciation Masterclass",
      duration: 25,
      difficulty: "Advanced",
      youtubeLink:
        "https://www.youtube.com/embed/SxTYjptEzZs?si=jVxLyMFooUPEQDzP",
    },
    {
      title: "Japanese Pronunciation Masterclass",
      duration: 25,
      difficulty: "Advanced",
      youtubeLink:
        "https://www.youtube.com/embed/SxTYjptEzZs?si=jVxLyMFooUPEQDzP",
    },
    {
      title: "Japanese Pronunciation Masterclass",
      duration: 25,
      difficulty: "Advanced",
      youtubeLink: "https://www.youtube.com/watch?v=SxTYjptEzZs",
    },
  ];
  useEffect(() => {
    if (!open) {
      setIsEdit(false);
      setIsDelete(false);
      setTitle("");
    }
  }, [open, setIsEdit, setIsDelete, setTitle]);

  const onEdit = (id) => {
    setIsEdit(true);
    setOpen(true);
  };
  const onDelete = (id, Title) => {
    setIsDelete(true);
    setOpen(true);
    setTitle(Title);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        <AddLessonBtn setOpen={setOpen} />
        {tutorials.map((tutorial, index) => (
          <TutorialCard
            key={index}
            title={tutorial.title}
            duration={tutorial.duration}
            difficulty={tutorial.difficulty}
            youtubeLink={tutorial.youtubeLink}
            isAdmin={true}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
      <TutorialForm
        open={open}
        setOpen={setOpen}
        isEdit={isEdit}
        isDelete={isDelete}
        title={title}
      />
    </>
  );
};
