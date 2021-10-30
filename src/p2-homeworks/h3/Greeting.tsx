import React, {ChangeEvent, MouseEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";

export type AddEventType = MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLInputElement>

type GreetingPropsType = {
	name: string // need to fix any
	setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
	addUser: (e: AddEventType) => void// need to fix any
	error: boolean // need to fix any
	errorText: string
	totalUsers: number // need to fix any
	users: Array<UserType>
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
	{name, setNameCallback, addUser, error, totalUsers, users, errorText} // деструктуризация пропсов
) => {
	const inputClass = error ? [s.input, s.error] : [s.input] // need to fix with (?:)

	return (
		<div className={s.wrapper}>
			<div>
				<input value={name} onChange={setNameCallback} className={inputClass.join(' ')} onKeyPress={addUser} />
				<button disabled={error} onClick={addUser}  className={s.button}>Add</button>
				<div className={s.errorDiv}>{error && errorText}</div>
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
