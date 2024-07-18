'use client'
import { Container, Flex, Box, Heading,Input, FormControl, FormLabel, Button } from "@chakra-ui/react"

import Image from "next/image"
import logo from "@/public/walmart.png"
import "@/public/index.css"

const Register = ()=>{
    return(
     <section>
      
        <Flex flexDirection="column" alignItems="center" justify="center"py={20} maxW={330} height="100vh" mb={10}>
        <Box mr={4}><Image src={logo} width={50} /></Box>
        <Box mt={5}><Heading fontSize={20}>Create your Walmart account</Heading></Box>
        
       
  
        
        <form className="form">
          
          <FormControl>

          <FormLabel mt={4}>
              Email
            </FormLabel>
           <Input type="email" name="email" value="osikoyajason8@gmail.com"/>


            <FormLabel>
              First name
            </FormLabel>
            <Input type="text" name="firstName" />


            <FormLabel mt={4}>
             Last name
            </FormLabel>
            <Input type="text" name="lastName" />

            <FormLabel mt={4}>
            Phone number
            </FormLabel>
            <Input type="number" name="phoneNumber" />

            <FormLabel mt={4}>
             Create a password
            </FormLabel>
            <Input type="password" name="lastName" />




            <Box  mb={5} mt={6}><small>By clicking Create Account, you acknowledge you have read and agreed to our <u>Terms of Use</u>
            and <u>Privacy Policy</u>.Message and data rates may apply. View our <u>Mobile Alerts Terms</u>.</small></Box>

            <Flex width="100%" mt={5}> <Button borderRadius={20} bg="rgb(0, 113, 220)" width="100%" color="white"> Continue </Button></Flex>
          </FormControl>

        </form>
            

      


        </Flex>

      
     </section>
    )
  }
  
  
  
  export default Register