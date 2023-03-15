import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box {...other}/>
    );
  }

export default function BasicGrid() {
  return (
    <>
    <Box sx={{ flexGrow: 1,marginTop:2, }}>
     
      <Grid  container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} >
        <Grid item xs={3} >
          <Item >
            <Card sx={{width:200, textAlign: 'center',}}>
            <Typography  variant='h8'>
            <Button> <FacebookIcon/></Button>@NATHAN F</Typography>
            <Typography variant='h3'>1 9 3 7</Typography>
            <Typography variant='h6'> F o l l o w e r s </Typography>
            <Typography variant='h9'  sx={{color:'green'}}>
            <Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                12 Today</Typography>
                </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>
            
          <Typography variant='h8'><Button> <TwitterIcon/></Button>@NATHAN F</Typography>
            <Typography variant='h3'>1 0 4 4</Typography>
            <Typography variant='h6'> F o l l o w e r s </Typography>
            <Typography variant='h9'  sx={{color:'green'}}>
            <Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                99 Today</Typography>
                </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>
          <Typography variant='h8'><Button><InstagramIcon/></Button>@NATHAN F</Typography>
            <Typography variant='h3'>1 1 k</Typography>
            <Typography variant='h6'> F o l l o w e r s </Typography>
            <Typography variant='h9' sx={{color:'green'}}>
             <Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button>  
                1099 Today</Typography>
                </Card>
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>
          <Typography variant='h8'><Button><YouTubeIcon sx={{color:'red'}}/></Button>@NATHAN F</Typography>
            <Typography variant='h3'>8 2 3 9</Typography>
            <Typography variant='h6'> F o l l o w e r s </Typography>
            <Typography variant='h9' sx={{color:'red'}}>
              <Button>  <ArrowDropDownIcon sx={{color:'red'}}/></Button> 
                144 Today</Typography>
                </Card>
          </Item>
        </Grid>
       
      </Grid>
    </Box>
    <div >
    <Typography variant='h4'>overview  - today</Typography>
    </div>
    
    </>
    
  );
}