import { Play, Clock, Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const TutorialCard = ({
  title,
  thumbnailUrl,
  duration,
  difficulty,
  youtubeLink,
}) => {
  return (
    <Card className="w-full max-w-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {/* Thumbnail */}
      <div className="relative">
        <img
          src={`/api/placeholder/400/225?text=${encodeURIComponent(title)}`}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <Play className="h-12 w-12 text-white" />
        </div>
      </div>

      {/* Card Content */}
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold line-clamp-2">{title}</h3>
          <Badge variant="outline" className="ml-2">
            <Star className="h-4 w-4 mr-1 text-yellow-500" />
            {difficulty}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-2">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="h-4 w-4 mr-2" />
          <span>{duration} minutes</span>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Preview</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
            </DialogHeader>
            <div className="aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={youtubeLink.replace("watch?v=", "embed/")}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </DialogContent>
        </Dialog>

        <Button asChild>
          <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Example usage component
const TutorialNavigation = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
  );
};

export default TutorialNavigation;
