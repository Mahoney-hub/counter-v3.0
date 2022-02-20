// В Redux reducer - это чистая функция, которая принимает state и action
// И в зависимости от action как то изменяет state и возвращает state в обновленном виде

// В Redux Toolkit есть слайсы - это обертка над reducer,
// Которая упрощает функционал и упрощает работу

import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface UserState {
    count: number
    inputValue: number
}

const initialState: UserState = {
    count: 0,
    inputValue: 0
}

// Создаем сам slice
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // Поле аналогичное конструкции switch case в обычном reducer
    reducers: {
        increment(state, action:PayloadAction<number>) {
            state.count += action.payload;
        }
    }
})

export default counterSlice.reducer;