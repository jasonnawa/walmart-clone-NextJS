import { extendTheme } from "@chakra-ui/react";
import { color } from "framer-motion";

export const Theme = extendTheme({
    colors : {
        black: '#000000',
    white: '#ffffff',
    },

    breakpoints:{
        sm: "30em",
        md: "48em", 
        lg: "62em",
        rlg: "62.5em",
        dxl : "67.5em",
        slg : "70em",
        mlg : "72.5em",
        xl: "80em",
        "2xl": "96em",

    }

})