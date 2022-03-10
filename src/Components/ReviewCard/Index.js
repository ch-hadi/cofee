import React from 'react';
// import google from 'google';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { MapComponent } from '../MapCompo/Map';
import { useNavigate } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 'auto',
    margin:'10px 10px 20px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



export default function CofeeReviewCard(props) {

    const navigate = useNavigate();
    const classes = useStyles();

    // console.log('review card props ....',props)


  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
       
        title={props.name}
        subheader={props.time}
        // action={
        //     <IconButton aria-label="settings" onClick={()=>navigate(`map-location/${props}`)} >
        //       <LocationOnIcon />
        //     </IconButton>
        //   }
      />
      
      <CardMedia
        className={classes.media}
        image={props.imageUrl}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
         {props.reviewText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        
      </CardActions>
     
    </Card>
  );
}