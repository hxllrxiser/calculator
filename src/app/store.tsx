import { createSlice, configureStore } from "@reduxjs/toolkit";

interface IState {
    value: number;
}

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    } satisfies IState,
    reducers: {
        incremented: (state: IState) => {
            state.value += 1;
        },
        decremented: (state: IState) => {
            state.value -= 1;
        },
    },
});

export const { incremented, decremented } = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer,
});

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()));

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented());
// {value: 1}
store.dispatch(incremented());
// {value: 2}
store.dispatch(decremented());
// {value: 1}
