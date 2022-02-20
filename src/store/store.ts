import {combineReducers, configureStore} from '@reduxjs/toolkit';
import counterReducer from './reducers/UserSlice';

// Для объединения всех рудьюсеров в один в Redux по умолчанию используют combineReducers
// В Redux Toolkit можно использовать просто объект

const rootReducer = combineReducers({
    counterReducer
})

// Функция в которой мы будем конфигурировать наше Redux хранилище
// Без использования Toolkit мы использовали функцию createStore()
// В Toolkit используем функцию configureStore()
export const setupStore = () => {
    return  configureStore({
        reducer: rootReducer
    })
}

// Определяем 3 базовых типа которые понадобяться в работе

// Тип нашего состояния. Его можно получить либо из reducer или из самого store
// Тип из reducer
export type RootState = ReturnType<typeof rootReducer>
// Тип из store
// export type RootState = ReturnType<typeof setupStore> альтернативная запись

// Получим Тип самого store
export type AppStore = ReturnType<typeof setupStore>

// Получим Тип Dispatch нашего хранилища
export type AppDispatch = AppStore['dispatch']






// Альтернативная запись без использования combineReducers
// export const store = configureStore({
//     reducer: {
//         name: компонент reducer
//     },
// });