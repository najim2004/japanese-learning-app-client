import { Link } from "react-router-dom";
import { BookOpen, Check, Lock } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export const LessonCard = ({
  lessonNumber,
  lessonName,
  vocabularyCount,
  isCompleted = false,
  isLocked = false,
  isAdmin = false,
}) => {
  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">
            Lesson {lessonNumber}: {lessonName}
          </CardTitle>
          {isAdmin && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  <Trash className="mr-2 h-4 w-4" />
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          {isCompleted && !isAdmin && (
            <Badge
              variant="outline"
              className="text-green-600 border-green-600"
            >
              <Check className="mr-1 h-4 w-4" /> Completed
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4" />
            <span>{vocabularyCount} Vocabulary Words</span>
          </div>
          {!isCompleted && !isAdmin && (
            <Progress value={isLocked ? 0 : 50} className="w-24 h-2" />
          )}
        </div>
        {isLocked && !isAdmin ? (
          <div className="flex items-center justify-center text-muted-foreground py-4">
            <Lock className="mr-2 h-6 w-6" />
            <span>Unlock Previous Lessons First</span>
          </div>
        ) : (
          <div className="text-sm text-muted-foreground">
            Learn essential Japanese vocabulary and improve your language
            skills.
          </div>
        )}
      </CardContent>
      {!isAdmin && (
        <CardFooter>
          {isLocked ? (
            <Button variant="secondary" className="w-full" disabled>
              <Lock className="mr-2 h-4 w-4" /> Locked
            </Button>
          ) : isCompleted ? (
            <Button variant="outline" className="w-full" asChild>
              <Link to={`/lesson/${lessonNumber}`}>
                <Check className="mr-2 h-4 w-4" /> Review Lesson
              </Link>
            </Button>
          ) : (
            <Button className="w-full" asChild>
              <Link to={`/lesson/${lessonNumber}`}>
                <BookOpen className="mr-2 h-4 w-4" /> Start Lesson
              </Link>
            </Button>
          )}
        </CardFooter>
      )}
    </Card>
  );
};

// Example usage component
const LessonNavigation = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
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
  );
};

export default LessonNavigation;
