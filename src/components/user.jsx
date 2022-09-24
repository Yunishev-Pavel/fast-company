import React from "react";
import BookMark from "./bookmark";
import Qualities from "./quality";




const User = ({ users, onDelete, onBookMark }) => {
	return users.map((user) => (
		<tr key={user._id}>
			<td>{user.name}</td>
			<th>
			{user.qualities.map(quali => (
				<Qualities {...quali} key={quali._id} />
			))}
			</th>
			<td>{user.profession.name}</td>
			<td>{user.completedMeetings}</td>
			<td>{user.rate}/5</td>
			<td>
				<BookMark status={user.status} id={user._id} onBookMark={onBookMark} />
			</td>
			<td>
				<button
					className="btn btn-danger"
					onClick={() => onDelete(user._id)}
				>
                    Delete
				</button>
			</td>
		</tr>
	))
}
export default User

