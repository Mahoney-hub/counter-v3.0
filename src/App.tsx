import React from 'react';
import {Box, Button, ButtonGroup, Paper, TextField, ThemeProvider, Typography} from '@mui/material';
import {palette} from './style/palette';

const App = () => {
    return (
        <ThemeProvider theme={palette}>
            <Paper elevation={24} className={'paper'}>
                <h1 className={'title'}>0</h1>
                <div>
                    <div className={'center'}>
                        <TextField variant={'outlined'} type={'number'}/>
                    </div>
                    <ButtonGroup fullWidth variant={'contained'} size={'large'} color={'secondary'}>
                        <Button>incr</Button>
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