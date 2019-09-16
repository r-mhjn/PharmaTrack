import React from "react";
import Axios from "axios";

// const alerts = [
//   {
//     type: "severe",
//     text: "medicine out of stock"
//   },
//   {
//     type: "medium",
//     text: "Medicine low on stock please order new stock"
//   },
//   {
//     type: "medium",
//     text: "stock up antibiotics"
//   },
//   {
//     type: "severe",
//     text: "medicine out of stock"
//   },
//   {
//     type: "medium",
//     text: "Medicine low on stock please order new stock"
//   },
//   {
//     type: "medium",
//     text: "stock up antibiotics"
//   },
//   {
//     type: "severe",
//     text: "medicine out of stock"
//   },
//   {
//     type: "medium",
//     text: "Medicine low on stock please order new stock"
//   },
//   {
//     type: "medium",
//     text: "stock up antibiotics"
//   }
// ];

export default class AlertBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      alerts: []
    };
  }

  componentDidMount = () => {
    this.getAlerts();
    this.getExpireAlerts();
    // this.setState({alerts:alerts});
  };

  getExpireAlerts = async () => {
    await Axios.get("http://csichitkara.club/alerts/expired")
      .then(res => {
        console.log(res.data);
        this.addToExpireAlertArray(res.data);
        console.log(this.state.alerts);
      })
      .catch(err => console.log("Error while fetching alert" + err));
  };

  addToExpireAlertArray = data => {
    let alerts = this.state.alerts;
    for (let i = 0; i < data.length; i++) {
      let newAlert = {
        mname: data[i],
        text: "expired",
        type: "severe"
      };
      alerts.push(newAlert);
    }
    this.setState({ alerts });
  };

  getAlerts = async () => {
    await Axios.get("http://csichitkara.club/alerts/stock")
      .then(res => {
        // console.log(res.data);
        this.addToAlertArray(res.data);
        // console.log(this.state.alerts);
      })
      .catch(err => console.log("Error while fetching alert" + err));
  };

  addToAlertArray = data => {
    let alerts = this.state.alerts;
    for (let i = 0; i < data.length; i++) {
      // console.log("hey");
      // console.log(data);
      let newAlert = {
        mname: data[i].mname,
        // minstock: data[i].minstock,
        text: "low on stock",
        type: "medium"
      };
      alerts.push(newAlert);
    }
    this.setState({ alerts });
  };

  functionCallDeleteAlert = index => {
    this.deleteAlert(index);
    console.log("hey");
  };

  deleteAlert = index => {
    let alerts = this.state.alerts;
    alerts.splice(index, 1);
    this.setState({ alerts });
    console.log(this.state.alerts.length);
    console.log(this.state.alerts);
  };

  render() {
    return (
      <div>
        <div dir="rtl" className="p-col-2 alert-box">
          <div
            hidden={this.state.alerts.length === 0 ? false : true}
            className="alert"
            style={{ backgroundColor: "#4BB543" }}
          >
            <span className="closebtn">&times;</span>
            <strong>{"No Alerts"}</strong>
          </div>

          {this.state.alerts.map((item, index) => {
            if (this.state.alerts.length >= 1) {
              return (
                <div
                  key={index}
                  className="alert"
                  style={{
                    backgroundColor:
                      item.type === "medium" ? "#ffae42" : "#f44336"
                  }}
                >
                  <span
                    className="closebtn"
                    onClick={e => this.functionCallDeleteAlert(index)}
                  >
                    &times;
                  </span>
                  <strong>{item.mname + " " + item.text}</strong>
                </div>
              );
            }
          })}
        </div>
      </div>
    );
  }
}
