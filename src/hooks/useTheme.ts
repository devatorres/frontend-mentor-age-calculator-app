import { useContext } from 'react'
import { ThemeContext } from '../contexts'

const useTheme = () => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const { theme, isDark, toggleTheme } = useContext<any>(ThemeContext)

	return { theme, isDark, toggleTheme }
}

export default useTheme
