import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import SimpleDialog from '../components/SimpleDialog';
import SimpleDialogDemo from '../components/SimpleDialog';


export default function PostCard({id, title, body, set="set4" }) {
  
  const [open, setOpen] = React.useState(false)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`https://robohash.org/${title}?size=50x50&set=${set}`}
          alt={title}
          
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" >
            {title}
            
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
       {/* <Button size="small" color="primary" key={id} onClick={() => {SimpleDialog}} >  */}
       {/* <Button key={id} onClick={() => setOpen(true)}>Share</Button> */}
       {/* <SimpleDialog id = {id}/> */}
       <SimpleDialogDemo id = {id} title ={title} body={body}/>
       
       {/* <StudentList key={student.id} id={student.id} name={student.name} location={student.location}/> */}
      </CardActions>
    </Card>
  );
}
