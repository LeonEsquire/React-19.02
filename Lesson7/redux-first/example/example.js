import {createStore} from 'redux';

const reducer = (state=0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	}
	return state;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})


/////////



import {applyMiddleware, createStore} from 'redux';

const reducer = (state={}, action) => {
	return state;
}

const middleware = applyMiddleware();
const store = createStore(reducer, middleware);


store.dispatch({type: "FOO"})











////// 
import {createStore} from 'redux';

const reducer = (state=0, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	}
	return state;
}

const store = createStore(reducer, 1);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "INC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})
store.dispatch({type: "DEC"})



///// 
import {applyMiddleware, createStore} from 'redux';

const reducer = (state=1, action) => {
	if (action.type === 'INC') {
		return state + 1;
	} else if (action.type === "DEC") {
		return state - 1;
	} else if (action.type === "E") {
    throw new Error("HHHHHH");
  }
	return state;
}


const error = (store) => (next) => (action) => {
  try {
    next(action);
  } catch (e) {
    console.log('AAAAA!', e);
  }
}

const logger = (store) => (next) => (action) => {
  console.log("сработал action", action);
  next(action);
}

const middleware = applyMiddleware(logger, error);

const store = createStore(reducer, middleware);

store.subscribe(() => {
  console.log('store изменился', store.getState())
})

store.dispatch({type: "INC"})
store.dispatch({type: "E"})
