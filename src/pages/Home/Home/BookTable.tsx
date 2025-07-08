import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Button } from "@/components/ui/button";
import { EyeIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";

import Swal from "sweetalert2";
import type { IBook } from "@/types";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "@/provider/theme-provider";
import { useDeleteBookMutation } from "@/api/baseApi";

interface IProps {
  books: IBook[];
}

const BookTable = ({ books }: IProps) => {
  console.log(books);

  const [deleteBook] = useDeleteBookMutation();
  const { theme } = useTheme();

  const handleDeleteBook = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete this book",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
      background: theme === "dark" ? "#151515" : "#ffffff",
      color: theme === "dark" ? "#f9fafb" : "#111827",
      customClass: {
        confirmButton:
          "bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2",
        cancelButton:
          "bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded",
      },
      buttonsStyling: false,
      preConfirm: async () => {
        Swal.showLoading();
        try {
          const { data } = await deleteBook(id);
          return data;
        } catch (error) {
          Swal.hideLoading();
          Swal.showValidationMessage(`Request failed: ${error}`);
        }
      },
    }).then((result) => {
      if (result.isConfirmed && result.value) {
        Swal.fire({
          title: "Deleted!",
          text: `${result?.value?.message}`,
          icon: "success",
          background: theme === "dark" ? "#151515" : "#ffffff",
          color: theme === "dark" ? "#f9fafb" : "#111827",
        });
      }
    });
  };
  return (
    <div>
      <div className="w-full overflow-x-auto rounded-md border">
        <Table className="min-w-[900px]">
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Title</TableHead>
              <TableHead className="text-center">Author</TableHead>
              <TableHead className="text-center">Genre</TableHead>
              <TableHead className="text-center">ISBN</TableHead>
              <TableHead className="text-center">Status</TableHead>
              <TableHead className="text-center">Copies</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {books?.map((book) => (
              <TableRow key={book._id}>
                <TableCell className="font-medium text-center">
                  {book.title}
                </TableCell>
                <TableCell className="text-center">{book.author}</TableCell>
                <TableCell className="text-center">
                  <Badge variant="secondary">{book.genre}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="secondary">{book.isbn}</Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant={book.available ? "default" : "destructive"}>
                    {book.available ? "Available" : "Not Available"}
                  </Badge>
                </TableCell>
                <TableCell className="text-center">
                  <Badge variant="outline">{book.copies}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2 flex-wrap">
                    <Link to={`/books/${book._id}`}>
                      <Button variant="outline" size="sm">
                        <EyeIcon className="w-4 h-4 mr-1" /> View
                      </Button>
                    </Link>
                    <Link to={`/edit-book/${book._id}`}>
                      <Button variant="secondary" size="sm">
                        <PencilIcon className="w-4 h-4 mr-1" /> Edit
                      </Button>
                    </Link>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDeleteBook(book._id)}
                    >
                      <Trash2Icon className="w-4 h-4 mr-1" />
                    </Button>
                    {book.available ? (
                      <Link to={`/borrow/${book._id}`}>
                        <Button size="sm">Borrow</Button>
                      </Link>
                    ) : (
                      <Button size="sm" disabled>
                        Borrow
                      </Button>
                    )}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default BookTable;
