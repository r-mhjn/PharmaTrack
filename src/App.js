import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BillBox from "./BillBox";
import AddStockBox from "./AddStockBox";
import BillingLogs from "./BillingLogs";
import StockTables from "./StockTables";
import Prediction from "./Predection";
import Vendors from './Vendors';
import MyNav from "./MyNav";



function App() {
  return (
    <div className="App">
      <Router>
        <MyNav />
        <Route path="/" exact component={BillBox} />
        <Route path="/addstock" component={AddStockBox} />
        <Route path="/billinglogs" component={BillingLogs} />
        <Route path="/stocktable" component={StockTables} />
        <Route path="/predictions" component={Prediction} />
        <Route path="/vendors" component={Vendors} />
      </Router>
    </div>
  );
}

export default App;
