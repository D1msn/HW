import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

export type AddEventType = MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>

type GreetingPropsType = {
	name: string // need to fix any
	setNameCallback: (value: string) => void // need to fix any
	addUser: () => void// need to fix any
	error: boolean // need to fix any
	errorText: string
	totalUsers: number // need to fix any
	users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{name, setNameCallback, addUser, error, totalUsers, users, errorText} // деструктуризация пропсов
) => {


	return (
		<div className={s.wrapper}>
			<div style={{display: "flex", alignItems: "center", position: "relative"}}>
					<SuperInputText value={name}
									onChangeText={setNameCallback} onEnter={addUser}
									error={error}
									errorText={errorText}
									className={s.input}
					/>
				<SuperButton disabled={error} onClick={addUser} className={s.buttonBorder}>Add</SuperButton>
			</div>

			<div className={s.usersList}>
				<h2 className={s.usersTitle}>Список пользователей: {totalUsers}</h2>
				{users.map((u: UserType, index: number) => (
					<div className={s.usersItem} key={u._id}>
						<span>{`№ ${index + 1}`}</span>
						<span>{u.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default Greeting
