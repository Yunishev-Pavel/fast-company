import React from "react";

const BookMark = ({ status, id, onBookMark }) => {
	return (
		<button className={`bi ${status ? "bi-bookmark-star-fill" : "bi-bookmark"}`}  
		onClick={() => onBookMark(id)}
		></button>
	)
}

export default BookMark