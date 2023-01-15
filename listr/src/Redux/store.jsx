
import { configureStore } from "@reduxjs/toolkit"
import TodoSlice from './todo'
export default configureStore ({
    reducer:{
        todos:TodoSlice,
    }
})