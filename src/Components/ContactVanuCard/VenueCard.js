import React , {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Call, Home } from "@material-ui/icons";
// import Box from "@material-ui/core/material/Box";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";


const useStyles = makeStyles({
  root: {
    width: "40%",
    marginLeft:20
  },
  categories: {
    fontSize: 16,
    color: "#d95145",
    fontWeight: "bold",
  },
  select:{
      width:'200px'
  },
  categoriContainer:{
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between'
  },
  open:{
      display:'flex',
      justifyContent:'space-between',
      alignItems:'center'
  },
  status:{
     display:'flex',
     alignItems:'center',
     fontSize:15
  },
  btn:{
    width: '20px',
    height: '25px',
    fontSize: '10px',
  }

});

export default function VenueCard(props) {
  const classes = useStyles();
  const [age, setAge] = useState("");
  const [Alies, setAlies] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  const handleChangeAlies = (event) => {
    setAlies(event.target.value);
  };

  const tit = (props.categories.map(i=>i.alias));
  console.log(tit)

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="240"
          image={props.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent className="card-content">
          <Typography gutterBottom variant="h5" component="h2" className={classes.open}>
            {props.name}
            
            {
               props.open == false? <div className={classes.status}>Status:<h5 style={{margin:0 , padding:0, color:'green' , fontSize:13}}>Open</h5></div> :<div className={classes.status}>Status:<h5 style={{margin:0 , padding:0, color:'red' , fontSize:13}}>Closed</h5></div>
            }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.categoriContainer}>
            <span className={classes.categories}>Categories</span>

            {/* <Box sx={{ minWidth: 120 }}> */}
              <FormControl className={classes.select}>
                <InputLabel id="demo-simple-select-label">Title</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >

                    {props.categories.map(i=>{
                        return <MenuItem value={i.title}>{i.title}</MenuItem>
                    })}
                  
                 
                </Select>
              </FormControl>
              <FormControl className={classes.select}>
                <InputLabel id="demo-simple-select-label">Alies</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={Alies}
                  label="Alies"
                  onChange={handleChangeAlies}
                >
                {
                    props.categories.map(i=>
                        {return  <MenuItem value={i.alias}>{i.alias}</MenuItem>}
                        )
                }
                 
                </Select>
              </FormControl>
            {/* </Box> */}
            <Button variant="outlined" className={classes.btn}>Submit</Button>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <Call /> {props.phone}
        </Button>
        <Button size="small" color="primary">
          <Home /> {props.address.display_address[0]}{" "}
          {props.address.display_address[1]} {props.address.display_address[2]}
        </Button>
      </CardActions>
    </Card>
  );
}
