import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  traders: [],
}

export const copyTraderSlice = createSlice({
  name: 'copyTrader',
  initialState,
  reducers: {
      // * action payload is trader isCopied object
    addTrader: (state, action) => {
        state.traders.push(action.payload)
    },
    // * action payload is trader's ID
    removeTrader: (state, action) => {
        const filteredList = state.traders.filter(item => item._traderId != action.payload)
        state.traders = filteredList
    },
    // * action payload in an array of traders isCopied object
    setCopiedTradersList: (state, action) => {
        state.traders = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTrader, removeTrader, setCopiedTradersList } = copyTraderSlice.actions

export default copyTraderSlice.reducer