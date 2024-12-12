import { VocabularyForm } from "@/components/dashboard/vocabulary/VocabularyForm";
import { VocTable } from "@/components/dashboard/vocabulary/VocTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

export const DVocabulary = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  useEffect(() => {
    if (!open) {
      setIsEdit(false);
      setIsDelete(false);
    }
  }, [open, setIsEdit, setIsDelete]);

  const onEdit = (id) => {
    setIsEdit(true);
    setOpen(true);
  };
  const onDelete = (id, lessonName) => {
    setIsDelete(true);
    setOpen(true);
  };
  return (
    <div>
      <div className="flex items-center gap-4 mb-4 justify-center mt-8">
        <div className="flex w-full max-w-sm items-center gap-2">
          <Input
            type="search"
            placeholder="Search vocabularies..."
            className="w-full"
          />
          <Button variant="secondary" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Add Vocabulary
        </Button>
      </div>
      <VocTable
        vocabularies={dummyData}
        onDelete={onDelete}
        onUpdate={onEdit}
      />
      <VocabularyForm
        open={open}
        setOpen={setOpen}
        isDelete={isDelete}
        isEdit={isEdit}
      />
    </div>
  );
};
const dummyData = [
  {
    id: 1,
    word: "こんにちは",
    meaning: "Hello/Good afternoon",
    pronunciation: "Konnichiwa",
    whenToSay: "Afternoon greeting",
    lessonNo: 1,
  },
  {
    id: 2,
    word: "おはよう",
    meaning: "Good morning",
    pronunciation: "Ohayou",
    whenToSay: "Morning greeting",
    lessonNo: 1,
  },
  {
    id: 3,
    word: "さようなら",
    meaning: "Goodbye",
    pronunciation: "Sayounara",
    whenToSay: "When parting ways",
    lessonNo: 2,
  },
];
