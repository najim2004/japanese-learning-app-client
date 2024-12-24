import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const VocabularyForm = ({
  open,
  setOpen,
  isEdit = false,
  isDelete = false,
  onSubmit,
  isLoading,
  defaultVocValues,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]" isEdit={isEdit}>
        <DialogHeader>
          <DialogTitle>
            {isEdit
              ? "Edit lesson"
              : isDelete
              ? "Delete lesson"
              : "Create a new lesson"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Changes you make will be permanently saved."
              : isDelete
              ? "Are you sure you want to delete this lesson? This action cannot be undone."
              : "Fill out the necessary information for your new lesson."}
          </DialogDescription>
        </DialogHeader>
        <VocabularyUpdateForm
          isDelete={isDelete}
          isEdit={isEdit}
          onSubmit={onSubmit}
          isLoading={isLoading}
          defaultVocValues={defaultVocValues}
        />
      </DialogContent>
    </Dialog>
  );
};

const VocabularyUpdateForm = ({
  className,
  isEdit = false,
  isDelete = false,
  onSubmit,
  isLoading,
  defaultVocValues,
}) => {
  const lessonsName = useSelector((state) => state?.lesson?.lessonsName);
  const defaultValues = isDelete
    ? {
        confirm: "",
      }
    : {
        word: defaultVocValues?.word || "",
        pronunciation: defaultVocValues?.pronunciation || "",
        whenToSay: defaultVocValues?.whenToSay || "",
        meaning: defaultVocValues?.meaning || "",
        lessonId: defaultVocValues?.lessonId || "",
      };

  const form = useForm({ defaultValues });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn("grid items-start gap-4", className)}
      >
        {!isDelete ? (
          <>
            <FormField
              control={form.control}
              name="word"
              rules={{ required: "Japanese word is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Japanese Word</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter Japanese word (e.g., こんにちは)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="pronunciation"
              rules={{ required: "Pronunciation is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pronunciation</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter pronunciation (e.g., Konnichiwa)"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="meaning"
              rules={{ required: "Word meaning is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Word Meaning</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter word meaning" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="whenToSay"
              rules={{ required: "Usage description is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>When to Say</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter usage description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="lessonId"
              rules={{ required: "Lesson number is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lesson</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select lesson" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {lessonsName?.map((lesson) => (
                        <SelectItem key={lesson._id} value={lesson._id}>
                          {lesson.lessonNumber}: {lesson.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        ) : (
          <FormField
            control={form.control}
            name="confirm"
            rules={{ required: "Usage description is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Type &#34;YES&#34; for confirm the delete</FormLabel>
                <FormControl>
                  <Input placeholder="Type YES" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <Button disabled={isLoading} type="submit">
          {isLoading
            ? "Loading..."
            : isDelete
            ? "Delete"
            : isEdit
            ? "Save changes"
            : "Create"}
        </Button>
      </form>
    </Form>
  );
};
