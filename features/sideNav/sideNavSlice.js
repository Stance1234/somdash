import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isOpen: false,
}

export const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    openSideNav: state => {
        state.isOpen = true
    },
    closeSideNav: state => {
        state.isOpen = false
    }
  },
})

// Action creators are generated for each case reducer function
export const { openSideNav, closeSideNav } = sideNavSlice.actions

export default sideNavSlice.reducer