import { useEffect, useState } from "react";
import { Grid, Snackbar } from "@material-ui/core";
import Header from "./header";
import GridSchool from "./grid-school";
import GridCard from "./grid-card";
import Roadmap from "./roadmap";
import Faq from "./faq";
import SchoolTeam from "./school-team";
import Footer from "./footer";

export interface HomeProps {
  startDate: number;
  txTimeout: number;
}

const Home = () => {

  return (
    <Grid container>
      <Header/>
      <GridSchool/>
      <GridCard/>
      <Roadmap/>
      <Faq/>
      <SchoolTeam/>
      <Footer/>
    </Grid>
  );
};

interface AlertState {
  open: boolean;
  message: string;
  severity: "success" | "info" | "warning" | "error" | undefined;
}

export default Home;
