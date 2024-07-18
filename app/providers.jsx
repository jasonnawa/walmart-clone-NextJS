'use client'
import { Theme } from "@/theme"
import { ChakraProvider } from "@chakra-ui/react"

export function Providers({children}){
    return <ChakraProvider theme={Theme}>{children}</ChakraProvider>
}