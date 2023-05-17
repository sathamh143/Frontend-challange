import Grid from '@mui/material/Grid';
import { FormControlLabel, Switch, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Followers from './Followers';
import Today from './Today'

function Item(props) {
    const { sx, ...other } = props;
    return (
      <Box {...other}/>
    );
  }
  
  export default function GridAutoColumns() {
    return (
     
      <>
        <Box >
           <Grid  container columns={{ xs: 1, sm: 8, md: 12 }}>
             <Grid xs ={10}>
                <Item >
                    <Typography  variant='h4'>Socia Media Dashboard</Typography>
                    <Typography variant='h8'>Total Followers : 23,004</Typography>
                </Item>
              </Grid>
  
             <Grid xs={2}>
                <Item >
                <FormControlLabel 
                labelPlacement="start"
                control={<Switch defaultChecked />} 
                label="Dark Mode" />
                </Item>
              </Grid>
          </Grid>
        </Box>
        <Followers/>
        <Today/>
        </>
     
    );
  }