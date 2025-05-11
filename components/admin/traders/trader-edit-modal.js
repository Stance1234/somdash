import { createPortal } from "react-dom"

function TraderModal({ children }) {
	const elem = document.getElementById("edit-trader-modal")

	return createPortal(children, elem)
}

export default TraderModal
