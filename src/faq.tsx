import React, {FunctionComponent, useEffect} from 'react';
import './faq.css';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import {ParallaxBanner, useParallax} from "react-scroll-parallax";
import FAQImg from "./assets/faq_bg.png";
import IconImage from "./assets/solana_school_icon.png";
import Background from "./assets/solana_school_front_v3_temp_4.png";


const Faq: FunctionComponent = ()=>{

    const [open_faq_1, set_open_faq_1] = React.useState(false);
    const [open_faq_2, set_open_faq_2] = React.useState(false);
    const [open_faq_3, set_open_faq_3] = React.useState(false);

    const handle_click_faq = (index: string) => {
        switch (index) {
            case "1":
                close_all_faq();
                set_open_faq_1(!open_faq_1);
                break;
            case "2":
                close_all_faq();
                set_open_faq_2(!open_faq_2);
                break;
            case "3":
                close_all_faq();
                set_open_faq_3(!open_faq_3);
                break;
        }
    };

    const close_all_faq = () => {
        set_open_faq_1(false);
        set_open_faq_2(false);
        set_open_faq_3(false);
    }

    return (
        <Grid container
                direction="column"
                justifyContent="center"
                alignItems="center"
                className="faqContainer">
            <div>
                <span  className="bgImg">
                <ParallaxBanner
                    layers={[
                        {
                            image: FAQImg,
                            speed: -10,
                            rotate: [0, 70],
                            scale: [1.2,1.2],
                            // opacity: [0.9, 1],
                            // translateY: [25, -5]
                            easing: 'easeInCubic',
                        },
                    ]}
                    style={{ aspectRatio: '2 / 1' }}
                />
            </span>
            </div>
            <Grid direction="column" className="title">
                FAQ
            </Grid>
            <Grid direction="column" className="faqDetail">
                <List
                    sx={{width: '100%', bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={()=>handle_click_faq("1")}>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText>
                            How many Solana Chan are available?
                        </ListItemText>
                        {open_faq_1 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open_faq_1} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText>
                                    The first chapter regroups 4499 high definition 3D dwarves NFT, stored as ERC-721 Tokens on the Ethereum Blockchain. All hosted in IFPS.
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={()=>handle_click_faq("2")}>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText>
                            What Solana Gakuen Aim For?
                        </ListItemText>
                        {open_faq_2 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open_faq_2} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText>
                                    This is a challenge that the whole team has set. Unlike many NFT projects, we wanted to create an original story that would make the « Rich Dwarves Tribe » collection meaningful. We envisioned a long-term strategy that will allow the collection to grow in value in time. As dwarves, let’s win big together
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>

                    <ListItemButton onClick={()=>handle_click_faq("3")}>
                        <ListItemIcon>
                            <ContactSupportIcon />
                        </ListItemIcon>
                        <ListItemText>
                            How can we own our Solana Chan?
                        </ListItemText>
                        {open_faq_3 ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open_faq_3} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText>
                                    This is a challenge that the whole team has set. Unlike many NFT projects, we wanted to create an original story that would make the « Rich Dwarves Tribe » collection meaningful. We envisioned a long-term strategy that will allow the collection to grow in value in time. As dwarves, let’s win big together
                                </ListItemText>
                            </ListItemButton>
                        </List>
                    </Collapse>
                </List>
            </Grid>
        </Grid>
    );
}

export default Faq;