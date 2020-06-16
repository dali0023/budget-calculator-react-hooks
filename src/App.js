import React, { useState, useEffect } from "react";
import Alert from "./components/Alert";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseLists from "./components/ExpenseLists";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
const App = () => {
  // const data = [];
  // but if I want to save my data to browser local storage
  const data = localStorage.getItem("expenses")
    ? JSON.parse(localStorage.getItem("expenses"))
    : [];
  const [expenses, updateExpence] = useState(data);
  const [charge, updateCharge] = useState("");
  const [rent, updateRent] = useState("");
  const [alertMessege, updateAlert] = useState({
    show: false,
    type: "",
    text: "",
  });
  const [edit, updateEdit] = useState(false);
  const [id, updateId] = useState(0);
  // I will show it by string format
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  const inputCharge = (event) => {
    updateCharge(event.target.value);
  };
  const inputRent = (event) => {
    // we receive string value from field that's why we converted rent strong to int
    updateRent(event.target.value);
  };

  const clearDataHandler = () => {
    updateExpence([]);
    alertHandler({ type: "danger", text: "All Item Deleted" });
  };

  const alertHandler = ({ type, text }) => {
    updateAlert({ show: true, type: type, text: text });
    setTimeout(() => {
      updateAlert({ show: false });
    }, 1000);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // updateAlert(false);
    if (charge !== "" && rent > 0) {
      const newData = { id: uuidv4(), charge: charge, rent: rent };
      updateExpence([...expenses, newData]);
      alertHandler({ type: "success", text: "text added" });
      updateCharge("");
      updateRent("");
    } else {
      alertHandler({ type: "danger", text: "Invalid Input" });
    }
  };

  const editHandler = (id) => {
    updateEdit(true);
    let getData = expenses.find((item) => item.id === id);
    updateCharge(getData.charge);
    updateRent(getData.rent);
    updateId(id);
  };
  const updateHandler = (e) => {
    e.preventDefault();
    if (charge !== "" && rent > 0) {
      let tempExpense = expenses.map((item) => {
        return item.id === id ? { ...item, charge, rent } : item;
      });
      updateExpence(tempExpense);
      alertHandler({ type: "info", text: "Text Updated" });
      updateEdit(false);
      updateRent("");
      updateCharge("");
    } else {
      alertHandler({ type: "danger", text: "PLease, Enter a valid Input!" });
    }
  };
  const deleteHandler = (id) => {
    // let alldata = [...expenses];
    // alldata.splice(id, 1);
    // updateExpence(alldata);

    let myData = expenses.filter((data) => data.id !== id);
    updateExpence(myData);

    alertHandler({ type: "danger", text: "Item Deleted" });
  };
  return (
    <>
      {alertMessege.show && (
        <Alert type={alertMessege.type} text={alertMessege.text} />
      )}
      <h1>Budget Calculator</h1>
      <main className='App'>
        <ExpenseForm
          charge={charge}
          rent={rent}
          inputCharge={inputCharge}
          inputRent={inputRent}
          submitHandler={submitHandler}
          updateHandler={updateHandler}
          edit={edit}
        />
        <ExpenseLists
          expense={expenses}
          clearAllData={clearDataHandler}
          editHandler={editHandler}
          deleteHandler={deleteHandler}
        />
      </main>
      <h1>
        Total Spending:{" "}
        <span className='total'>
          $
          {expenses.reduce((acc, curr) => {
            return acc + parseInt(curr.rent);
          }, 0)}
        </span>
      </h1>
    </>
  );
};
export default App;
