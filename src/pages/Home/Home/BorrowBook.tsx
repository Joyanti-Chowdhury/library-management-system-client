import { useForm, type SubmitHandler, type FieldValues } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ChevronDownIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Swal from "sweetalert2";
import { useBorrowBooksByIdMutation } from "@/api/baseApi";
import { useTheme } from "@/provider/theme-provider";

const BorrowBook = () => {
  const [borrowBookById, { isLoading }] = useBorrowBooksByIdMutation();
  const [open, setOpen] =useState(false);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [dateError, setDateError] = React.useState(false);
  const { theme } = useTheme();
  const { id } = useParams();
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      book: id,
      quantity: 1,
  
      
    },
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    if (!date) {
      setDateError(true);
      return;
    }
    setDateError(false);

    const borrowData = {
      ...values,
      dueDate: date
    };
    try {
      console.log("Borrow Data:", borrowData);

      const res = await borrowBookById(borrowData).unwrap();
      console.log(res);
      if (res.Success) {
        const swalWithBootstrapButtons = Swal.mixin({
          background: theme === "dark" ? "#151515" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
          customClass: {
            confirmButton:
              "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2",
            cancelButton:
              "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
          },
          buttonsStyling: false,
        });
        await swalWithBootstrapButtons.fire({
          title: "Borrowed",
          text: `${res.message}`,
          icon: "success",
        });
        form.reset({
          book: id,
          quantity: 1,
        });
        setDate(undefined);
        navigate("/borrow-summary");
      }
    } catch (error: unknown) {
      const err = error as { data?: { message?: string }; message?: string };
      const swalWithBootstrapButtons = Swal.mixin({
        background: theme === "dark" ? "#151515" : "#ffffff",
        color: theme === "dark" ? "#f9fafb" : "#111827",
        customClass: {
          confirmButton:
            "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2",
          cancelButton:
            "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
        },
        buttonsStyling: false,
      });
      await swalWithBootstrapButtons.fire({
        title: "Failed to Borrow",
        text: err?.data?.message || "Something went wrong",
        icon: "error",
      });
    }
  };

  return (
    <div>
      <div className=" mx-auto mt-10 p-6 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-2xl font-bold text-center text-primary">
          Borrow Book
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
            <FormField
              control={form.control}
              name="book"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Book ID</FormLabel>
                  <FormControl>
                    <Input {...field} disabled />
                  </FormControl>
                </FormItem>
              )}
            />

            {/* Quantity */}
            <FormField
              control={form.control}
              rules={{ required: "Quantity of book is required" }}
              name="quantity"
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Copies Of Book"
                      type="number"
                      min={1}
                      {...field}
                      onChange={(e) =>
                        field.onChange(
                          e.target.value === "" ? "" : Number(e.target.value)
                        )
                      }
                    />
                  </FormControl>
                  {fieldState.error && (
                    <p className="text-sm text-red-500 mt-1">
                      {fieldState.error.message}
                    </p>
                  )}
                </FormItem>
              )}
            />

            {/* Due Date */}
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    id="date"
                    className={cn(
                      "justify-between font-normal w-full",
                      !date && "text-muted-foreground",
                      dateError && "border-red-500"
                    )}
                  >
                    {date ? date.toLocaleDateString() : "Select date"}
                    <ChevronDownIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  className="w-auto overflow-hidden p-0"
                  align="start"
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    captionLayout="dropdown"
                    onSelect={(date) => {
                      setDate(date);
                      setOpen(false);
                      setDateError(false);
                    }}
                    disabled={(date) =>
                      date < new Date(new Date().setHours(0, 0, 0, 0))
                    }
                  />
                </PopoverContent>
              </Popover>
              {dateError && (
                <p className="text-sm text-red-500 mt-1">
                  Please select a due date
                </p>
              )}
            </FormItem>

            <Button type="submit" className="w-full bg-black text-white">
              {isLoading ? <Loader2></Loader2> : "Borrow Book"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default BorrowBook;
