import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SimpleDialog from '../components/SimpleDialog';
import SimpleDialogDemo from '../components/SimpleDialog';


export default function StudentCard({id, name, location, set = 'set1'}) {
  
  const [open, setOpen] = React.useState(false)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://robohash.org/${name}?size=50x50&set=${set}`}
          alt={name}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {name}
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {location}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       {/* <Button size="small" color="primary" key={id} onClick={() => {SimpleDialog}} >  */}
       {/* <Button key={id} onClick={() => setOpen(true)}>Share</Button> */}
       {/* <SimpleDialog id = {id}/> */}
       <SimpleDialogDemo id = {id} name ={name} location={location}/>
       
       {/* <StudentList key={student.id} id={student.id} name={student.name} location={student.location}/> */}
      </CardActions>
    </Card>
  );
}
