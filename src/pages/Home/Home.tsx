import useTheme from '../../hooks/useTheme'
import { ButtonSelector, Card } from '../../components'
import { MoonIcon, SunIcon } from '../../assets/icons'
import './Home.css'

export const Home = () => {
	const { isLight, toggleTheme } = useTheme()

	return (
		<div className="home">
			<ButtonSelector
				id="Seleccionar tema"
				isOnce={isLight}
				toggle={toggleTheme}
				OnceIcon={<MoonIcon />}
				OtherIcon={<SunIcon />}
			/>
			<Card />
		</div>
	)
}
