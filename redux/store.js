import { configureStore, createSlice } from "@reduxjs/toolkit"

export const menuSlice = createSlice({
  name: "menu",
  initialState: {
    toggle: false,
  },
  reducers: {
    toggleMenu: (state) => {
      state.toggle = !state.toggle
    },
  },
})

export const actions = menuSlice.actions
export default configureStore({
  reducer: menuSlice.reducer,
})
