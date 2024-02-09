import { ArrowIcon } from '../../../../assets/icons'
import './ButtonIcon.css'

type TButtonIcon = {
	action: () => void
	isFloat: boolean
}

export const ButtonIcon = ({ action, isFloat = false }: TButtonIcon) => {
	return (
		<button
			className={`button-icon ${isFloat ? 'float' : ''}`}
			onClick={action}>
			<ArrowIcon className="icon-size" />
		</button>
	)
}
