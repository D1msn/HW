import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";

import s from './Affairs.module.css'

type AffairPropsType = {
	// key не нужно типизировать
	affair: AffairType // need to fix any
	deleteAffairCallback: (id: number) => void // need to fix any
}


function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id)
	}// need to fix

	const priority = props.affair.priority;

	return (
		<li className={s.item}>
			<p>{props.affair.name}</p><p className={s[`${priority}Color`]} >{props.affair.priority}</p>
			<button className={s.button} onClick={deleteCallback}>×</button>
		</li>

	)
}

export default Affair
