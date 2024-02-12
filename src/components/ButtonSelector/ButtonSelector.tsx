import './ButtonSelector.css'

type TButtonSelector = {
	toggle: () => void
	isOnce: () => boolean
	OnceIcon: JSX.Element
	OtherIcon: JSX.Element
}

export const ButtonSelector = ({
	toggle,
	isOnce,
	OnceIcon,
	OtherIcon
}: TButtonSelector) => {
	return (
		<button className="btn-selector" onClick={toggle}>
			{isOnce() ? OnceIcon : OtherIcon}
		</button>
	)
}
