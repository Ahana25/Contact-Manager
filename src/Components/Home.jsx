import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core'
import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import { useHistory } from 'react-router';


// let useStyles= makeStyles(
//     {
//         btn:
//         {
//             margin:"320px",
//             marginRight:"390px",
//             padding:"20px"
//         },
//     }
// )
const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
function Home() {
    const classes = useStyles();
    // let history= useHistory();
    // let classes= useStyles();

    // let changePath=()=>
    // {
    //     history.push('./add')
    // }
    return (
        <div>
         <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
        className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}
 

export default Home
