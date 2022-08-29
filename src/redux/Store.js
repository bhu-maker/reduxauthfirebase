import {configureStore} from '@reduxjs/toolkit'
import reducer from './reducers/Index'
const Store = configureStore({reducer});
export default Store