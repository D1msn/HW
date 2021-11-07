import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Routes";

import c from "./Header.module.css"

function Header() {
	return (
		<ul className={c.menu}>
			<li className={c.menuItem}>
				<NavLink className={c.menuLink} to={PATH.PRE_JUNIOR}>PRE_JUNIOR</NavLink>
			</li>
			<li className={c.menuItem}>
				<NavLink className={c.menuLink} to={PATH.JUNIOR}>JUNIOR</NavLink>
			</li>
			<li className={c.menuItem}>
				<NavLink className={c.menuLink} to={PATH.JUNIOR_PLUS}>JUNIOR_PLUS</NavLink>
			</li>
		</ul>
	)
}

export default Header
