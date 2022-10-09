import { createSlice } from '@reduxjs/toolkit'

export const submittedForm = createSlice({
  name: 'userForm',
  initialState: {
    value: {},
  },
  reducers: {
    submitForm: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { submitForm } = submittedForm.actions

export default submittedForm.reducer
