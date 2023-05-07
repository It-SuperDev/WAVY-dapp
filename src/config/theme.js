const overrides = {
    //     MuiAvatar: {
    //         styleOverrides: {
    //             root: {
    //                 borderRadius: 6
    //             }
    //         }
    //     },
    //     MuiIconButton: {
    //         styleOverrides: {
    //             root: {
    //                 borderRadius: 6,
    //                 '&:hover': {
    //                     boxShadow: 'unset',
    //                     backgroundColor: 'transparent'
    //                 }
    //             }
    //         }
    //     },
    //     MuiMenuItem: {
    //         styleOverrides: {
    //             root: {
    //                 '&.Mui-selected': {
    //                     backgroundColor: '#4584ff'
    //                 },
    //                 '&:hover': {
    //                     backgroundColor: '#54aeff52'
    //                 }
    //             }
    //         }
    //     },
    //     MuiListItemButton: {
    //         styleOverrides: {
    //             root: {
    //                 borderRadius: 0,
    //                 '&:hover': {
    //                     backgroundColor: '#54aeff52'
    //                 }
    //             }
    //         }
    //     },
    //     MuiButtonBase: {
    //         defaultProps: {
    //             disableRipple: true
    //         },
    //         styleOverrides: {
    //             root: {
    //                 '&:hover': {
    //                     boxShadow: 'unset'
    //                 }
    //             }
    //         }
    //     },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: 15,
                boxShadow: '0px 10px 10px 0px #00000080',
                backgroundImage: 'unset'
            }
        }
    },
    MuiButton: {
        styleOverrides: {
            root: {
                fontSize: 18,
                borderRadius: 15,
                textTransform: 'inherit',
                boxShadow: 'unset',
                '&:hover': {
                    boxShadow: 'unset',
                }
            }
        }
    }
};

export const light = {
    palette: {
        mode: 'light',
    },
    typography: {
        fontFamily: 'CoinbaseDisplay, Helvetica Neue Light',
        fontSize: 14
    },
    shape: {
        borderRadius: 4
    },
    components: overrides
};

export const dark = {
    palette: {
        mode: 'dark',
        primary: {
            main: '#2E2D4E',
            light: '#5A4EE8'
        },
        baackground: {
            default: '#151428'
        }
    },
    typography: {
        fontFamily: 'CoinbaseDisplay, Helvetica Neue Light',
        fontSize: 14,
        color: '#F9FAFA',
        fontWeight: 400,
    },
    shape: {
        borderRadius: 4
    },
    components: overrides
};
