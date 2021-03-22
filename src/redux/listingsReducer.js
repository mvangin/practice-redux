import listingsService from '../services/listingsService';

export const initListings = () => {
    return async (dispatch) => {
        const listings = await listingsService.getAll();
        dispatch({
            type: 'INIT_LISTINGS',
            data: listings,
        })
    }
}


export const addListing = (name, age) => {
    return async dispatch => {
        const listing = await listingsService.addListing(name,age);
        console.log(listing)
        dispatch({
            type: "ADD_LISTING",
            payload: listing
        })
    }
}

export const removeListing = (name) => {
    return  {
        type: "REMOVE_LISTING",
        payload: name
    }
}

const listingsReducer = (state=[], action) => {
    switch (action.type) {
        case ('INIT_LISTINGS'):
            return action.data;
        case ('ADD_LISTING'):
            console.log(action)
            return [...state, action.payload]
        case ('REMOVE_LISTING'):
            console.log(action.payload)
            return state.filter(item => item.name !== action.payload)
        default: 
            return state;
    }
}



export default listingsReducer;