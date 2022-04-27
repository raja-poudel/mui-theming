import { createTheme } from "@mui/material/styles";

export const getTheme = (mode) => {
    return {
        ...(mode === 'light' ? {
            palette: {
                mode: 'light',
            }
        } : {
            palette: {
                mode: 'dark'
            }
        })
    }
}

export const theme = (mode) => {
    return createTheme(getTheme(mode))
}


