//import { Open_Sans } from 'next/font/google'
'use client'
import SideBar from "@/components/sidebar";
import { Providers } from "../providers";
import NavBar from "@/components/navbar";
import MenuBar from "@/components/menubar";
import DeliveryDetails from "@/components/deliverydetails";
import MenuBar2 from "@/components/menubar2";
import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import HomeFooter from "@/components/homefooter";




export default function RootLayout({ children }) {
  const [sideBar, setSideBar] = useState(false)

 function toggleSideBar(){
  setSideBar((oldValue)=>{
   return !oldValue})
}

function toggleSideBar2(){
  setSideBar((oldValue)=>{
   return false})
}


 
  return (
    <html lang="en" >
      
      <body>
        <Providers>
       <Flex overflow="hidden">
        <Flex display={sideBar? "block": "none"} height="100vh"  minWidth={300}>
          <SideBar />
        </Flex >
        <Flex
        flexDir="column"
        flexGrow={1}
        
        onClick ={()=> {
          return (sideBar? toggleSideBar2() : undefined)}}
        >
          <NavBar 
          toggleSideBar = {toggleSideBar}
          sideBar ={sideBar}
          />
          <DeliveryDetails />
          <MenuBar/>
          
          {children}

          <HomeFooter />

        </Flex>

       </Flex>
          
          </Providers>
          </body>
    </html>
  );
}
