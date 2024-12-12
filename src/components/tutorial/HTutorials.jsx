import { Link } from "react-router-dom";
import { TutorialCard } from "./TutorialCard";

// Example usage component
export const HTutorials = () => {
  const tutorials = [
    {
      title: "Japanese Hiragana Basics for Beginners",
      duration: 15,
      difficulty: "Beginner",
      youtubeLink: "https://www.youtube.com/watch?v=example1",
    },
    {
      title: "Essential Japanese Phrases You Must Know",
      duration: 20,
      difficulty: "Intermediate",
      youtubeLink: "https://www.youtube.com/watch?v=example2",
    },
    {
      title: "Japanese Pronunciation Masterclass",
      duration: 25,
      difficulty: "Advanced",
      youtubeLink: "https://www.youtube.com/watch?v=example3",
    },
  ];

  return (
    <div className="px-6 mt-10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold mb-4">Tutorials</h1>
        <Link to="/tutorials" className="font-semibold text-blue-400">
          See all tutorials
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {tutorials.map((tutorial, index) => (
          <TutorialCard
            key={index}
            title={tutorial.title}
            duration={tutorial.duration}
            difficulty={tutorial.difficulty}
            youtubeLink={tutorial.youtubeLink}
          />
        ))}
      </div>
    </div>
  );
};
