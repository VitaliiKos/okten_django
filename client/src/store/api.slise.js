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
    // movieDetails: null,
    // myFamousActor: null,
    // themeStatus: true,
    // hover: 0,
    // rating: 0
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
            alert('40', e.message)
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
            alert('52', e.message)
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
            alert('67', e.message)

        }
    }
)

export const addCarToPark = createAsyncThunk(
    'apiConstructor/addCarToPark',
    async ({parkIdToAddCar, data}, {dispatch}) => {
        try {
            return  await parkService.addCarByPark({parkIdToAddCar, data})
        } catch (e) {
            alert('79', e.message)
        }
    }
)

export const userAuth = createAsyncThunk(
    'apiConstructor/userAuth',
    async ({data}, {dispatch}) => {
        try {
            return await authService.login(data)
        } catch (e) {
            alert('90', e.message)

        }
    }
)

export const userActivate = createAsyncThunk(
    'apiConstructor/userActivate',

    async (params, {dispatch}) => {
        try {
            return await authService.activate(params)
        } catch (e) {
            alert('103', e.message)
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


const carSlice = createSlice({
    name: 'apiConstructor',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload.data)
        },
        chooseTheme: (state) => {
            state.themeStatus = !state.themeStatus
        },
        parkId: (state, action) => {
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

    },
    extraReducers: {
        // **********************************************
        [getAllCars.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.cars_list_page = action.meta.arg
            state.cars_payload = action.payload
            state.cars = action.payload.data

        },
        [getAllCars.rejected]: (state, action) => {
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
            alert('155', action.payload)

        },
        // **********************************************
        [userAuth.pending]: (state) => {
            state.status = 'pending'
            state.error = null

        },
        [userAuth.fulfilled]: (state, action) => {
            // console.log('166', action)
            state.token = action.payload

        },
        [userAuth.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            alert('173', action.payload)
            console.log(action)
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
            alert('189', action.payload)
            console.log(action)
        },
        // **********************************************
        [getOtherUsers.pending]: (state) => {
            state.status = 'pending'
            state.error = null
        },
        [getOtherUsers.fulfilled]: (state, action) => {
            state.users_payload = action.payload
            console.log(action)
            state.users = action.payload.data

        },
        [getOtherUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
            alert('206', action.payload)
            console.log(action)
        },
        // **********************************************

    }
})


const apiReducer = carSlice.reducer
export const {chooseTheme, addUser, parkId, deleteCar, deletePark} = carSlice.actions
export const {carToUpdate, updateCar} = carSlice.actions;
export default apiReducer