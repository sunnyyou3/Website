import React from "react";
import Box from '@mui/material/Box';
import { Button } from "@mui/material";

function Home() {
    return(
        <Box sx={{ display: { xs: 'none', sm: 'block' }, mt: -3 }} >
            <h1>hOME PAGGGGGGGGGGE</h1>
            <Button onClick={() => window.location='https://ttb3ar.github.io/website/'} variant="contained"> Click me</Button>
        </Box>
    )
}

export default Home;