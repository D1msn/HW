import React from 'react'
import {AffairPriorityType, AffairType} from "./HW2";

import s from './Affairs.module.css'

type AffairPropsType = {
	// key не нужно типизировать
	affair: AffairType // need to fix any
	deleteAffairCallback: (id: number) => void // need to fix any
}

const ColorPriority = ((priority:AffairPriorityType) => {
	if(priority === "high"){
		return s.itemRed
	} else if( priority === "middle"){
		return s.itemYellow
	} else{
		return s.itemGreen
	}
})

function Affair(props: AffairPropsType) {
	const deleteCallback = () => {
		props.deleteAffairCallback(props.affair._id)
	}// need to fix

	return (
		<li className={s.item}>
			<p>{props.affair.name}</p><p className={ColorPriority(props.affair.priority)} >{props.affair.priority}</p>
			<button className={s.button} onClick={deleteCallback}>×</button>
		</li>

	)
}

export default Affair
