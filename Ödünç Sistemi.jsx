import { useState } from "react";

function BorrowBook() {
  const [borrowed, setBorrowed] = useState(false);

  return (
    <div>
      <h1>Borrow Book</h1>

      <h2>Clean Code</h2>

      {borrowed ? (
        <p>Book Borrowed</p>
      ) : (
        <button onClick={() => setBorrowed(true)}>
          Borrow
        </button>
      )}
    </div>
  );
}

export default BorrowBook;
