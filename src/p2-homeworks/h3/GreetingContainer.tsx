import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting, {AddEventType} from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
	users: Array<UserType> // need to fix any
	addUserCallback: (name: string) => void // need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
	const [name, setName] = useState<string>('') // need to fix any
	const [error, setError] = useState<boolean>(false) // need to fix any

	const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
		const value = e.currentTarget.value;
		if (value && value[0] !== " ") {
			setError(false)
			setName(value) // need to fix
		} else {
			setError(true)
			setName("")
		}
	}
	const addUser = (e: AddEventType) => {
		if ((e as KeyboardEvent<HTMLInputElement>).key === "Enter" || e.type === "click") {
			alert(`Hello ${name.trim()} !`)
			addUserCallback(name.trim());
		}
	}
	// const addUserEnter = (e: KeyboardEvent<HTMLInputElement>) => {
	// 	if(e.key === "Enter") addUser()
	// }

	const totalUsers = users.length // need to fix

	return (
		<Greeting
			name={name}
			setNameCallback={setNameCallback}
			addUser={addUser}
			// addUserEnter={addUserEnter}
			error={error}
			errorText="Поле не может быть пустым"
			totalUsers={totalUsers}
			users={users}
		/>
	)
}

export default GreetingContainer

function MouseEventHandler<T>() {
	throw new Error('Function not implemented.');
}

