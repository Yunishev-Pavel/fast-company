import React, { useState } from "react";
import api from "../api"

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());
    console.log(users);

    const handleDelete = (userId) => {
      setUsers(prevState => prevState.filter(item =>item._id!== userId))
    }

    const renderPhrase = (number) => {
      number = [2,3,4]
      if (users.length < 10 && number.indexOf(users.length % 10) !== -1 ){
        return (
          <div  className="badge bg-primary w-25 p-1 m-2"><h4>{users.length} Человека тусанет с тобой сегодня </h4></div>
          )        
        } else if (users.length > 20 && number.indexOf(users.length % 10) !== -1) {
          return (
          <div className="badge bg-primary w-25 p-1 m-2"><h4>{users.length} Человека тусанет с тобой сегодня </h4></div>
          )
        } else if (users.length === 0) {
          return (
            <div className= "badge bg-danger w-25 p-1 m-2"><h4>Никто не тусанет с тобой </h4></div>
          )
        } else {
          return(
          <div  className="badge bg-primary w-25 p-1 m-2"><h4>{users.length} Человек тусанет с тобой сегодня </h4></div>

        )
      }
    }
    

  return (
    <>
      {renderPhrase()}
        <table className="table">
         <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Качество</th>
            <th scope="col">Профессия</th>
            <th scope="col">Встретился раз</th>
            <th scope="col">Оценка</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => 
           <tr key={user._id}>

              <td key={user.item}>
                {user.name}
              </td>

              <th>
              {user.qualities.map(quali =>(
                <span key={quali._id} className={`badge bg-${quali.color} m-1 p-2`}>
                  {quali.name}
                </span>))}
              </th>

              <td key={user.profession._id}>
                {user.profession.name}
              </td>

              <td>{user.completedMeetings}
              </td>

              <td>{user.rate}/5
              </td>

              <td><button className="btn btn-danger btn-sm" 
              onClick={()=>handleDelete(user._id)}> delete</button></td>
          </tr>)}
        </tbody>
      </table>
    </>
    )
  }

export default Users