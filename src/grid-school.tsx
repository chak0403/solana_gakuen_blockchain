import {AppBar, Button, Fade, Grid, IconButton, Toolbar, Typography} from '@material-ui/core';
import React, {Component, FunctionComponent, useEffect} from 'react';
import './grid-school.css';
 import IconImage from "./assets/solana_school_icon.png";
import Dialog from './assets/solana_dialog2-01_v2.png';
import DialogGirlImage from './assets/solana_chan_live2d_v3.gif';
import Header from "./header";
import {ParallaxBanner, useParallax} from 'react-scroll-parallax';
import Background from './assets/solana_school_front_v3_temp_4.png';

const GridSchool: FunctionComponent = ()=>{
    const [checked, setChecked] = React.useState(true);
    const [timeout, setTimeout] = React.useState(2000);

    //
    // const handleChange = () => {
    //     setChecked((prev) => !prev);
    // };
    //
    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         handleChange();
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);
    const girl = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [-15, 0],
    });

    const dialog = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateX: [25, 0],
    });
    const logo = useParallax<HTMLDivElement>({
        easing: 'easeOutQuad',
        translateY: [-25, 0],
    });


    return (
        <Grid   container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="gridSchoolContainer">
            <span  className="background">
                <ParallaxBanner
                    layers={[
                        {
                            image: Background,
                            speed: -10,
                            scale: [1, 1.2],
                            // opacity: [0.9, 1],
                            // translateY: [25, -5]
                            easing: 'easeInCubic',
                        },
                    ]}
                    style={{ aspectRatio: '2 / 1' }}
                />
            </span>
            <Grid className="buttonlogo">
                <Grid container direction="column">
                    <div ref={logo.ref}>
                        <img src={IconImage} className="iconImage" alt={"icon image"}/>
                    </div>
                </Grid>
                <Grid container direction="column" className="fadein">
                    {/*<Fade in={checked} timeout={timeout}>*/}
                        <Button variant="contained" className="mintButton">Mint Your Solana Chan!</Button>
                    {/*</Fade>*/}
                </Grid>
                <Grid container direction="column" className="girlContainer">
                    <div ref={girl.ref}>
                        <img src={DialogGirlImage} alt={"dialogGirl"}  className="dialogGirlImage"/>
                    </div>
                </Grid>
                <Grid container direction="column" className="dialogContainer">
                    <div ref={dialog.ref}>
                    <img src={Dialog} alt={"dialog"}  className="dialogImage"/>
                    <Grid className="dialogContent">
                        <p id="dialogTitle">10,000 Unique School Girls!</p>
                        <p>
                            A new generation of dwarves
                            Their lost treasure is waiting for you !
                            For centuries our tribe, composed of 3 clans, has been living in the Sif mountain. One day, while we were casually mining gold, our brother Eitri made a wrong move with his pickaxe. Suddenly, a warp hole appeared and we landed in the Blockchain… Digitized in NFTs. But our tribe got separated, and our clans were split into 3 different locations.
                        </p>
                    </Grid>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default GridSchool;