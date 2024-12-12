import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export const AddLessonBtn = ({ setOpen }) => {
  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        className="w-full max-w-sm flex justify-center items-center hover:border-4 hover:border-dotted hover:bg-green-50"
      >
        <Button
          variant="ghost"
          className="w-full h-auto p-4 bg-transparent hover:bg-transparent"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add Lesson
        </Button>
      </Card>
    </>
  );
};
