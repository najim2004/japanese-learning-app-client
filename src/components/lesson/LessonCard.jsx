import { Link } from "react-router-dom";
import {
  BookOpen,
  Check,
  Lock,
  MoreVertical,
  Pencil,
  Trash,
} from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const LessonCard = ({
  lessonNumber,
  lessonName,
  vocabularyCount,
  lessonDescription,
  isCompleted = false,
  isLocked = false,
  isAdmin = false,
  onEdit,
  onDelete,
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
                <DropdownMenuItem onClick={() => onEdit("123")}>
                  <Pencil className="mr-2 h-4 w-4" />
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => onDelete("123", lessonName)}
                  className="text-red-600"
                >
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
            {lessonDescription}
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
