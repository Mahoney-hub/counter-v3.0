import {createTheme} from '@mui/material/styles';
import {blueGrey, red} from '@mui/material/colors';

export const palette = createTheme({
    palette: {
        primary: {
            main: blueGrey[900],
        },
        secondary: {
            main: red[900],
        },
    },
});