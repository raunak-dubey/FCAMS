import { createSlice } from "@reduxjs/toolkit"

interface UIState {
  isCommandOpen: boolean
}

const initialState: UIState = {
  isCommandOpen: false,
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openCommand(state) {
      state.isCommandOpen = true
    },
    closeCommand(state) {
      state.isCommandOpen = false
    },
    toggleCommand(state) {
      state.isCommandOpen = !state.isCommandOpen
    },
  },
})

export const { openCommand, closeCommand, toggleCommand } = uiSlice.actions
export default uiSlice.reducer