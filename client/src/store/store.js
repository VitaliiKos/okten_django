
import {configureStore} from "@reduxjs/toolkit";

import carReducer from "./api.slise";

const store = configureStore({
    reducer: {
        carReducer,
    }
})

export default store