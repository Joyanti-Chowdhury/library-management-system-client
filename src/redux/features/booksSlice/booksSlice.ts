import type { IBook } from "@/types";
import { createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface InitialState {
  books : IBook[];
}
const initialState: InitialState = {
    books: [],
}

const booksSlice = createSlice({
    name: "book",
    initialState,
    reducers: {
        addBook: (state, action: PayloadAction<IBook>) => {
              const bookData = action.payload;
         state.books.push(bookData);
        },
        deleteBook: (state, action) => {
            state.books = state.books.filter((book) => book._id !== action.payload);
        },
    },
});

export const { addBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
