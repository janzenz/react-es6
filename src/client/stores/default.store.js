import { createStore, combineReducers } from 'redux';

// TODO: Separate reducers on different files.

const initialUserState = {
  users: []
}

const userReducer = (state = initialUserState, action) => {
	let newState;
	switch(action.type) {
		case 'FILL_USERS':
			newState = { ...state, users: action.users };
			return newState;
		case 'ADD_USER':
			newState = { ...state, users: action.users };
			return newState;
		case 'USER_LIST_SUCCESS':
			newState = { ...state, users: action.users };
			return newState;
	}

	return state;
}

const widgetState = (state = {}, action) => {
	return state;
}

const reducers = combineReducers({
	userState: userReducer,
	widgetState: widgetState
});

// Create a store by passing in the reducer
const store = createStore(reducers);

export default store;
