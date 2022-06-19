import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {carService, parkService, usersService} from "../services";
import {authService} from "../services";

const initialState = {
    cars: [],
    parks: [],
    users: [],
    token: null,
    parkIdToAddCar: null,
    parks_payload: null,
    cars_payload: null,
    users_payload: null,
    cars_list_page: null,
    parks_list_page: null,
    carForUpdate: null,
    themeStatus: true,
}

export const getAllCars = createAsyncThunk(
    'apiConstructor/carsGetAll',
    async (new_page, {rejectedWithValue}) => {
        try {
            return await carService.getAll(new_page)
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const getAllParks = createAsyncThunk(
    'apiConstructor/parksGetAll',
    async (new_page, {rejectedWithValue}) => {
        try {
            return await parkService.getAll(new_page)
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const getOtherUsers = createAsyncThunk(
    'apiConstructor/getOtherUsers',
    async (_, {rejectedWithValue}) => {
        try {
            return await usersService.getAll()
        } catch (e) {
            return rejectedWithValue(e.message)

        }
    }
)

export const userCreate = createAsyncThunk(
    'apiConstructor/userCreate',
    async ({data}, {dispatch}) => {
        try {
            const newUser = await usersService.create(data)
            dispatch(addUser({data: newUser}))
        } catch (e) {
            console.log(e)
        }
    }
)

export const addCarToPark = createAsyncThunk(
    'apiConstructor/addCarToPark',
    async ({parkIdToAddCar, data}, {dispatch}) => {
        try {
            return await parkService.addCarByPark({parkIdToAddCar, data})
        } catch (e) {
            console.log(e)
        }
    }
)

export const userAuth = createAsyncThunk(
    'apiConstructor/userAuth',
    async ({data}, {dispatch}) => {
        try {
            return await authService.login(data)
        } catch (e) {
            console.log(e)

        }
    }
)

export const userActivate = createAsyncThunk(
    'apiConstructor/userActivate',

    async (params, {dispatch}) => {
        try {
            return await authService.activate(params)
        } catch (e) {
            console.log(e)
        }
    }
)
export const carDelete = createAsyncThunk(
    'apiConstructor/carDelete',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteByID(id);
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e.message)
        }
    }
)

export const parkDelete = createAsyncThunk(
    'apiConstructor/carDelete',
    async ({id}, {dispatch}) => {
        try {
            await parkService.deleteById(id);
            dispatch(deletePark({id}))
        } catch (e) {
            console.log(e.message)
        }
    }
)
export const updateCarById = createAsyncThunk(
    'apiConstructor/updateCarById',
    async ({id, car}, {dispatch}) => {
        const newCar = await carService.updateById(id, car);
        dispatch(updateCar({car: newCar}))
        return {car: newCar}
    }
)

export const parkCreate = createAsyncThunk(
    'apiConstructor/parkCreate',
    async ({data}, {dispatch}) => {
        try {
            const newPark = await parkService.create(data)
            dispatch(addPark({data: newPark}))
        } catch (e) {
            console.log(e)
        }
    }
)
export const avatarCreate = createAsyncThunk(
    'apiConstructor/avatarCreate',
    async (data, {dispatch}) => {
        console.log(data)
        try {
            const newAva = await usersService.addAvatar(data)
            dispatch(addAva({data: newAva}))
        } catch (e) {
            console.log(e)
        }
    }
)


const carSlice = createSlice({
    name: 'apiConstructor',
    initialState,
    reducers: {
        addUser: (state, action) => {
            console.log(action)
            state.users.push(action.payload.data)
        },
        chooseTheme: (state) => {
            state.themeStatus = !state.themeStatus
        },
        parkId: (state, action) => {
            console.log(action)
            state.parkIdToAddCar = action.payload.id
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },
        deletePark: (state, action) => {
            state.parks = state.parks.filter(park => park.id !== action.payload.id)
        },
        carToUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },
        updateCar: (state, action) => {
            const carIndex = state.cars.findIndex(car => car.id === action.payload.car.id);
            state.cars[carIndex] = action.payload.car
            state.carForUpdate = null
        },
        addPark: (state, action) => {
            state.parks.push(action.payload.data)
        },
        addAva: (state, action) => {
            state.parks.push(action.payload.data)
        },


    },
    extraReducers: {
        // **********************************************
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            console.log(action)
            state.cars_list_page = action.meta.arg
            state.cars_payload = action.payload
            state.cars = action.payload.data

        },
        [getAllCars.rejected]: (state, action) => {
            console.log(action.payload)
            state.status = 'rejected'
            state.error = action.payload

        },
        // **********************************************
        [getAllParks.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllParks.fulfilled]: (state, action) => {
            state.parks_payload = action.payload
            state.parks = action.payload.data
            state.parks_list_page = action.meta.arg

        },
        [getAllParks.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            console.log(action.payload)

        },
        // **********************************************
        [userAuth.pending]: (state) => {
            state.status = 'pending'
            state.error = null

        },
        [userAuth.fulfilled]: (state, action) => {
            state.token = action.payload

        },
        [userAuth.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            console.log(action.payload)
        },
        // **********************************************
        [addCarToPark.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [addCarToPark.fulfilled]: (state, action) => {
            console.log('182', action)
            state.cars.push(action.payload)
            state.parkIdToAddCar = null
        },
        [addCarToPark.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            console.log(action.payload)
        },
        // **********************************************
        [getOtherUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getOtherUsers.fulfilled]: (state, action) => {
            state.users_payload = action.payload
            state.users = action.payload.data

        },
        [getOtherUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            console.log(action.payload)
        },
        // **********************************************

    }
})


const apiReducer = carSlice.reducer
export const {chooseTheme, addUser, addPark, parkId, deleteCar, deletePark, addAva} = carSlice.actions
export const {carToUpdate, updateCar} = carSlice.actions;
export default apiReducer