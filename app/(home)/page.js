import { Container, Heading, Box, Flex, Text, Button} from "@chakra-ui/react"
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
import product from "@/public/productimage/Camera.jpg"


const Home = ()=>{
  return(
    <>
   <section>
    <Flex marginBlock={10} flexDirection="row" mr={5} ml={5}>

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


     <section>
      <Box  px={6}>
      <Flex flexDirection="row" justify="space-between">
      <Text fontSize="25px" ><strong>Flash Deals</strong></Text>
     <u>View all</u>
      </Flex>

      <Text>Up to 65% off</Text>
      </Box>


    <Flex  px={6} flexDirection="row"  pt={7}>
      <Box width={200} mr={8}>
        <Image height={250} src={product}/>
        <Text color="green"><strong>Now $70.99</strong></Text>
        <Text>Vlogging Camera 4K Digital Camera for...</Text>
        <Button bg="transparent" borderWidth={2} borderRadius={20} borderColor="black"> +Add</Button>

      </Box>

      <Box width={200}>
        <Image height={250}  src={product}/>
        <Text color="green"><strong>Now $70.99</strong></Text>
        <Text>Vlogging Camera 4K Digital Camera for...</Text>
        <Button bg="transparent" borderWidth={2} borderRadius={20} borderColor="black" py={2}> Options</Button>
      </Box>

    </Flex>



















     </section>




    </>
  )
}



export default Home