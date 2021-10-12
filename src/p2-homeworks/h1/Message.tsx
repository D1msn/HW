import React from 'react'
import s from  "./Message.module.css"


type MessagePropsType = {
	avatar: string
	name: string
	message: string,
	time: string,
}

function Message(props: MessagePropsType) {
	return (
		<div className={s.message__wrapper}>
			<div className={s.message__avatar}>
				<img src={props.avatar} className={"message-avatar__img"} alt={"AVATAR"}/>
			</div>
			<div className={s.message__body}>
				<p className={s.message__name}>
					{props.name}
				</p>
				<p className={s.message__text}>
					{props.message}
				</p>
				<div className={s.message__time} >
					<span>
						{props.time}
					</span>
				</div>
			</div>
		</div>
	)
}

export default Message
