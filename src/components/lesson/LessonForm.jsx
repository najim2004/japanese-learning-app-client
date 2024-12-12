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

export const LessonForm = ({
  open,
  setOpen,
  isEdit = false,
  isDelete = false,
  lessonName,
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
        <ProfileForm
          isDelete={isDelete}
          isEdit={isEdit}
          lessonName={lessonName}
        />
      </DialogContent>
    </Dialog>
  );
};

function ProfileForm({
  className,
  isEdit = false,
  isDelete = false,
  lessonName,
}) {
  const defaultValues = {
    lesson_name: "",
    lesson_number: "",
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
        <FormField
          control={form.control}
          name="lesson_name"
          rules={{
            required: "Lesson name is required",
            minLength: {
              value: 3,
              message: "Lesson name must be at least 3 characters",
            },
          }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>
                {isDelete
                  ? `Enter "${lessonName}" to confirm deletion`
                  : "Lesson Name"}
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter lesson name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isDelete && (
          <FormField
            control={form.control}
            name="lesson_number"
            rules={{
              required: "Lesson number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Please enter a valid number",
              },
            }}
            render={({ field }) => (
              <FormItem className="grid gap-2">
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
        )}
        <Button type="submit">
          {isDelete ? "Delete" : isEdit ? "Save changes" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
