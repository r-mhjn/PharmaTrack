import React from "react";
import Axios from "axios";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

export default class Vendors extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      vendor: [],
      quantity: [],
      visible1: false,
      visible2: false
    };
  }

  componentDidMount() {
    this.getVendors();
  }

  onClick1 = () => {
    this.setState({ visible1: true });
  };

  onHide1 = () => {
    this.setState({ visible1: false });
  };

  onClick2 = () => {
    this.setState({ visible2: true });
  };

  onHide2 = () => {
    this.setState({ visible2: false });
  };

  getVendors = async () => {
    await Axios.get("http://csichitkara.club/vendors")
      .then(res => {
        // console.log(res.data);
        this.addVendorToArray(res.data);
        console.log(this.state.vendor);
      })
      .catch(err => console.log("Error fetching vendor " + err));
  };

  addVendorToArray = data => {
    let vendor = this.state.vendor;
    for (let i = data.length - 1; i >= 0; i--) {
      vendor.push(data[i]);
    }
    this.setState({ vendor });
    this.sortBasedOnDeilvery();
  };
  sortBasedOnDeilvery = () => {
    let vendor = this.state.vendor;

    for (let i = 0; i < vendor.length; i++) {
      for (let j = i + 1; j < vendor.length; j++) {
        if (vendor[i].days > vendor[j].days) {
          let temp = vendor[i].days;
          vendor[i].days = vendor[j].days;
          vendor[j].days = temp;
        }
      }
    }
    this.setState({ vendor });
  };

  placeOrder = async index => {
    await Axios.post("http://csichitkara.club/vendors/offer", {
      vname: this.state.vendor[index].vname,
      mname: this.state.vendor[index].medicine,
      qty: this.state.quantity[index],
      stock: this.state.vendor[index].stock,
      expirydate: this.state.vendor[index].expirydate
    })
      .then(res => {
        console.log(res);
        if (res.data === "failed") {
          this.onClick2();
        } else {
          this.onClick1();
        }
      })
      .catch(err => console.log("Error while place order to vendor " + err));
  };

  render() {
    const footer1 = (
      <div>
        <Button label="Ok" onClick={this.onHide1} />
      </div>
    );
    const footer2 = (
      <div>
        <Button label="Ok" onClick={this.onHide2} />
      </div>
    );

    return (
      <div>
        <div className="content-section implementation">
          <Dialog
            header="Success"
            visible={this.state.visible1}
            style={{ width: "25vw" }}
            footer={footer1}
            onHide={this.onHide1}
          >
            Order Successfull.
          </Dialog>
        </div>

        <div className="content-section implementation">
          <Dialog
            header="Transaction failed"
            visible={this.state.visible2}
            style={{ width: "25vw" }}
            footer={footer2}
            onHide={this.onHide2}
          >
            Insufficient stock.
          </Dialog>
        </div>

        <div className="p-lg-10 p-md-8 p-sm-6 vendor-box">
          <div className="header-row">
            <span className="header-text">Vendor</span>
          </div>
          <div className="vendorBoxDiv">
            <div className="vendorTableDiv">
              <table className="vendorTable">
                <tbody>
                  <tr className="vendorTableRow">
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">SNO</span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">
                        Vendor Name
                      </span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">Product</span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">Stock</span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">
                        Expiry Date
                      </span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">Discount</span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">Cost</span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">
                        Apx. Del Days{" "}
                      </span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">
                        Select Quantity
                      </span>
                    </th>
                    <th className="vendorTableHeading">
                      <span className="vendorTableHeadingText">Action</span>
                    </th>
                  </tr>
                  {this.state.vendor.map((item, index) => {
                    let maxQty = item.stock;
                    return (
                      <tr key={index} className="vendorTableRow">
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {index + 1}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.vname}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.medicine}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.stock}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.expirydate}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.discount}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.cost}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <span className="vendorTableColText">
                            {item.days}
                          </span>
                        </td>
                        <td className="vendorTableCol">
                          <input
                            type="number"
                            min={1}
                            className="custTextInput"
                            placeholder="Quantity required"
                            value={this.state.quantity[index]}
                            onChange={e => {
                              let quantity = this.state.quantity;
                              quantity[index] = e.target.value;
                              this.setState({ quantity });
                            }}
                          />
                        </td>
                        <td className="vendorTableCol">
                          <Button
                            label="Buy"
                            onClick={() => {
                              this.placeOrder(index);
                            }}
                            className="p-button-raised  p-button-success addMedTableButton"
                          />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
