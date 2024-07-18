import { Box, Button, Flex } from "@chakra-ui/react"
import Image from "next/image"
import logo from "../public/walmart.png"



const SideBar = ()=>{

    return(
       <Flex flexDir="column" color="rgb(70, 71, 74)" height="100%" paddingBlock={15} px={6} overflowY="scroll">

        <Flex paddingBottom={27}  paddingTop={37} justify="space-between" alignItems="center" >
            <Box><Image src={logo} width={30} /></Box>
            <Box><Button color="white" bg="#0071ce" borderRadius={35} >Sign in or create account</Button></Box>
        </Flex>

        <Flex paddingBlock="24px"  borderBottomWidth={0.5} borderBottomColor="rgb(70, 71, 74)"> 
            Walmart +
        </Flex>

        <Flex flexDir="column" paddingBlock="24px"  borderBottomWidth={0.5} borderBottomColor="rgb(70, 71, 74)">
            <Box paddingBottom={25}>Purchase History</Box> 
            <Box paddingBottom={25}>My Items</Box> 
            <Box>Account</Box> 
        </Flex>

        <Flex paddingBlock="24px"  borderBottomWidth={0.5} borderBottomColor="rgb(70, 71, 74)">
            Help 
        </Flex>

        <Flex flexDir="column" paddingBlock="24px"  borderBottomWidth={0.5} borderBottomColor="rgb(70, 71, 74)">
            <Box paddingBottom={25}>Lists</Box> 
            <Box>registries</Box> 
        </Flex>

        <Flex  flexDir="column" paddingBlock="24px"  borderBottomWidth={0.5} borderBottomColor="rgb(70, 71, 74)">
            <Box paddingBottom={25}>Departments</Box> 
            <Box>Services</Box> 
        </Flex>

        <Flex paddingBlock="24px">
            Give Feedback 
        </Flex>

        
       </Flex>
    )
}

export default SideBar