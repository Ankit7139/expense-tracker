import React from "react";
import { Header } from "./components/Header";
import { Balance } from "./components/Balance";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";
import { AddTransaction } from "./components/AddTransaction";
import { DeleteAll } from "./components/DeleteAll";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import { Delbtn } from "./components/Delbtn";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <Delbtn />
        <TransactionList />
        <AddTransaction />
        <DeleteAll />
      </div>
    </GlobalProvider>
  );
}

export default App;
