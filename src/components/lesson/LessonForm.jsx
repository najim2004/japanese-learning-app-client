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
  onSubmit,
  setOpen,
  isEdit = false,
  isDelete = false,
  lessonName,
  lessonNumber,
  lessonDescription,
  isLoading,
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
          onSubmit={onSubmit}
          isDelete={isDelete}
          isEdit={isEdit}
          lessonName={lessonName}
          lessonNumber={lessonNumber}
          lessonDescription={lessonDescription}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

function ProfileForm({
  onSubmit,
  className,
  isEdit = false,
  isDelete = false,
  lessonName,
  lessonNumber,
  lessonDescription,
  isLoading,
}) {
  const defaultValues = {
    lesson_name: isEdit && !isDelete ? lessonName : "",
    lesson_number: isEdit ? lessonNumber : null,
    lesson_description: isEdit ? lessonDescription : "",
  };
  const form = useForm({ defaultValues });

  // const onSubmit = async (values) => {
  //   try {
  //     // TODO: Implement API call here
  //     console.log(values);
  //   } catch (error) {
  //     console.error("Failed to submit form:", error);
  //   }
  // };

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
          <>
            <FormField
              control={form.control}
              name="lesson_description"
              rules={{
                required: "Lesson description is required",
                minLength: {
                  value: 40,
                  message: "Lesson name must be at least 40 characters",
                },
              }}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Lesson Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter lesson description" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
          </>
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
}
