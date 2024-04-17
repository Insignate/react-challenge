import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { ActionTypes } from '../constants/actionTypes'
import periodifyWord from '../simulateApi/periodifyWord'

//using createAsyncThunk to "simulate" a call to an api (in this case to a promise) to search the periodic table elements in the first and last name
export const producePeriodicElements = createAsyncThunk('name', async ({firstName, lastName}) => {
    try{
        const response = await periodifyWord(firstName, lastName)
        return response
    }
    catch (err){
        console.log(err)
    }
})

//initial state for the app variables
const initialState = {
    firstName: '',
    lastName: '',
    firstNameElement: 'Enter your',
    lastNameElement: 'Word!',
    loading: false,
}

/*reducers to control variables on first name and last name 
when the user presses a button to get the periodic table element
there will be extra reducer cases to show what is currently
happening to the application
*/
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
            .addCase(producePeriodicElements.pending, (state) => {
                state.loading = true
            })
            .addCase(producePeriodicElements.rejected, (state) => {
                state.loading = false
            })
    }
})

export const { setFirstName, setLastName } = nameResolver.actions

export default nameResolver.reducer