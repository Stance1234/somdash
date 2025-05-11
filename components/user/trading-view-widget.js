import { TickerTape } from "react-ts-tradingview-widgets"
// import { useSelector } from "react-redux"

function TradingViewWidget() {
	// const theme = useSelector(state => state.theme.choice)
	return <TickerTape displayMode='adaptive' />
}

export default TradingViewWidget
