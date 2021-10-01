import { Box,Text} from '@chakra-ui/react';
function Investors(){
    return(
        <Box display='flex'
        w='1318px'
        h='400px'
        bgColor='blackAlpha.600'
        margin='auto'
        marginTop='90px'>
            <Text
            color='white'
            as='h1'
            w='35%'
            h='auto'
            bgColor='blue.800'
            textAlign='left'
            fontWeight='extrabold'
            fontSize='50px'
            padding='20px'
            paddingTop='120px'
            >Our Investors and Board</Text>
            <Box display='flex'>
                <Box
                w='33.33%'
                justifyContent='flex-start'
                padding='50px'
                paddingTop='120px'>
                    <img src='/Logo.jpg' alt='logo' />
                    <br/>
                    <img src='/Logo.jpg' alt='logo' />
                </Box>
                <Box
                w='33.33%'
                justifyContent='flex-start'
                padding='50px'
                paddingTop='120px'>
                <img src='/Logo.jpg' alt='logo' />
                <br/>
                <img src='/Logo.jpg' alt='logo' />
                </Box>
                <Box
                w='33.33%'
                justifyContent='flex-start'
                padding='50px'
                paddingTop='120px'>
                <img src='/Logo.jpg' alt='logo' />
                <br/>
                <img src='/Logo.jpg' alt='logo' />
                </Box>
            </Box>
        </Box>

    )
}
export default Investors;