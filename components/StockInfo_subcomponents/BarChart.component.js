import React from 'react'
import CanvasJSReact from '../../canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default function BarChart(props) {
	const options = {
		animationDuration: 1200,
		animationEnabled: true,
		width: 600,
		title: {
			text: "Current Stock"
		},
		data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
				dataPoints: [
					{ label: "Apple", y: 100, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } },
					{ label: "Orange", y: 15, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } },
					{ label: "Banana", y: 25, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } },
					{ label: "Mango", y: 30, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } },
					{ label: "Mango", y: 30, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } },
					{ label: "Mango", y: 30, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } },
					{ label: "Grape", y: 28, click: (e) => { props.changeCurrentCategory(e.dataPoint.label) } }
				]
			}
		]
	}
	return (
		<div>
			<CanvasJSChart options={options}
			/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
	)
}
