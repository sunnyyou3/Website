import React from "react";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Home from "../Pages/Home";
import About from "../Pages/About";
import AboutContact from "../Pages/Contact";
import Gallery from "../Pages/Gallery";
import Projects from "../Pages/Projects";
import { useState } from "react";

const navItems = ['Home', 'Gallery' ,'About', 'Contact', 'Projects'];


function Header() {
    const [page, setPage] = useState('');

    return(
        <Box id="header" style={{position:"relative", width:'auto'}} elevation={1}>
            <AppBar id="AppBar" position='sticky' color="default" sx={{ top: '0'}}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: "center" }}
                    >
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' }, ml:-30}} style={{}}>
                        {navItems.map((item) => (
                        <Button onClick={() => {setPage(item)}} key={item} sx={{ color: '000' }} variant="text">
                            <h1>{item}</h1>
                        </Button>
                        ))}
                        <IconButton>
                            <Avatar alt="Sunny" src={require("./../Images/SelfIcon.jpg")}/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {(()　=> {
                if(page === 'Home') return <Home/>
                else if(page === 'About') return <About/>
                else if(page === 'Contact') return <AboutContact/>
                else if(page === 'Gallery') return <Gallery/>
                else if(page === 'Projects') return <Projects/>
                else return <Home/>
            })()}
        </Box>
    )
}

export default Header;