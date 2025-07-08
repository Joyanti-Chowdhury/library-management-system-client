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
      <BookTable books={data?.data}></BookTable>
    </div>
  );
}
