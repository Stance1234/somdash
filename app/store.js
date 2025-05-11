import { configureStore } from "@reduxjs/toolkit"
// import themeReducer from "../features/theme/themeSlice"
import sideNavReducer from "../features/sideNav/sideNavSlice"
import copyTraderSlice from "../features/copy-trade/copyTradeSlice"
import assetsCategorySlice from "../features/assets-category/assetsCategorySlice"

export const store = configureStore({
	reducer: {
		// theme: themeReducer,
		sideNav: sideNavReducer,
		copyTrade: copyTraderSlice,
		assetsCategory: assetsCategorySlice,
	},
})
