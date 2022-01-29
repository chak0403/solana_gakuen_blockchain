import {AppBar, Button, Card, CardActions, CardContent, Grid, IconButton, Toolbar, Typography} from '@material-ui/core';
import React, {FunctionComponent, useEffect} from 'react';
import './grid-card.css';
import Cards from './assets/solana_student_card_x6_2.png';
import Bar from './assets/solana_card_background.png';
import {ParallaxBanner, useParallax} from "react-scroll-parallax";

const GridCard: FunctionComponent = ()=>{

    useEffect(() => {

    });
    const card = useParallax<HTMLDivElement>({
        translateX: [-15, 15, 'easeOutQuint'],
        translateY: [25, -75, 'easeOutQuint'],
        scale: [1.4,1.4]
    });
    const bar = useParallax<HTMLDivElement>({
        translateX: [5, -5, 'easeOutQuint'],
        translateY: [-20, -50, 'easeOutQuint'],
        scale: [1,1]
    });

    return (
        <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="gridCardContainer">
            <Grid >
                <div className="cardsContainer">
                    <div  ref={card.ref} >
                        <img src={Cards} alt={"cards"} className="cards" />
                    </div>

                </div>
                <div className="barContainer">
                    <div  ref={bar.ref} >
                        <img src={Bar} alt={"bar"} className="bar" />
                    </div>
                </div>
            </Grid>
        </Grid>
    );
}

export default GridCard;