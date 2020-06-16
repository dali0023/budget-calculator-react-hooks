import React from "react";
import Item from "./ExpenseItem";
const ExpenseLists = ({
  expense,
  deleteHandler,
  editHandler,
  clearAllData
}) => {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
          <table className='table table-bordered text-center'>
            <thead className='thead-light'>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Charge</th>
                <th scope='col'>Rent</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {expense.map((items, index) => {
                return (
                  <Item
                    key={index}
                    index={index + 1}
                    item={items}
                    deleteHandler={deleteHandler}
                    editHandler={editHandler}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
        {expense.length > 0 && (
          <div className='col-md-12 text-center'>
            <button
              onClick={clearAllData}
              type='submit'
              className='btn btn-danger'
            >
              Clear Expenses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExpenseLists;
