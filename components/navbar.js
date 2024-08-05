'use client'
import "../public/index.css"

import { Flex, Box, Button, Text, HStack, Icon, Input, Center, InputGroup, Img, IconButton, Link } from "@chakra-ui/react"
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

const NavBar = (props)=>{
    return(
       
        <Flex as="nav" bg="#0071ce" alignItems="center" justify ="space-around" px="25px" py="9px" align="center" color="white">


            <Box display= {{lg : "none"}} > 
                <button onClick={()=>{props.toggleSideBar() }} > <Icon as={RxHamburgerMenu} marginRight={4} /> </button>
                
               
                </Box>

            <Box mr={4}><Image src={logo} width={30} /></Box>
            <Box w ="300px" mr={10} display= {{base : "none", lg:"block"}} >
             <Menu>
              <MenuButton as={Button}  rightIcon={<FaChevronDown/>} bg="rgb(0, 79, 154)" color="white" colorScheme="rgb(0, 79, 154)" borderRadius={30}  py={7} px={6} >
                   <Box display="flex" flexDir="row">
                   <Box><Icon as={CiLocationOn} /></Box>
               
                    <Box >
                    <strong>How do you want your items?</strong>
                    <p><small>Sacramanto, CA 95829</small></p>
                    </Box>
                    </Box>
               </MenuButton>

              <MenuList as="div" bg="#0071ce" border= "none"pt={7} >
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
                display="flex" flexDirection="row" width="100%" textAlign="start" bg="white" color="black" alignItems="center" >
                    <Box marginRight={2}>
                   <Image src={delivery} width={35} height={35} />
                   </Box>
                    <Box maxWidth={220} >
                    <small>2-day shipping, dropped off by FedEx or UPS. Orders over $35 ship free!</small>
                    </Box>
                    
                </Box>
                </MenuItem>
              </MenuList>
              </Menu>
            </Box>

            <Box w ="250px" flexGrow="1">
                <form action = "">
                    <InputGroup display="flex" align-items="center">
                    

                    <Input bg="white" type="text" minW={200} variant="filled" placeholder="Search everything at Walmart online and in store" paddingBlock={6} px={8} borderRadius={30}/>
                    <Box position="absolute" right={2} top={1.5}><Button bg="rgb(0, 79, 154)" colorScheme="rgb(0, 90, 154)" borderRadius={60} p={0}><Icon as={HiOutlineSearch} w={5} h={5} />
                    </Button></Box>
                    
                    </InputGroup>
                </form>
            </Box>
            <HStack spacing={3} >

                <Box display= {{base : "none", lg:"block"}}>
            <Button  bg="#0071ce" borderRadius={29} py={6} color="white" >
                <Box><Icon as= {FaRegHeart}/></Box> 
               <Box><p><small>Reorder</small></p><Text><strong>My Items</strong></Text></Box>
            </Button>
            </Box>

            <Box display= {{base : "none", lg:"block"}}>
            <Button  bg="#0071ce"  borderRadius={29} py={6} color="white">
            <Box><Icon as= {HiOutlineUser}/></Box>
               <Link href="/login"> <Box><p><small>Sign In</small></p><Text><strong>Account</strong></Text></Box></Link>
            </Button>
            </Box>

            <Button  bg="#0071ce"  borderRadius={29} py={6} color="white">
            <Link href="/cart">  <span><Box><Icon as= {LuShoppingCart}/><Text> $0.00</Text></Box></span> </Link>
            </Button>
            </HStack>


        </Flex>

        
        
    )
}

export default NavBar