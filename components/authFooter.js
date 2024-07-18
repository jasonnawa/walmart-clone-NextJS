import { Flex, Box, HStack } from "@chakra-ui/react"




const AuthFooter = ()=>{
    return(
       <Flex width="100%" px={10} py={5} borderTopWidth={1}>
       <Box mr={20}><small>&copy; 2024 Walmart. All Rights Reserved.</small> </Box>

       <HStack spacing={5}>
       <Box> CA Privacy Rights</Box>

       <Box> Do Not Sell My Personal Information</Box>

       <Box>Notice at Collection</Box>

       <Box>request My Personal Information</Box>

       <Box>Califormia Supply Chains Act</Box>
       </HStack>
       </Flex>
    )
}

export default AuthFooter