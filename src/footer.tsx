import React, {FunctionComponent} from 'react';
import './footer.css';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import HomeIcon from '@mui/icons-material/Home';

const Footer: FunctionComponent = ()=>{

    const [value, setValue] = React.useState('recents');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation showLabels sx={{ width: "100%" }} value={value} onChange={handleChange} className="footer">
            <BottomNavigationAction
                label="Home"
                value="home"
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label="Twitter"
                value="twitter"
                icon={<TwitterIcon />}
            />
            <BottomNavigationAction
                label="Instagram"
                value="instagram"
                icon={<InstagramIcon />}
            />
            <BottomNavigationAction
                label="Discord"
                value="Discord"
                icon={<SportsEsportsIcon />}
            />
        </BottomNavigation>
    );
}

export default Footer;