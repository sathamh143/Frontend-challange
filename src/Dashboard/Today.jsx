import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Card, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Stack } from '@mui/system';


function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box {...other}/>
    );
  }

export default function BasicGrid() {
  return (
    <>
    <Box sx={{ flexGrow: 1,marginTop:5 }}>
     
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

            <Stack direction="row" justifyContent="space-between">
                <Typography>Page View</Typography>
                <Button> <FacebookIcon/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>87</Typography>
            <Typography variant='h9'  sx={{color:'red'}}><Button> <ArrowDropDownIcon sx={{color:'red'}}/></Button> 
                3%</Typography>
            </Stack>
            </Card>
            
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Likes</Typography>
                <Button> <FacebookIcon/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>52</Typography>
            <Typography variant='h9'  sx={{color:'green'}}><Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                2%</Typography>
            </Stack>
            </Card>
         
          </Item>
        </Grid>
        <Grid  item xs={3}>
          <Item>
          <Card  sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Likes</Typography>
                <Button> <InstagramIcon/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>5467</Typography>
            <Typography variant='h9'  sx={{color:'green'}}><Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                2257%</Typography>
            </Stack>
            </Card>
          
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Profile Veeew</Typography>
                <Button> <InstagramIcon/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>52K</Typography>
            <Typography variant='h9'  sx={{color:'green'}}><Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                1375%</Typography>
            </Stack>
            </Card>
         
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Retweets</Typography>
                <Button> <TwitterIcon/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>107</Typography>
            <Typography variant='h9'  sx={{color:'green'}}><Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                303%</Typography>
            </Stack>
            </Card>
            
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Likes</Typography>
                <Button> <TwitterIcon/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>507</Typography>
            <Typography variant='h9'  sx={{color:'green'}}><Button> <ArrowDropUpIcon sx={{color:'green'}}/></Button> 
                553%</Typography>
            </Stack>
            </Card>
         
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Likes</Typography>
                <Button> <YouTubeIcon sx={{color:'red'}}/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>107</Typography>
            <Typography variant='h9'  sx={{color:'red'}}><Button> <ArrowDropDownIcon sx={{color:'red'}}/></Button> 
                19%</Typography>
            </Stack>
            </Card>
          
          </Item>
        </Grid>
        <Grid item xs={3}>
          <Item>
          <Card sx={{width:200, textAlign: 'center',}}>

          <Stack direction="row" justifyContent="space-between">
                <Typography>Total View</Typography>
                <Button> <YouTubeIcon sx={{color:'red'}}/></Button>
            </Stack>
            <Stack direction="row" justifyContent="space-between">
            <Typography variant='h3'>1407</Typography>
            <Typography variant='h9'  sx={{color:'red'}}><Button> <ArrowDropDownIcon sx={{color:'red'}}/></Button> 
                12%</Typography>
            </Stack>
            </Card>
         
          </Item>
        </Grid>
       
      </Grid>
    </Box>
   
    </>
    
  );
}