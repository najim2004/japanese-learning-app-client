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

export const VocabularyForm = ({
  open,
  setOpen,
  isEdit = false,
  isDelete = false,
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
        <VocabularyUpdateForm isDelete={isDelete} isEdit={isEdit} />
      </DialogContent>
    </Dialog>
  );
};

function VocabularyUpdateForm({ className, isEdit = false, isDelete = false }) {
  const defaultValues = isDelete
    ? {
        confirm: "",
      }
    : {
        word: "",
        pronunciation: "",
        whenToSay: "",
        lessonNo: "",
      };

  const form = useForm({ defaultValues });

  const onSubmit = async (values) => {
    try {
      // TODO: Implement API call here
      console.log(values);
    } catch (error) {
      console.error("Failed to submit form:", error);
    }
  };

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
              name="lessonNo"
              rules={{
                required: "Lesson number is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid number",
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lesson Number</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter lesson number"
                      {...field}
                    />
                  </FormControl>
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

        <Button type="submit">
          {isDelete ? "Delete" : isEdit ? "Save changes" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
