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

const MenuBar2 = ()=>{
    return(
        <Flex bg="rgb(230, 241, 252)" display= {{base : "none", lg:"block"}}
        paddingBlock={2} paddingLeft={20} paddingRight={20} color="black" textAlign="center"  >
         
          <HStack display="flex" justifyContent="space-between"> 

         <Box>
          <strong> Savings </strong>
         </Box>

         <Box>
          <strong> Furniture</strong>
         </Box>

         <Box>
          <strong>Kitchen & Dining</strong>
         </Box>
         
         <Box>
          <strong> Storage & Organisation</strong>
         </Box>

         <Box>
          <strong> Appliances & Floorcare</strong>
         </Box>

         <Box>
          <strong> Decor</strong>
         </Box>

         <Box>
          <strong> Bed & Bath</strong>
         </Box>

         <Box>
          <strong> Brands & Featured Shops</strong>
         </Box>

         </HStack>
        </Flex>

    )}

export default MenuBar2