'use client'
import { Box, Grid, GridItem, Flex, Button, IconButton, VStack, Text, Heading } from "@chakra-ui/react"
import Image from "next/image"
import product from "@/public/productimage/Camera.jpg"
import "@/public/index.css"


const productDetails = ()=>{
    return(
        <Grid templateColumns='repeat(3, 1fr)' gap={6} mt={20}  mr={10} ml={10}>
        <GridItem w='100%' colSpan={2}  >
            <Flex justifyContent="space-between">
            <Box display="flex" flexDir="column" flex={1}>
                
                
                <Button width={150} height={150} borderColor="rgb(0, 113, 220)" borderWidth={1} bg="white">
                    <Image  src={product} />
                </Button>

                <Button width={150} height={150} borderColor="rgb(0, 113, 220)" borderWidth={1} bg="white" mt={5}>
                    <Image  src={product} />
                </Button>


                <Button width={150} height={150} borderColor="rgb(0, 113, 220)" borderWidth={1} bg="white" mt={5}>
                    <Image  src={product} />
                </Button>

                <Button width={150} height={150} borderColor="rgb(0, 113, 220)" borderWidth={1} bg="white" mt={5}>
                    <Image  src={product} />
                </Button>

                
            </Box>


            <Box display="flex" flex={3}>
                <Image  src={product}/>               
            </Box>
            </Flex>

            <Flex mt={10} flexDirection="column">
            <Heading fontSize={28} fontWeight={600}>
                Other Related Products
                </Heading>
                <Text><small>Based on what custoumers bought</small></Text>
            </Flex>

            <Flex    pt={7} height="400px" overflowX="scroll"  overflowY="hidden"mr={5}>
     
          <Box minW={180} maxW={220} mr={8}>
          
       <Box position="relative" mb={10}> 
        <Image height= {300} width={220} src={product} className="sliderimage"/>
       <Button bg="#0071dc;"  borderRadius={20}  mt={2} color="white"
          position="absolute" bottom="0" left="0"> + Add</Button>
       </Box>
          
          <Text><strong>$69</strong></Text>
          <Text>CAMERA</Text>

          <Text>
                &#9733;&#9733;&#9733;&#9733;&#9734;<small>300</small>
            </Text>
         
          </Box>



          <Box minW={180} maxW={220} mr={8}>
          
          <Box position="relative" mb={10}> 
           <Image height= {300} width={220} src={product} className="sliderimage"/>
          <Button bg="#0071dc;"  borderRadius={20}  mt={2} color="white"
             position="absolute" bottom="0" left="0"> + Add</Button>
          </Box>
             
             <Text><strong>$69</strong></Text>
             <Text>CAMERA</Text>
   
             <Text>
                   &#9733;&#9733;&#9733;&#9733;&#9734;<small>300</small>
               </Text>
            
             </Box>




             <Box minW={180} maxW={220} mr={8}>
          
          <Box position="relative" mb={10}> 
           <Image height= {300} width={220} src={product} className="sliderimage"/>
          <Button bg="#0071dc;"  borderRadius={20}  mt={2} color="white"
             position="absolute" bottom="0" left="0"> + Add</Button>
          </Box>
             
             <Text><strong>$69</strong></Text>
             <Text>CAMERA</Text>
   
             <Text>
                   &#9733;&#9733;&#9733;&#9733;&#9734;<small>300</small>
               </Text>
            
             </Box>




             <Box minW={180} maxW={220} mr={8}>
          
          <Box position="relative" mb={10}> 
           <Image height= {300} width={220} src={product} className="sliderimage"/>
          <Button bg="#0071dc;"  borderRadius={20}  mt={2} color="white"
             position="absolute" bottom="0" left="0"> + Add</Button>
          </Box>
             
             <Text><strong>$69</strong></Text>
             <Text>CAMERA</Text>
   
             <Text>
                   &#9733;&#9733;&#9733;&#9733;&#9734;<small>300</small>
               </Text>
            
             </Box>
   



         <Box minW={180} maxW={220} mr={8}>
          
       <Box position="relative" mb={10}> 
        <Image height= {300} width={220} src={product} className="sliderimage"/>
       <Button bg="#0071dc;"  borderRadius={20}  mt={2} color="white"
          position="absolute" bottom="0" left="0"> + Add</Button>
       </Box>
          
          <Text><strong>$69</strong></Text>
          <Text>product description...</Text>

          <Text>
                &#9733;&#9733;&#9733;&#9733;&#9734;<small>300</small>
            </Text>
         
          </Box>

           

        

          </Flex>


          <Flex mt={10} flexDirection="column">
            <Heading fontSize={25} fontWeight={600} pb={5} borderBottomWidth={2} borderBottomColor="rgb(227, 228, 229)">
                About this item
                </Heading>

                <Text mt={5} mb={7}><small>Product details</small></Text>

                <Text>
                    <strong>
                    MOOSOO Small Air Fryer is multifunctional.
You may air fry, bake, grill, roast, toast, dehydrate. Compact Air fryer can replace much cooking appliance can cook a variety of foods.
With large knob control, this hot air fryer cooker is easy to operate, perfect for beginners and older, with no hassle, and no mess.
With 360 degrees rapid super-hot air frying technology, the campact air fryer let you enjoy crispy food that has all the flavor of deep frying with up to 90% less fat or oil.
The small air fryer cooks evenly and locks the moisture in food, it can cook food faster than a traditional convection oven, save your time and making it more energy-efficient.
The countertop air fryer has the temperature ranges from 175-400°F and time range from 0-30 mins，it allows you to cook at your desired temperature/time.
Our air fryer has a nonstick coating on the basket and base plate, making it easy to clean and dishwasher safe.
MOOSOO 2 quart small air fryer is suitable for couple or singles. Heat-resistant handle and a sleek, rounded shape design. Also, our air fryer is the perfect gift for health-conscious family or friends.
PFOA-free & BPA-free. ETL approved, the overheat protection and automatic shutoff give you security protection.
The electric air fryer has 100 recipes and 50 pieces of air fryer paper liner, so you can create a variety of dishes as you like!
                    </strong>
                </Text>
            </Flex>
  
   
        
      

    
        </GridItem>
       
        <GridItem w='100%'>
            <Flex flexDir="column" >
                
            <Box display="flex" flexDir="row" color="rgb(0, 113, 220)" >
                <Flex flex={1} borderColor="rgb(186, 187, 190)" borderWidth={1} borderRadius={10} mr={2} py={1} px={3}>
                <Text > <small><strong>100+ bought since yesterday</strong></small></Text>
                </Flex>
                
                <Flex flex={1}  borderColor="rgb(186, 187, 190)" borderWidth={1} borderRadius={10} py={1}  px={3}>
                <Text> <small><strong> In 200+ peoples carts</strong></small></Text>
                </Flex>
                
            </Box>

            <Box display="flex" flexDir="row" mt={4}>
                
                <Text  bg="rgb(230, 241, 252)" color="rgb(0, 79, 154)" borderRadius={5} mr={2}  px={2} > <small><strong>Best seller</strong></small></Text>
                
                <Text bg="rgb(0, 45, 88)" color="white"  borderRadius={5} mr={2}  px={2} > <small><strong>Popular pick</strong></small></Text>

                <Text color="rgb(186, 187, 190)"> <small>for "appliances"</small></Text>
                
                
            </Box>

            <Box display="flex" mt={4} flexDir="column">
                <Text><u>Magic Bullet</u> </Text>
                <Heading fontSize={18} fontWeight={700}>
                Magic Bullet® Mini 14 oz. Compact Personal Blender Silver/Black
                </Heading>
                <Text>
                &#9733;&#9733;&#9733;&#9733;&#9734;

                <small> (4.0)</small> <u>3.638 reviews</u>
                </Text>
                

            </Box>

            <Box display="flex" mt={4} flexDir="column">
                <Text><small><strong>Free 90-day returns</strong></small> </Text>
                


                <Box display="flex" mt={4} flexDir="column">

                 <Heading color="green">Now $19.97</Heading>
                 <Text>
                  <small>
                    Price when purchased online
                 </small>
                 </Text>

                 <Button bg="#0071ce" color="white" px={8} py={3} maxW={220} borderRadius={20} mt={10}> Add to cart</Button>

                

                </Box>

            </Box>

           





















            </Flex>
            </GridItem>
        
        
      </Grid>
    )
}





export default productDetails