import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ActionTypes } from '../constants/actionTypes'
import periodifyWord from '../simulateApi/periodifyWord'

export const producePeriodicElements = createAsyncThunk('name', async ({firstName, lastName}) => {
    try{
        const response = await periodifyWord(firstName, lastName)
        return response
    }
    catch (err){
        console.log(err)
    }
})

const initialState = {
    firstName: '',
    lastName: '',
    firstNameElement: 'Enter your',
    lastNameElement: 'Word!',
    loading: false,
}

export const nameResolver = createSlice({
    name: ActionTypes.SET_NAMES,
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstName = action.payload.firstName
            state.firstNameElement = ''
        },
        setLastName: (state, action) => {
            state.lastName = action.payload.lastName
            state.lastNameElement = ''
        }
    },
    extraReducers: (builder) => {
        builder 
            .addCase(producePeriodicElements.fulfilled, (state, action) => {
                state.firstNameElement = action.payload.firstWordMatch
                state.lastNameElement = action.payload.lastWordMatch
                state.loading = false
            })
            .addCase(producePeriodicElements.pending, (state, action) => {
                state.loading = true
            })
            .addCase(producePeriodicElements.rejected, (state, action) => {
                state.loading = false
            })
    }
})

export const { setFirstName, setLastName } = nameResolver.actions

export default nameResolver.reducer