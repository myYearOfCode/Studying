// apply async middleware with ReactThunk
// https://learn.freecodecamp.org/front-end-libraries/redux/use-middleware-to-handle-asynchronous-actions

const REQUESTING_DATA = 'REQUESTING_DATA'
const RECEIVED_DATA = 'RECEIVED_DATA'

// these two action creators are passed to dispatch
// the type being different is no issue, the reducer below interprets those to 
// update the value of 'fetching' and users accordingly
const requestingData = () => { return {type: REQUESTING_DATA} }
const receivedData = (data) => { return {type: RECEIVED_DATA, users: data.users} }

// async action creator that uses other action creators
const handleAsync = () => {
  return function(dispatch) { 
  // this function getting dispatch as an argument
  // is critical in its ability to handle this asynchronously

    store.dispatch(requestingData())     // dispatch request action here
    setTimeout(function() { // set timeout is used to fake a network request.
      let data = {
        users: ['Jeff', 'William', 'Alice']
      }

    store.dispatch(receivedData(data))      // dispatch received data action here
    }, 2500);
  }
};

// action for initializing the default reducer
const defaultState = {
  fetching: false,
  users: []
};

// reducer
const asyncDataReducer = (state = defaultState, action) => {
  switch(action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      }
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      }
    default:
      return state;
  }
};

// create store, apply reducer and apply middleware.
const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);