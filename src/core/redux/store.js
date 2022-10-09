import { configureStore } from '@reduxjs/toolkit'
import submittedForm from '../../modules/UserInformation/reducer'

export default configureStore({
  reducer: {
    submittedForm,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
