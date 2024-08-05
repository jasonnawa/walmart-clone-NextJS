'use client'
import { Container, Heading, Box, Flex, Text, Button, Link} from "@chakra-ui/react"
import { useState, useEffect } from "react"
import Image from "next/image"
import image1 from "@/public/homepageimages/Discount.jpg"
import image2 from "@/public/homepageimages/rollbacks.jpg"
import image3 from "@/public/homepageimages/wedding.jpg"
import image4 from "@/public/homepageimages/headphones.jpg"
import image5 from "@/public/homepageimages/camera.jpg"
import image6 from "@/public/homepageimages/tennis.jpg"
import image7 from "@/public/homepageimages/silver.jpg"
import image8 from "@/public/homepageimages/camp.jpg"
import image9 from "@/public/homepageimages/banner.jpg"
import image10 from "@/public/homepageimages/kids.jpg"
//import product from "@/public/productimage/Camera.jpg"




const Home = ()=>{

  const [products, setProduct] = useState([])

useEffect(()=>{
    async function fetchData(){
        let data = await fetch("https://fakestoreapi.com/products")
        data = await data.json()
        setProduct(data)
        console.log(data)
    }
    fetchData()

},[]);

//utlity function for truncation
const truncateDescription = (description, wordLimit) =>{
  const words = description.split(' ');
  return words.slice(0, wordLimit).join(' ') + (words.length > wordLimit ?"...": "");
}
  
  return(
    < >
   <section className="container">
    <Flex marginBlock={10} flexDirection="row" mr={5}>

      <Flex flexDirection="column" mr={4}>
        <Box mb={4}><Image src={image1} /></Box>
        <Box mb={4}><Image src={image4} /></Box>
        <Box><Image src={image8} /></Box>
      </Flex>

      <Flex flexDirection="column" mr={4}>
        <Box mb={4}><Image src={image2}   /></Box>
        <Flex flexDirection="row" mb={4}>
          <Box mr={4}> <Image src={image6} /> </Box>
        <Box><Image src={image7}   /></Box>
        </Flex>
        <Box><Image src={image9} /></Box>

      </Flex>

      <Flex flexDirection="column">
         <Box mb={4}><Image src={image3} /></Box>
        <Box mb={4}><Image src={image5} /></Box>
        <Box><Image src={image10} /></Box>

      </Flex>

    </Flex>
    </section>


     <Flex flexDirection="column" width="100vw" >
      
      <Box  px={6} mr={4}>
      <Flex flexDirection="row" justify="space-between">
      <Text fontSize="25px" ><strong>Flash Deals</strong></Text>
     <u>View all</u>
      </Flex>

      <Text>Up to 65% off</Text>
      </Box>


    <Flex  px={6}  pt={7} height="400px" overflowX="scroll"  overflowY="hidden"mr={5}>
      {products.map((product)=>{
        return (
          <Link href="/productDetails">
          <Box minW={180} maxW={220} mr={8} key={product.id}>
          <Image height= {250} width={150} src={product.image}/>
          <Text color="green"><strong>${product.price}</strong></Text>
          <Text>{truncateDescription(product.description,6)}</Text>
          <Button bg="transparent" borderWidth={2} borderRadius={20} borderColor="black" mt={2}> +Add</Button>
  
        </Box>
        </Link>
        )
      })}
      

    </Flex>



















     </Flex>




    </>
  )
}



export default Home