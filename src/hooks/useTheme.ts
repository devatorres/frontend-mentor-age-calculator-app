import { useContext } from 'react'
import { ThemeContext } from '../contexts'

const useTheme = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { theme, isLight, toggleTheme } = useContext<any>(ThemeContext)

	return { theme, isLight, toggleTheme }
}

export default useTheme
