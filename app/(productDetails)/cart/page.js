'use client'
import {Button, Container, Heading, Text} from "@chakra-ui/react"
import { Image } from "@chakra-ui/next-js"
import Link from "next/link"
import cart from "@/public/cart3.png"

const Cart = ()=>{
    return( 
        <Container mt={20} maxW='1250px'>
            <Text fontSize={26}><strong>Cart</strong> (0 items)</Text>


            <Container mt={15} centerContent>
                <Image src={cart} />

                <Heading fontSize={23} >Sign in to see your saved items</Heading>
                <Link href="login"><Button bg="#0071ce" color="white" px={8} py={3} width={200} borderRadius={20} mt={5}> Sign in</Button></Link>
                <hr />

                <Heading fontSize={20} mt={8}> Time to start shopping!</Heading>

                
            </Container>
        </Container>
    )
}


export default Cart