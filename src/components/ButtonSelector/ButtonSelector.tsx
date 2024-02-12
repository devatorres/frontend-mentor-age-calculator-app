import './ButtonSelector.css'

type TButtonSelector = {
	id: string
	toggle: () => void
	isOnce: () => boolean
	OnceIcon: JSX.Element
	OtherIcon: JSX.Element
}

export const ButtonSelector = ({
	id,
	toggle,
	isOnce,
	OnceIcon,
	OtherIcon
}: TButtonSelector) => {
	return (
		<button
			id={id}
			name={id}
			role="button"
			className="btn-selector"
			onClick={toggle}>
			{isOnce() ? OnceIcon : OtherIcon}
		</button>
	)
}
