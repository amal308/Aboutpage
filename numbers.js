import {Box,Text} from '@chakra-ui/react';
function Numbers(){
    return(
        <Box 
        
        margin='auto'
        h='auto'
        w='1318px'
        textAlign='center'>
            <Text w='320px'
            h='100px'
            fontWeight='500'
            fontSize='42px'
            
            marginTop='50px'
            textAlign='center'
            margin='auto'
            >Our Numbers</Text>
            <Box display='flex'
            w='1200px'
            h='auto'
            margin='auto'
            justifyContent='space-evenly'>
                <Text
                as='h1'
                fontSize='5xl'
                fontWeight='bold'
                w='33.33%'
                textAlign='center'
                margin='auto'>2021</Text>
                <Text
                as='h1'
                fontSize='5xl'
                fontWeight='bold'
                w='33.33%'
                textAlign='center'
                margin='auto'>1M+</Text>
                <Text
                as='h1'
                fontSize='5xl'
                fontWeight='bold'
                w='33.33%'
                textAlign='center'
                margin='auto'>$100M </Text>
            </Box>
            <Box
            display='flex'
            w='1200px'
            h='auto'
            margin='auto'
            justifyContent='space-evenly'>
                <Text
                as='h2'
                fontWeight='extrabold'
                textAlign='center'
                w='33.33%'
                margin='auto'>Year Founded</Text>
                <Text
                as='h2'
                fontWeight='extrabold'
                textAlign='center'
                w='33.33%'
                margin='auto'>Customers</Text>
                <Text
                as='h2'
                fontWeight='extrabold'
                textAlign='center'
                w='33.33%'
                margin='auto'>In Funding</Text>
            </Box>
        </Box>

    )
}
export default Numbers;