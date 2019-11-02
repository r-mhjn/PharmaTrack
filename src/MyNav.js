import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import menubutton from '../src/images/menubutton.svg';

export default class MyNav extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			sidebarOpen: false,
		};
	}

	onSetSidebarOpen = open => {
		this.setState({ sidebarOpen: open });
	};

	render() {
		return (
			<div>
				<Sidebar
					sidebar={
						<ul className="ul">
							<li className="menuListItemBrand">PharmaTrack</li>
							<li className="menuListItemHeader">Main Navigation</li>

							<li className="menuListItem">
								<Link to="/" className="list-anchor">
									PharmaTrack
								</Link>
							</li>

							<li className="menuListItem">
								<Link to="/addstock" className="list-anchor">
									Add Stock
								</Link>
							</li>
							<li className="menuListItem">
								<Link to="/billinglogs" className="list-anchor">
									Billing Logs
								</Link>
							</li>
							<li className="menuListItem">
								<Link to="/stocktable" className="list-anchor">
									Stock Table
								</Link>
							</li>
							<li className="menuListItem">
								<Link to="/vendors" className="list-anchor">
									Vendors
								</Link>
							</li>
						</ul>
					}
					open={this.state.sidebarOpen}
					onSetOpen={this.onSetSidebarOpen}
					styles={{ sidebar: { background: '#202d32' } }}
				>
					<button onClick={() => this.onSetSidebarOpen(true)}>
						<div className={'menuIcon'}></div>
						<div className={'menuIcon'}></div>
						<div className={'menuIcon'}></div>
					</button>
				</Sidebar>
				<ul className="ul">
					<li className="list-item">
						<Link to="/" className="menuListItemBrand">
							PharmaTrack
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}
