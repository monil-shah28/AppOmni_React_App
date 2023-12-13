// Filename - "./components/Navbar.js

import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/looker" activeStyle>
						Product Details
					</NavLink>
					<NavLink to="/treemap" activeStyle>
						TreeMap and Pie Chart
					</NavLink>
					<NavLink to="/donut" activeStyle>
						Donut Multiple
					</NavLink>
					<NavLink to="/pagination" activeStyle>
						Table Pagination
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
