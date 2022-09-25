import React from "react";


const SearchStatus = ({ length }) => {
	const renderPhrase = () => {
		if (length < 10 && [2, 3, 4].indexOf(length % 10) !== -1) {
			return (
				<div className="badge bg-primary w-25  p-2 m-2">
          
					<h4>{length} человека тусанет с тобой сегодня</h4>
				</div>
			)
		}
		if (length > 20 && [2, 3, 4].indexOf(length % 10) !== -1) {
			return (
				<div className=" badge bg-primary w-25  p-2 m-2">
					<h4>{length} человека тусанет с тобой сегодня</h4>
				</div>
			)
		}
		return (
			<div className=" badge bg-primary w-25 p-2 m-2">
				<h4>{length} человек тусанет с тобой сегодня</h4>
			</div>
		)
	}
	return length === 0 ? (
		<div className=" badge bg-danger w-25  p-2 m-2">
			<h4>Никто не тусанет с тобой сегодня</h4>
		</div>
	) : (
		renderPhrase()
	)
}
export default SearchStatus

