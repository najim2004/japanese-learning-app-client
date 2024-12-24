import { VocabularyForm } from "@/components/dashboard/vocabulary/VocabularyForm";
import { VocTable } from "@/components/dashboard/vocabulary/VocTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  useAddVocabularyMutation,
  useGetVocabulariesQuery,
} from "@/redux/service/vocabularyApi";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const DVocabulary = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const { toast } = useToast();

  const { data: vocsResponse, isLoading: isVocsLoading } =
    useGetVocabulariesQuery();

  const [onCreateVocabulary, { isLoading: isCreateLoading }] =
    useAddVocabularyMutation();

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
    // lessonId:"676942578694491a896a2e39" meaning:"Hello (used during the day)" pronunciation:"Kon'nichiwa" whenToSay:"When greeting someone during the day" word: "こんにちは"
    if (!isEdit && !isDelete && data) {
      const { word, pronunciation, whenToSay, meaning, lessonId } = data;
      try {
        const res = await onCreateVocabulary({
          word,
          pronunciation,
          whenToSay,
          meaning,
          lessonId,
        }).unwrap();
        handleToast(res);
      } catch (error) {
        console.log("Error creating vocabulary:", error);
      }
    }
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
        vocabularies={vocsResponse?.vocabularies}
        onDelete={onDelete}
        onUpdate={onEdit}
      />
      <VocabularyForm
        open={open}
        setOpen={setOpen}
        isDelete={isDelete}
        isEdit={isEdit}
        onSubmit={onSubmit}
        isLoading={isCreateLoading}
      />
    </div>
  );
};
