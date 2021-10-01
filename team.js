import { Box,Text} from '@chakra-ui/react';
function Team(){
    return(
        <Box w='1318px'
        h='600px'
        margin='auto'
        marginTop='200px'>
            <Text
            as='h1'
            textAlign='center'
            fontSize='4xl'
            fontWeight='extrabold'
            margin='auto'>Team</Text>
            <Text
            textAlign='center'
            fontWeight='bold'
            fontSize='2xl'>Featuring the people behind Livlong</Text>
            <Box display='flex'
            
            w='1318px'
            h='400px'
            margin='auto'

            >
                <Box w='25%'
                h='80%'
                padding='30px'>
                 <img src='/dp.jpg' alt='dp'
                 w='100%'
                 h='100%' />
                 
                </Box>
                <Box
                w='25%'
                h='80%'
                padding='30px'>
                <img src='/dp.jpg' alt='dp'
                w='100%'
                h='100%'/>
                </Box>
                <Box
                w='25%'
                h='80%'
                padding='30px'>
                <img src='/dp.jpg' alt='dp'
                w='100%'
                h='100%'/>
                </Box>
                <Box
                w='25%'
                h='80%'
                padding='30px'>
                <img src='/dp.jpg' alt='dp'
                w='100%'
                h='100%'/>
                </Box>
               
                
                
            </Box>
            <Text display='flex'
            w='1318px'
            h='auto'
            margin='auto'
            >
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='bold'
                margin='auto'>Full Name</Text>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='bold'
                margin='auto'>Full Name</Text>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='bold'
                margin='auto'>Full Name</Text>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='bold'
                margin='auto'>Full Name</Text>
                </Text>
            <Text
            display='flex'
            flexDir='row'>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='normal'
                margin='auto'>Position</Text>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='normal'
                margin='auto'>Position</Text>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='normal'
                margin='auto'>Position</Text>
                <Text
                w='25%'
                textAlign='center'
                fontSize='2xl'
                fontWeight='normal'
                margin='auto'>Position</Text>
            </Text>
        </Box>
        

    )
}
export default Team;