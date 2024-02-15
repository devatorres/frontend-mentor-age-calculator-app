import { useState, createContext, useEffect, ReactElement } from 'react'
import { STORAGE, THEME } from '../constants'
import { getThemeDataStorage, setThemeDataStorage } from '../utils'

type ThemeProviderProps = {
	children: ReactElement
}

export const ThemeContext = createContext(undefined)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState(THEME.LIGHT)

	const isLight = () => theme === THEME.LIGHT

	const toggleTheme = () => {
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		const newTheme = isLight() ? THEME.DARK : (THEME.LIGHT as any)
		setTheme(newTheme)
		setThemeDataStorage(newTheme)
		_putTheme(newTheme)
	}

	const init = async () => {
		const theme = await getThemeDataStorage()
		theme ? _putState(theme) : _putDefaultStorage()
	}

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const _putState = (theme: any) => {
		setTheme(theme)
		setThemeDataStorage(theme)
		_putTheme(theme)
	}

	const _putDefaultStorage = () => {
		setTheme(STORAGE.VALUE_DEFAULT)
		setThemeDataStorage(STORAGE.VALUE_DEFAULT)
		_putTheme(STORAGE.VALUE_DEFAULT)
	}

	const _putTheme = (theme: string) => {
		document.documentElement.setAttribute('data-theme', theme)
	}

	useEffect(() => {
		init()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		<ThemeContext.Provider value={{ theme, isLight, toggleTheme } as any}>
			{children}
		</ThemeContext.Provider>
	)
}
