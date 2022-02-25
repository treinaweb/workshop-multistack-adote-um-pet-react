import { createTheme } from '@mui/material';

const tema = createTheme({
    palette: {
        primary: {
            main: '#AE0FEA',
        },
        secondary: {
            main: '#C5C5C5',
        },
        text: {
            primary: '#293845',
            secondary: '#9EADBA',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
    shape: {
        borderRadius: '3px',
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    borderRadius: '5px',
                    fontWeight: 'normal',
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    boxShadow: '0px 0px 39px rgba(0, 0, 0, 0.05)',
                },
            },
        },
        MuiTextField: {
            defaultProps: {
                InputLabelProps: {
                    required: false,
                },
                required: true,
            },
        },
        MuiTableHead: {
            styleOverrides: {
                root: {
                    '& .MuiTableCell-root': {
                        fontWeight: 'bold',
                    },
                },
            },
        },
        MuiTableCell: {
            styleOverrides: {
                root: {
                    border: '1px solid #D8D8D8',
                },
            },
        },
    },
})

export default tema;
