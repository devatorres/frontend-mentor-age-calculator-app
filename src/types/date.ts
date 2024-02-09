export type DateObject = {
	day: number
	month: number
	year: number
}

export const initialValues = (): DateObject => ({
	day: 0,
	month: 0,
	year: 0
})
