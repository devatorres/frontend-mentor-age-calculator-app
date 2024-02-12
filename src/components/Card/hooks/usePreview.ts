import { create } from 'zustand'

type DateObject = {
	years: number | undefined
	months: number | undefined
	days: number | undefined
}

type PreviewStore = {
	date: DateObject
	setDate: (newDate: DateObject) => void
}

export const usePreviewStore = create<PreviewStore>((set) => ({
	date: { years: undefined, months: undefined, days: undefined },
	setDate: (newDate) => set(() => ({ date: newDate }))
}))
