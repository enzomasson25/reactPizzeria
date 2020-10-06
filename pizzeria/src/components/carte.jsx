import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });


/*
const Carte = ()=>(

        const classes = useStyles();
        <Card className={classes.root}>
        <CardActionArea>
        <CardMedia
            className={classes.media}
            image="/assets/img/4fromages.jpg"
            title="4 fromages"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
            4 fromages
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
            Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP
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
        
)

export default Carte;

*/






export default function Carte() {
    const classes = useStyles();

    //cela ne fonctionne pas err CORS / err 304 server
    fetch('http://localhost:3001/pizzas')
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json);
    });

    return (
        <div>
            <Card className={classes.root}>
                <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/assets/img/4fromages.jpg"
                    title="4 fromages"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    4 fromages
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Sauce tomate à l'origan ou crème fraîche légère, mozzarella, fromage de chèvre, emmental et Fourme d'Ambert AOP
                    </Typography>
                </CardContent>
                </CardActionArea>
            </Card>

            <p>lol</p>
        </div>
        

        
    )
}