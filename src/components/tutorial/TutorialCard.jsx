import { Play, Clock, Star, MoreVertical, Pencil, Trash } from "lucide-react";
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const TutorialCard = ({
  title,
  thumbnailUrl,
  duration,
  difficulty,
  youtubeLink,
  isAdmin = false,
  onEdit,
  onDelete,
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
        {isAdmin && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 absolute top-1 right-1"
              >
                <MoreVertical className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => onEdit("123")}>
                <Pencil className="mr-2 h-4 w-4" />
                Edit
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => onDelete("123", title)}
                className="text-red-600"
              >
                <Trash className="mr-2 h-4 w-4" />
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
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
