import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categories: [],
}

export const assetsCategorySlice = createSlice({
  name: 'assetsCategories',
  initialState,
  reducers: {
      // * action payload is asset category object { name, _id }
    addAssetCategory: (state, action) => {
        state.categories.push(action.payload)
    },
    // * action payload is asset category's ID
    removeAssetCategory: (state, action) => {
        const filteredList = state.categories.filter(item => item._id != action.payload)
        state.categories = filteredList
    },
    // * action payload in an array of categories isCopied object
    setAssetCategoryList: (state, action) => {
        state.categories = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { addAssetCategory, removeAssetCategory, setAssetCategoryList } = assetsCategorySlice.actions

export default assetsCategorySlice.reducer