import {Box,Text} from '@chakra-ui/react';
function Story(){
    return(
        <Box w='1318px' 
        h='1100px' 
         bgColor='gray.200'
         margin='auto'>
            <Box w='364px'
            h='120px'
            margin='auto'>
                <Text
                as='h1'
                fontWeight='500'
                fontSize='42px'
                textAlign='center'
                padding='50px'>Our Story</Text>
            </Box>
            <Text w='830px' 
               h='103px'
               margin='auto'
               textAlign='center'
               fontSize='24px' 
               fontWeight='semibold'>In this text block,we need to write a short paragraph explaining who we are as a team,on a high-level. We also talk about the general values and passion.</Text>
            <Box w='1040px'
             h='500px'
              margin='auto'
              marginTop='50px'>
                <img src='/image.jpg' alt='secondpic'
                w='80%' h='100%' />

            </Box>
        </Box>
        
    )
}
export default Story;