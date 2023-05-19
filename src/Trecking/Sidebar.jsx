import * as React from 'react';

import PropTypes from 'prop-types';

import Box from '@mui/material/Box';

import { Card, Typography, Button, } from "@mui/material"

import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import { Stack } from "@mui/system";

import Avatar from '@mui/material/Avatar';


function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 2,    
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function FlexWrap() {
  return (

    <>
    <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
          p: 1,
          m: 1,
          position:'absolute',
          bgcolor: 'background.paper',
          height: 116,
          borderRadius: 1,

        }}
      >
        
        <Item
          sx={{
            height: 84,
          }}
        >
         <Card
        sx={{width:200,height:160,position:'absolute',
        backgroundColor:'rgb(120, 118, 238)',alignItems:'center',marginTop:32,
        borderRadius:3,}} >
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
           
    
     </Card>
     <Card sx={{ width:200,height:270,
        backgroundColor:'blue',position:'absolute',
       borderRadius:5,color:'white'
       }}>
         < Avatar
      alt="Remy Sharp"
      src="data:image/jpeg;base64,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" 
      sx={{ width: 66, height: 66,marginLeft:7,marginTop:3 }}
     />
     <Typography ml={4} variant='h7'>Report for</Typography>
     <Typography variant='h4'sx={{marginTop:3,marginLeft:4}}>Jeremy Robson</Typography>
          
       </Card>
     
        </Item>
       
      </Box>
    
    <div style={{ width: '100%',marginLeft:170,}}>

     

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 4,
          m: 4,
          
          maxWidth: 850, 
        }}
      >
       
        
      
        <Item>
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',marginTop:4
       }}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Work</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>32hrs</Typography>
       <Typography ml={3}>Last Week - 36hrs</Typography>
         </Card>
         <Card sx={{ width:200,height:170,
        backgroundColor:'orange',
       borderRadius:5,
       }}>
          
       </Card>

        </Item>


        <Item>
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',marginTop:4
       }}>
             <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Excercise</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>4hrs</Typography>
       <Typography ml={3}>Last Week - 5hrs</Typography>
         </Card>
         <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(123, 192, 248)',
       borderRadius:5,
       }}>
          
       </Card>
        </Item>


        <Item> 
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',marginTop:4
       }}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Play</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>10hrs</Typography>
       <Typography ml={3}>Last Week - 8hrs</Typography>
        
         </Card>
         <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(243, 243, 95)',
       borderRadius:5,
       }}>
          
       </Card>
       </Item>



        <Item >
          
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',marginTop:4
       }}>
             <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Social</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>5hrs</Typography>
       <Typography ml={3}>Last Week - 10hrs</Typography>
         </Card>
         <Card sx={{ width:200,height:170,
        backgroundColor:'#96f75ed3',
       borderRadius:5,
       }}>
          
       </Card>

        </Item>


        <Item> 
        <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',marginTop:4
       }}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Work</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>32hrs</Typography>
       <Typography ml={3}>Last Week - 36hrs</Typography>
         </Card>
         <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(117, 18, 197)',
       borderRadius:5,
       }}>
          
       </Card>
       </Item>


        <Item>
          <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(120, 118, 238)',
        color:'white',borderRadius:5,position:'absolute',marginTop:4
       }}>
            <Stack direction="row" sx={{justifyContent:'space-between'}}>
       <Typography variant="h5" mt={2} ml={3}>Selfcare</Typography>
       <Button><MoreHorizIcon sx={{ color:'white'}}/></Button>
       </Stack>
       <Typography variant="h2" ml={3}>2hrs</Typography>
       <Typography ml={3}>Last Week - 2hrs</Typography>
         </Card>
         <Card sx={{ width:200,height:170,
        backgroundColor:'rgb(247, 90, 90)',
       borderRadius:5,
       }}>
          
       </Card>
          
          
          </Item>
      </Box>
     
    </div>
    </>
  )};