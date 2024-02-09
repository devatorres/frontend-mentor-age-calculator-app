import { ReactElement } from 'react'
import './ButtonIcon.css'

type TButtonIcon = {
	id: string
	action: () => void
	children: ReactElement
	isFloat?: boolean
}

export const ButtonIcon = ({
	id,
	action,
	children,
	isFloat = false
}: TButtonIcon) => {
	return (
		<button
			id={id}
			name={id}
			title="Calcular fecha"
			role="button"
			className={`button-icon ${isFloat ? 'float' : ''}`}
			onClick={action}>
			{children}
		</button>
	)
}
