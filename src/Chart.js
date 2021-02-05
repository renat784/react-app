import React, { Component } from "react";
import { LineChart, XAxis, Tooltip, CartesianGrid, Line } from "recharts";

class Chart extends Component {
  componentDidMount() {
    console.log("cdm chart , data count=" + this.props.dataForChart.length);
  }

  render() {
    return (
      <div id="chart" className="col-10 offset-1 my-5">
        <span>Exchange course to 1 USD</span>

        <LineChart
          width={1000}
          height={400}
          data={this.props.dataForChart}
          margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <Tooltip />
          <CartesianGrid stroke="#f5f5f5" />
          <Line type="monotone" dataKey="eur" stroke="#ff7300" yAxisId={0} />
          <Line type="monotone" dataKey="gbp" stroke="#387908" yAxisId={1} />
          <Line type="monotone" dataKey="cad" stroke="#512908" yAxisId={2} />
        </LineChart>
      </div>
    );
  }
}

export default Chart;
