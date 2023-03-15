import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/system';
import { Button, Typography } from '@mui/material';
import { useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import img1 from '../image/img1.jpg';
import img2 from '../image/img2.jpg';
import img3 from '../image/img3.jpg';
// import img4 from '../image/img4.jpg';


export default function RowAndColumnSpacing() {
    
  const [count, setCount] = useState(0);
  
   
  function incrementCount() {
    setCount(count + 1);
  }
  
  function decrementCount() {
    setCount(count - 1);
  }
 const btn = {
  color :'orange',
   fontSize:20
 }
 const add = {
  backgroundColor:'orange',
  color:'black',
 }
 const notify = () => toast("Product added To Cart");

  
 

  return (
    <Box sx={{ width: '100%',mt:5 ,}}>
      <Grid container   columns={{ xs: 4, sm: 8, md: 12}}>
        <Grid item xs={5}> 
          
            <Container >
            <Carousel infiniteLoop autoPlay >
                <div className='image'>
                   <img src={img1}/>
                </div>
                <div className='image'>
                    <img src={img2} />
                   
                </div>
                <div className='image'>
                    <img src= {img3}/>
                </div>
                {/* <div className='image'>
                    <img src= {img4}/>
                </div> */}
            </Carousel>
              
            </Container>
        </Grid>

        <Grid item xs={4}>
            <Typography sx={{color:'orange'}} mt={2}>Sneaker Company</Typography>
            <Typography mt={4} variant='h4'><b>Fall Limited Edition Sneakers</b></Typography>
            <Typography  mt={4}variant='h7'>These low-profile sneakers are your perfect casual wear
             company.featuring durable rubber outer sole .there'll withstand everything
             the weather can offer</Typography>
             <Typography  mt={4}variant='h6'><b>$250.00 </b><span style={{ backgroundColor:'orange',fontSize:12}}>50%</span>
             </Typography>
             <p><del>$125.00</del></p>
             <Button sx ={btn} onClick={decrementCount} >-</Button>
             <span>{count}</span>
              <Button sx={btn} onClick={incrementCount}>+</Button>
              <Button sx={add} onClick={notify} ><ShoppingCartIcon/>Add to Cart</Button>
              <ToastContainer />
        </Grid>
      </Grid>
    </Box>
  );
}