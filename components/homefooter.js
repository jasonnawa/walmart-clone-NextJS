import { Flex, Box, HStack } from "@chakra-ui/react"
import"../public/index.css"



const HomeFooter = ()=>{
    return(
        <>

       <Flex width="100%" px={40} py={5} bg="rgb(0, 79, 154)" color="white" flexDirection="column" textAlign="center"  display= {{base : "none",lg : "block"}}>

        <ul className="footer-list">
            <li>All Departments</li>
            <li>Store Directory</li>
            <li>Careers</li>
            <li>Our Company</li>
            <li>Sell on Walmart.com</li>
            <li>Help</li>
            <li>Product Recalls</li>
            <li>Accessibility</li>
            <li>Tax Exempt Program</li>
        </ul>

        <Flex>
            
        </Flex >
       <Box mt={10}><small>&copy; 2024 Walmart. All Rights Reserved.</small> </Box>

       </Flex>

       <Flex width="100%" px={4} py={5} flexDirection="column" textAlign="start"  display= {{base : "block",lg : "none"}}
       borderTopWidth={4}>

<ul className="footer-list2">
    <li>All Departments</li>
    <li>Store Directory</li>
    <li>Careers</li>
    <li>Our Company</li>
    <li>Sell on Walmart.com</li>
    <li>Help</li>
    <li>Product Recalls</li>
    <li>Accessibility</li>
    <li>Tax Exempt Program</li>
</ul>

<Flex>
    
</Flex >
<Box mt={10}><small>&copy; 2024 Walmart. All Rights Reserved.</small> </Box>

</Flex>

       </>
    )
}

export default HomeFooter