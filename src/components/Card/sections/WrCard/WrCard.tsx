import { ReactElement } from 'react'

type TWrCard = {
	children: ReactElement
}

export const WrCard = ({ children }: TWrCard) => {
	return <div className="wr-card">{children}</div>
}
