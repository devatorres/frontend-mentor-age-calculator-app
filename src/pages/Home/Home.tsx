import useTheme from '../../hooks/useTheme'
import { ButtonSelector, Card } from '../../components'
import { MoonIcon, SunIcon } from '../../assets/icons'
import './Home.css'

export const Home = () => {
	const { isDark, toggleTheme } = useTheme()

	return (
		<div className="home">
			<ButtonSelector
				id="themeSelector"
				isOnce={isDark}
				toggle={toggleTheme}
				OnceIcon={<SunIcon />}
				OtherIcon={<MoonIcon />}
			/>
			<Card />
		</div>
	)
}
