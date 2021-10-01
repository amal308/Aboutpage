import {Box,Text} from '@chakra-ui/react';
import Download from './download';
import Investors from './investors';
import Learnmore from './learnmore';
import Livlong from './livlong';
import Numbers from './numbers';
import Story from './story';
import Talent from './talent';
import Team from './team';



function Home() {
  return (
    <Box>
           <Box display='flex' 
    w='1318px'
     h='720px'
      bg='blue.100'
      margin='auto'>
      <Box w='684px' h='720px' bg='blackAlpha.200'>
        <Text w='480px'
         h='300px'
         textAlign='center'
          fontWeight='extrabold'
          fontSize='48px'
          paddingTop='100px' 
          marginLeft='70px' >Democratizing access to quality healthcare</Text>
        <Text w='600px'
         h='200px'
          fontSize='30px'
           fontWeight='semibold'
            paddingLeft='80px'
            marginLeft='30px'
            paddingTop='30px'>Dejargonizing and simplifying medical access for the masses</Text>

      </Box>
      <Box w='670px' h='720px'>
        <img src='/image2.jpg' alt='first image'
        w='100%' h='720px' />

        

      </Box>
      

    </Box>
    <Story />
    <Numbers />
    <Investors />
    <Team />
    <Talent />
    <Learnmore />
    <Download />
    <Livlong />
    

    </Box>
    
     
    

    

    


    
  )
}
export default Home;
