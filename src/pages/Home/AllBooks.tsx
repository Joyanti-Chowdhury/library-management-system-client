import { useGetAllBooksQuery } from "../../api/baseApi";
import BookTable from "./Home/BookTable";

export default function AllBooks() {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);

  console.log(data, isLoading, isError);
  if (isLoading) {
    return <p>Loading.....</p>;
  }
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6 mt-6 text-center mx-auto text-amber-500">All Books</h1>
      <BookTable books={data?.data}></BookTable>
    </div>
  );
}
