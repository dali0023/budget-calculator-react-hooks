import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
const ExpenseItem = ({item:{id, charge, rent}, index, deleteHandler, editHandler}) => {
  return (
    <tr>
      <th scope='row'>{index}</th>
      <td>{charge}</td>
      <td>${rent}</td>
      <td>
        {" "}
        <button onClick={()=> editHandler(id)} type='button' className='btn btn-success'>
          <FaRegEdit />
        </button>{" "}
        <button onClick={()=> deleteHandler(id)} type='button' className='btn btn-danger'>
          <FaTrashAlt/>
        </button>
      </td>
    </tr>
  );
};
export default ExpenseItem;
