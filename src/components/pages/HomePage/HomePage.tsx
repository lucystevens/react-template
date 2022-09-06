import React from 'react'
import { Box, Typography } from '@mui/material';
import { AlignedContent, ImageBackground } from 'components/common';
import './HomePage.scss'

export const HomePage: React.FC = () => {

    return (   
        <ImageBackground backgroundImage="images/background.png" maskOpacity={0.5}>
            <AlignedContent>
                <Box className="homepage-box align-center">
                    <Typography className="title" variant={"h1"}>
                        react-template
                    </Typography>
                    <Typography className="subtitle" variant={"h2"}>
                        A homepage for your site
                    </Typography>
                </Box>
            </AlignedContent>
        </ImageBackground>
    );

};