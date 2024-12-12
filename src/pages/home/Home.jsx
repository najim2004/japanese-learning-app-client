import LessonNavigation from "@/components/lesson/LessonCard";
import TutorialNavigation from "@/components/tutorial/TutorialCard";

export const Home = () => {
  return (
    <div>
      <LessonNavigation />
      <TutorialNavigation />
    </div>
  );
};
