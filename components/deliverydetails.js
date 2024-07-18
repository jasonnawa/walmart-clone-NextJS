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

const DeliveryDetails = (props)=>{
    return(

        <Box bg="#0071ce" marginTop={0.5} color="white" paddingLeft={3} display= {{lg : "none"}}>
             <Flex flexDirection="row" alignItems="center">
                <Box display="flex" flexDir="row" alignItems="center" paddingRight={15} borderRightWidth={1}>
                
                 <Menu>
              <MenuButton as={Button}  rightIcon={<FaChevronDown/>}  color="white" colorScheme="rgb(0, 79, 154)" borderRadius={30} >
                   <Box display="flex" flexDir="row">
                   
                    <Image src={truck} width={22}/> <strong>&nbsp; Shipping</strong>
                    </Box>
               </MenuButton>

              <MenuList as="div" bg="#0071ce" border= "none" pt={7} marginTop={-4} marginLeft={-3} px={4} paddingBottom={4}>
                <MenuItem as="div" bg="#0071ce" display="flex" justifyContent="space-between" alignItems="center" px={14}>
                
               
                    <Box w={20} display="flex" flexDir="column" alignItems="center" >
                        <Button bg="transparent" borderRadius={30} p={0}><Image src={truck} width={40}/></Button>
                        <strong>Shipping </strong>
                    </Box>
                    
                    <Box w={20} display="flex" flexDir="column" alignItems="center" >
                    <Button bg="transparent" borderRadius={30} p={0}> <Image src={car} width={40}/></Button>
                        <strong>Pickup </strong>
                    </Box>
                 
                    <Box w={20} display="flex" flexDir="column" alignItems="center">
                    <Button bg="transparent" borderRadius={30} p={0}> <Image src={bag} width={40}/></Button>
                        <strong>Delivery </strong>
                    </Box>
              
                
                </MenuItem>


                <MenuItem as="div"  bg="#0071ce" display="flex" flexDirection="column" width="100%" >
               
                <Box borderTopRadius={10} py={3} px={5}
                display="flex" flexDirection="row" width="100%" textAlign="start" bg="white" color="black" alignItems="center">
                   <Icon as={CiLocationOn} mr={4}/>
                    <Box >
                    <small>Add an address for Shipping</small>
                    <p><small>Sacramanto, CA 95829</small></p>
                    </Box>
                    
                </Box>
               
                <Box display="flex" width="100%" bg="white" borderBottomRadius={10}paddingBottom={5} px={5} >
                    <Box bg="#0071ce" display="flex" width="100%" borderRadius={20} py={1} justifyContent="center">Add address</Box>
                    </Box>
                </MenuItem>


                <MenuItem as="div" bg="#0071ce" >
                <Box borderTopRadius={10} py={3} px={5} borderBottomRadius={10}
                display="flex" flexDirection="row" width="100%" textAlign="start" bg="white" color="black"alignItems="center" >
                    <Box marginRight={2}>
                   <Image src={delivery} width={35} height={35} />
                   </Box>
                    <Box maxWidth={220}  >
                    <small>2-day shipping, dropped off by FedEx or UPS. Orders over $35 ship free!</small>
                    </Box>
                    
                </Box>
                </MenuItem>
              </MenuList>
              </Menu></Box>
                <Box paddingLeft={15}>  
                <Icon as={CiLocationOn} />  Sacramanto, 95829
         </Box>

          
         </Flex>

        
        </Box>
    )}

export default DeliveryDetails