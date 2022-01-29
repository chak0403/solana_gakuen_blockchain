import React, {FunctionComponent} from 'react';
import './school-team.css';
import Grid from '@mui/material/Grid';
import Cards from "./assets/staff_id_temp.png";
import {useParallax} from "react-scroll-parallax";

const SchoolTeam: FunctionComponent = ()=>{

    const parallax = useParallax<HTMLDivElement>({
        rotateY: [0, 720],
    });
    return (
        <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="schoolTeamContainer"
        ref={parallax.ref}>

            <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  className="schoolTeamTitle"
                  >
                <Grid item xs={12}>
                    SCHOOL TEAM
                    <br/>
                    学校の同僚
                </Grid>
            </Grid>
            <Grid container
                  spacing={2}
                  alignItems="center"
                  justifyContent="center"
                  className="schoolTeamDetail"
            >
                <Grid item xs={4} className="member">
                    <Grid item xs={12} className="gridcard">
                        <img src={Cards} alt={"cards"} className="cards" />
                    </Grid>
                    <Grid item xs={12}>
                        Andrew Cenderma
                    </Grid>
                    <Grid item xs={12} className="title">
                        CTO & Co-founder
                    </Grid>
                </Grid>
                <Grid item xs={4} className="member">
                    <Grid item xs={12} className="gridcard">
                        <img src={Cards} alt={"cards"} className="cards" />
                    </Grid>
                    <Grid item xs={12}>
                        Minamoto Shizuka
                    </Grid>
                    <Grid item xs={12} className="title">
                        CEO & Co-founder
                    </Grid>
                </Grid>
                <Grid item xs={4} className="member">
                    <Grid item xs={12} className="gridcard">
                        <img src={Cards} alt={"cards"} className="cards" />
                    </Grid>
                    <Grid item xs={12}>
                        Aragaki Yui
                    </Grid>
                    <Grid item xs={12} className="title">
                        Design Director & Co-founder
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default SchoolTeam;