import React from "react";
import User from "./user";

const Users = ({ users, onDelete,onBookMark, length }) => {

  return (
    
    length > 0 && (
        <table className="table">
        <thead>
         <tr>
           <th scope="col">Имя</th>
           <th scope="col">Качество</th>
           <th scope="col">Профессия</th>
           <th scope="col">Встретился раз</th>
           <th scope="col">Оценка</th>
           <th scope="col">Избранное</th>

         </tr>
       </thead>
       <tbody>
        <User users={users} onDelete = {onDelete} onBookMark={onBookMark} />        
       </tbody>
     </table>
    )
    
  )

}
export default Users