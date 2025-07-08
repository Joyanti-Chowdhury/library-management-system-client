import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DialogDescription } from "@radix-ui/react-dialog";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";



import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { Calendar } from "@/components/ui/calendar";
import { useAppDispatch } from "@/redux/hook";
import { addTask } from "@/redux/features/task/taskSlice";
import type { ITask } from "@/types";

export function AddTaskModal() {
  const form = useForm();
  const dispatch = useAppDispatch();

  const onSubmit : SubmitHandler<FieldValues> = (data) => {
    console.log(data);
    // dispatch({
    //   type: "task/addTask",
    //   payload: data,
    // });
    dispatch(addTask(data as ITask));
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Add task</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogDescription className="sr-only">Fill in the form to add task</DialogDescription>
          <DialogHeader>
            <DialogTitle>Add task</DialogTitle>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title </FormLabel> 
                    <FormControl>
                      <Input {...field } value={field.value || ""} ></Input>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                       <FormLabel>Description </FormLabel> 
                    <FormControl>
                      <Textarea {...field } value={field.value || ""} ></Textarea>
                    </FormControl>
                  </FormItem>
                )}
              />



        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl className="w-full">
                  <SelectTrigger>
                    <SelectValue placeholder="Priority" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="High">High</SelectItem>
                  <SelectItem value="Medium">Medium</SelectItem>
                  <SelectItem value="Low">Low</SelectItem>
                </SelectContent>
              </Select>
             
            </FormItem>
          )}
        />
   


  <FormField
          control={form.control}
          name="dueDate"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Due Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[240px] justify-start pl-3 text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    // disabled={(date) =>
                    //   date > new Date() || date < new Date("1900-01-01")
                    // }
                    captionLayout="dropdown"
                  />
                </PopoverContent>
              </Popover>
             
            </FormItem>
          )}
        />
     <DialogFooter>
     <Button type="submit">Submit</Button>
     </DialogFooter>
           
            </form>
          </Form>
        </DialogContent>
      </form>
    </Dialog>
  );
}
