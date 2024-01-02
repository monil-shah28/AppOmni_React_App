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
					<NavLink to="/pagination" activeStyle>
						Table Pagination
					</NavLink>
					<NavLink to="/nested" activeStyle>
						Nested TreeMap
					</NavLink>
					<NavLink to="/overrun" activeStyle>
						Project OverRun
					</NavLink>
					<NavLink to="/tp" activeStyle>
						Team Planner
					</NavLink>
					<NavLink to="/tp_scenarios" activeStyle>
						TP Scenarios
					</NavLink>
					<NavLink to="/collapsible" activeStyle>
						Collapsible Tree
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
