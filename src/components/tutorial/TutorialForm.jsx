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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const TutorialForm = ({
  open,
  setOpen,
  isEdit = false,
  isDelete = false,
  title,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[425px]" isEdit={isEdit}>
        <DialogHeader>
          <DialogTitle>
            {isEdit
              ? "Edit tutorial"
              : isDelete
              ? "Delete tutorial"
              : "Create a new tutorial"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Changes you make will be permanently saved."
              : isDelete
              ? "Are you sure you want to delete this tutorial? This action cannot be undone."
              : "Fill out the necessary information for your new tutorial."}
          </DialogDescription>
        </DialogHeader>
        <TutorialsDetailsForm
          isDelete={isDelete}
          isEdit={isEdit}
          title={title}
        />
      </DialogContent>
    </Dialog>
  );
};

function TutorialsDetailsForm({
  className,
  isEdit = false,
  isDelete = false,
  title,
}) {
  const defaultValues = {
    title: "",
    duration: "",
    difficulty: "",
    youtubeLink: "",
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
          name="title"
          rules={{
            required: "Title is required",
            minLength: {
              value: 3,
              message: "Title must be at least 3 characters",
            },
          }}
          render={({ field }) => (
            <FormItem className="grid gap-2">
              <FormLabel>
                {isDelete ? `Enter "${title}" to confirm deletion` : "Title"}
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter tutorial title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {!isDelete && (
          <>
            <FormField
              control={form.control}
              name="duration"
              rules={{
                required: "Duration is required",
                pattern: {
                  value: /^[0-9]+$/,
                  message: "Please enter a valid number",
                },
              }}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter duration in minutes"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="difficulty"
              rules={{ required: "Difficulty is required" }}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>Difficulty Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select difficulty" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Beginner</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="youtubeLink"
              rules={{
                required: "YouTube link is required",
                pattern: {
                  value: /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/,
                  message: "Please enter a valid YouTube URL",
                },
              }}
              render={({ field }) => (
                <FormItem className="grid gap-2">
                  <FormLabel>YouTube Link</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter YouTube video URL" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </>
        )}
        <Button type="submit">
          {isDelete ? "Delete" : isEdit ? "Save changes" : "Create"}
        </Button>
      </form>
    </Form>
  );
}
