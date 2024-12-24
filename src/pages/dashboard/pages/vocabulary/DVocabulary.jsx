import { VocabularyForm } from "@/components/dashboard/vocabulary/VocabularyForm";
import { VocTable } from "@/components/dashboard/vocabulary/VocTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  useAddVocabularyMutation,
  useDeleteVocabularyMutation,
  useGetVocabulariesQuery,
  useUpdateVocabularyMutation,
} from "@/redux/service/vocabularyApi";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

export const DVocabulary = () => {
  const [open, setOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [defaultVocValues, setDefaultVocValues] = useState(null);

  const { toast } = useToast();

  const { data: vocsResponse, isLoading: isVocsLoading } =
    useGetVocabulariesQuery();

  const [onCreateVocabulary, { isLoading: isCreateLoading }] =
    useAddVocabularyMutation();

  const [onUpdateVocabulary, { isLoading: isUpdateLoading }] =
    useUpdateVocabularyMutation();

  const [onDeleteVocabulary, { isLoading: isDeleteLoading }] =
    useDeleteVocabularyMutation();

  useEffect(() => {
    if (!open) {
      setIsEdit(false);
      setIsDelete(false);
      setDefaultVocValues(null);
    }
  }, [open, setIsEdit, setIsDelete]);

  const onEdit = (id) => {
    const vocabulary = vocsResponse?.vocabularies?.find(
      (voc) => voc._id === id
    );
    setDefaultVocValues(vocabulary);
    setIsEdit(true);
    setOpen(true);
  };
  const onDelete = (id) => {
    setDefaultVocValues({ _id: id });
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

    // crete new vocabulary
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
    // update vocabulary
    if (isEdit && data && defaultVocValues && !isDelete) {
      const updatedVocabulary = {};
      try {
        for (const key in defaultVocValues) {
          if (defaultVocValues[key] !== data[key] && data[key]) {
            updatedVocabulary[key] = data[key];
          }
        }
        const res = await onUpdateVocabulary({
          id: defaultVocValues?._id,
          ...updatedVocabulary,
        }).unwrap();
        handleToast(res);
      } catch (error) {
        console.log("Error updating vocabulary:", error);
      }
    }
    // delete vocabulary
    if (isDelete && data && !isEdit) {
      try {
        if (data.confirm === "YES") {
          const res = await onDeleteVocabulary(defaultVocValues?._id).unwrap();
          handleToast(res);
        } else {
          throw new Error("Confirmation failed");
        }
      } catch (error) {
        console.log("Error deleting vocabulary:", error);
        handleToast({
          success: false,
          msg: error.message || "Failed to delete vocabulary",
        });
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
        isLoading={isCreateLoading || isUpdateLoading || isDeleteLoading}
        defaultVocValues={defaultVocValues}
      />
    </div>
  );
};
