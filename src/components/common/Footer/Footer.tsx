import React from 'react'
import { Link } from 'react-router-dom';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';
import './Footer.scss';

export const Footer: React.FC = () => {

    return (
        <Grid container className="Footer">
            <Grid item lg={2} md={3} sm={4} xs={6} className="web-credit">
                Website by <a target="_blank" rel="noreferrer" href="https://github.com/lucystevens">Lucy Stevens</a>
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="logo-credit">
                Logo by Sam Westwood
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="instagram">
                <a target="_blank" rel="noreferrer" href="https://instagram.com/closetbrewingproject">
                    <InstagramIcon/> 
                </a>
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="contact">
                <a target="_blank" rel="noreferrer" href="https://us9.list-manage.com/contact-form?u=d8d22d02a5013739b8376d3f0&form_id=4743b5beebdda103bc1accd791577b03">Contact Us</a>
            </Grid>
            <Grid item lg={2} md={3} sm={4} xs={6} className="cookie-policy">
                <Link to="/cookie-policy">Cookie policy</Link>
            </Grid>
        </Grid>
    )

}