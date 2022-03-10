import React, { useState } from 'react'
import CofeeReviewCard from '../../Components/ReviewCard/Index'
import { Grid } from '@material-ui/core'
import venue_reviews from '../../Data/vanue-reviews/venue_reviews.json'
// import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { alpha, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({

    root: {

        flexGrow: 1,

    },

    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },

    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    inputRoot: {
        color: 'inherit',
        
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
function ReviewScreen() {

    const classes = useStyles();
    const data = venue_reviews.reviews
    const [item , setItem] = useState('')
    const [Found , setFound] = useState([]);



    const handleChange = (e) => {

        if(e.key === 'Enter'){
    
           const c=data.filter((i)=>{
    
                if((i.user.name.toLowerCase().includes(item.toLowerCase()))){
    
                    return i
                }
    
           })
           setFound(c)
        }
        
        }
    //   console.log(Found)

    return (
        <div className='review-screen-Container'>
            <AppBar position="static">
                <Toolbar>

                    <Typography className={classes.title} variant="h6" noWrap>
                        Search Review
                    </Typography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder="Search Review.."
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            onChange={(e)=>{setItem(e.target.value)}}
                            onKeyDown={handleChange}
                        />
                    </div>
                </Toolbar>
            </AppBar>

            <Grid container >



            {
                   item == ''?  data.map((i) => {

                    return <Grid item xs={6} lg={3} md={3} sm={3} key={i.user.name} className={classes.maxWidth}>
                       <CofeeReviewCard name={i.user.name} imageUrl={i.user.image_url} reviewText={i.text} time={i.time_created} />
                    </Grid>

                }) : Found.map((i) => {

                    return <Grid item xs={6} lg={3} md={3} sm={3} key={i.user.name} className={classes.maxWidth}>
                       <CofeeReviewCard name={i.user.name} imageUrl={i.user.image_url} reviewText={i.text} time={i.time_created} />
                    </Grid>

                })
                }

            </Grid>
        </div>
    )
}

export default ReviewScreen