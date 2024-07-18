//import { Open_Sans } from 'next/font/google'
'use client'
import { Flex, Box } from "@chakra-ui/react";
import { Providers } from "../providers";
import Footer from "@/components/authFooter";

export default function RootLayout({ children }){
 
  return (
    <html lang="en" >
      
      <body>
        <Providers>
       <Flex  justify="center" align="center" flexDirection="column"> 
          {children}

      </Flex>
      <Footer />  
          </Providers>
          </body>
    </html>
  );
}
