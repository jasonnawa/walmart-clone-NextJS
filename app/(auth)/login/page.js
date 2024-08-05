'use client'
import { Container, Flex, Box, Heading,Input, FormControl, FormLabel, Button, Link } from "@chakra-ui/react"

import Image from "next/image"
import logo from "@/public/walmart.png"
import "@/public/index.css"


const Login = ()=>{
    return(
     <section>
      
        <Flex flexDirection="column" alignItems="center" justify="center"py={20} maxW={330} height="100vh">
        <Box mr={4}><Image src={logo} width={50} /></Box>
        <Box mt={5}><Heading fontSize={20}>Sign in or create your account</Heading></Box>
        
        <Box  display="flex" textAlign="center" mb={5}
        mt={6}>Not sure if you have an account?Enter your Email and we'll check for you.</Box>
  
        
        <form className="form">
          <FormControl>
            <FormLabel>
              Email Address
            </FormLabel>
            <Input type="email" name="email" />
            <Flex width="100%" mt={5}> <Link href="/register" width="100%"><Button borderRadius={20} bg="rgb(0, 113, 220)" width="100%" color="white"> Continue </Button></Link></Flex>
          </FormControl>

        </form>
            

        <Box  mb={5} mt={6}><span>Securing your personal information is our priority.<u>See our privacy measures.</u></span></Box>


        </Flex>

      
     </section>
    )
  }
  
  
  
  export default Login