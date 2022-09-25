import React, { useState } from "react";
import Users from "./components/usersList";
import SearchStatus from "./components/searchStatus";
import api from "./api";

function App() {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(prevState => prevState.filter(item =>item._id!== userId))
      }
    
    const handleToggleBookMark = id => {
        setUsers (
			users.map(user => {
				if (user._id === id) {
					user.status = !user.status
				}
				return user
			}),
		)
    }

    return (
        <div>
          <SearchStatus length={users.length} />
          <Users users={users} length={users.length} onDelete={handleDelete} onBookMark={handleToggleBookMark} />
        </div>
      )
}


export default App;