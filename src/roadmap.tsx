import React, {FunctionComponent, useEffect, useState} from 'react';
import './roadmap.css';
import IconImage from "./assets/solana_road_map_icon.jpg";
import "./assets/font/kghappy.ttf";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {useParallax} from "react-scroll-parallax";
import { Fade, Slide } from '@material-ui/core';
import ReactDOM from 'react-dom';

const GridRoadmap: FunctionComponent = ()=>{

    const [show, setShow] = useState(false);

    useEffect(() => {
        // setShow(true);
    }, []);

    const title = useParallax<HTMLDivElement>({
        translateY: [100, 0, 'easeOutQuint'],
    });

    const progress25 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const progress50 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const progress75 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const progress100 = useParallax<HTMLDivElement>({
        translateX: [0, 25, 'easeOutQuint'],
    });

    const content25 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    const content50 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    const content75 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    const content100 = useParallax<HTMLDivElement>({
        translateX: [70, 10, 'easeOutQuint'],
    });

    return (
        <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="gridRoadmapContainer">
            <div className="background"></div>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className="gridRoadmapTitle">
                <div ref={title.ref}>
                    Roadmap
                </div>
            </Grid>
            <Grid container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  className="gridRoadmapDetail">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={5}>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress25.ref}>
                            25%
                        </Grid>
                        <Grid item xs={8}  className="roadmapContent" ref={content25.ref}>
                            They are always looking for
                            anything of value. However, they are unwilling to part with their fortune. They love to stack more and more wealth and their worst nightmare is to imagine a stranger stealing it. Blockchain offers them the greatest opportunity of their life, because it is an endless mine.
                        </Grid>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress50.ref}>
                            50%
                        </Grid>
                        <Grid item xs={8}  className="roadmapContent" ref={content50.ref}>
                            The dwarves never had an easy
                            life. From the beginning, they had to live in hidden places to protect themselves from the constant threats of the outside. Since then, they have been suspicious of anyone who tries to approach them. That’s why their new life in the ethereum blockchain suits them perfectly.
                        </Grid>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress75.ref}>
                            75%
                        </Grid>
                        <Grid item xs={8}  className="roadmapContent" ref={content75.ref}>
                            their arrival into the crypto world has not changed their taste for luxury. As long as they are stuck in the blockchain, they might as well make some cash ! They mine crypto like crazy and don’t stop until late in the day. One thing is for sure: with them, you’ll understand what it means to win big. Join them now!
                        </Grid>
                        <Grid item xs={4} className="roadmapPercentage" ref={progress100.ref}>
                            100%
                        </Grid>
                        <Grid item xs={8} className="roadmapContent" ref={content100.ref}>
                            Continuously fighting against those who are looking for trouble, our dwarves 3.0 are formidable fighters. They stand up for their tribe and will never let their brothers down. They traded in their pickaxes and mine wagons for the latests computers and graphics cards that would make Satoshi Nakamoto blush !
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    );
}

export default GridRoadmap;