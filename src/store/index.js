import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './rootreducer'

const store = configureStore({
    reducer: rootReducer,
    middleware: () => {return [logger]}
});

export default store