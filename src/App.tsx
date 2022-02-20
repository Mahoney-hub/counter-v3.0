import React from 'react';
import {Button, ButtonGroup, Paper, TextField, ThemeProvider} from '@mui/material';
import {palette} from './style/palette';
import {useAppDispatch, useAppSelector} from './hooks/redux';
import {counterSlice} from './store/reducers/UserSlice';

const App = () => {
    // const {} = useSelector(state => state.нихуя не подсказывает)
    const {count} = useAppSelector(state => state.counterReducer); // получаем сам счетчик
    const {increment} = counterSlice.actions // вытаскиваем action creat
    const dispatch = useAppDispatch(); // диспатчим(получаем ссылку на хранилице Redux)
    return (
        <ThemeProvider theme={palette}>
            <Paper elevation={24} className={'paper'}>
                <h1 className={'title'}>{count}</h1>
                <div>
                    <div className={'center'}>
                        <TextField variant={'outlined'} type={'number'}/>
                    </div>
                    <ButtonGroup fullWidth variant={'contained'} size={'large'} color={'secondary'}>
                        <Button onClick={() => dispatch(increment(10))}>incr</Button>
                        <Button>decr</Button>
                        <Button>mult</Button>
                        <Button>div</Button>
                    </ButtonGroup>
                </div>
            </Paper>
        </ThemeProvider>
    );
};

export default App;