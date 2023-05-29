import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Progress from './Progress';

// style 
import styles from "@/styles/style.module.css";



export default function MediaControlCard({item}) {
  console.log(item);

  const theme = useTheme();

  return (
    <Card  sx={{ display: 'flex', padding: "10px", minWidth:"30%", minHeight: "180px" , borderRadius: "20px"}}>
      <Box width={200}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography variant="h5"  className={styles.web_logo_text} component="div" >
            {item.title}
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div">
            Total : {item?.progressBar?.total}
          </Typography>
          <Typography variant="body1" color="text.secondary" component="div">
            Fail : {item?.progressBar?.fail}
          </Typography>
        </CardContent>
      </Box>
      <Box sx={{ display: 'flex', justifyContent:"center", width: 130 }}>
      <Progress value={item.progressBar?.solve}/>
      </Box>
    </Card>
  );
}