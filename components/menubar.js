'use client'
import "../public/index.css"

import { Flex, Box, Button, Text, HStack, Icon, Input, Center, InputGroup, Img, IconButton } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../public/walmart.png"
import {FaRegHeart} from "react-icons/fa"
import {LuShoppingCart} from "react-icons/lu"
import {HiOutlineUser} from "react-icons/hi2"
import {HiOutlineSearch} from "react-icons/hi"
import { FaChevronDown } from "react-icons/fa"
import {CiLocationOn} from "react-icons/ci"
import {RxHamburgerMenu} from "react-icons/rx"
import truck from "../public/truck.png"
import car from "../public/car.png"
import bag from "../public/bag.png"
import delivery from "../public/delivery.png"

//import { ChevronRightIcon } from '@chakra-ui/icons'




import{Menu, MenuButton, MenuList, MenuItem, MenuItemOption, MenuGroup, MenuOptionGroup, MenuDivider} from "@chakra-ui/react"

const MenuBar = ()=>{
    return(
        <Box bg="rgb(242, 248, 253)" display= {{base : "none", lg:"block"}}
         px={16} py={2} color="rgb(0, 45, 88)" textAlign="center" maxHeight={10} whiteSpace="nowrap" overflow="visible">
         
          <HStack spacing={6} display="flex" flexBasis={1}> 
          <Box display="flex"paddingRight={15} alignItems="center" >
            <strong>Departments&nbsp;</strong><Icon as={FaChevronDown} />
         </Box>

          <Box  display="flex" paddingRight={15} borderRightWidth={2} alignItems="center" >
           <strong>Services&nbsp;</strong><Icon as={FaChevronDown} />
         </Box>
         <Flex flexWrap="nowrap" flexShrink={1}>
            Grocery Essentials
         </Flex>

         <Box>
           Back To School
         </Box>

         <Box>
            Summer Shop
         </Box>

         <Box>
            Summer Shop
         </Box>

         <Box>
            Home
         </Box>
         
         <Box>
            Electronics
         </Box>

         <Box display= {{base : "none", dxl:"block"}}>
            Fashion
         </Box>

      

         <Box display= {{base : "none", slg:"block"}}>
            Toys
         </Box>

         <Box display= {{base : "none", mlg:"block"}}>
            Baby
         </Box>

         <Box display= {{base : "none", xl:"block"}}>
            Registry
         </Box>
         <Box display ={{base : "none", "2xl":"block"}}>
           ONE Debit
         </Box>

         <Box display= {{base : "none", "2xl":"block"}}>
            Walmart+
         </Box>
         </HStack>
        </Box>

    )}

export default MenuBar