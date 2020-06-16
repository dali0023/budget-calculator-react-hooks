import React from "react";

const ExpenseForm = ({
  charge,
  rent,
  inputCharge,
  inputRent,
  submitHandler,
  edit,
  updateHandler
}) => {
  return (
    <>
      <div className='container'>
        <form onSubmit={edit ? updateHandler : submitHandler}>
          <div className='row'>
            <div className='col'>
              <div className='form-group'>
                <label>Charge</label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  placeholder='e.g.rent'
                  onChange={inputCharge}
                  value={charge}
                ></input>
              </div>
            </div>
            <div className='col'>
              <div className='form-group'>
                <label>Rent</label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleInputEmail1'
                  placeholder='e.g.100'
                  onChange={inputRent}
                  value={rent}
                ></input>
              </div>
            </div>{" "}
            <div className='col-md-12 text-center'>
              {edit ? (
                <button
                  type='submit'
                  className='btn btn-primary'
                  style={{ marginBottom: "10px" }}
                >
                  Edit
                </button>
              ) : (
                <button
                  type='submit'
                  className='btn btn-success'
                  style={{ marginBottom: "10px" }}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
