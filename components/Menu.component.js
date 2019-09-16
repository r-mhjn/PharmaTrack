import React, { } from 'react';
import { TabMenu } from 'primereact/tabmenu'
import { withRouter, Link } from 'react-router-dom'

let Menu = function Menu(props) {
	// let navigateToPage = (path) => {
	// 	console.log('Navigate to path ' + path);
	// 	// props.history.push(path);
	// 	window.location = path
	// 	// changeActiveItem(0);
	// }
	let items = [
		{ label: 'PharmaTrack', className: 'appLogo' },
		{ label: 'Add Stock', icon: 'pi pi-plus' },
		{ label: 'Stock Info', icon: 'pi pi-align-justify' },
		{ label: 'Stock Info', icon: 'pi pi-align-justify' },
	];
	return (
		<TabMenu model={items} />
	)
}

Menu = withRouter(Menu);

export default Menu;