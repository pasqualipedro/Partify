import React from 'react';
import { Component } from 'react';
/* import './EmoCard.css'; */
/* import styled from 'styled-components'; */


class EmoCard extends Component {

    state = {

    };


    render() {
        return (
            <>
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"></link>
                <div class="wrapper">
                    <div class="carousel owl-carousel">
                        <div class=" card card-1">Aa</div>
                        <div class=" card card-2">Bb</div>
                        <div class=" card card-3">Cc</div>
                        <div class=" card card-4">Dd</div>
                        <div class=" card card-5">Ee</div>
                        <div class=" card card-6">Ff</div>
                    </div>
                </div>

                {/* <script>
                    $(".carousel").owlcarousel({
                    margin: 10,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 2000;
                    autoplayHoverPause: true,
                    responsive: {
                        0:{
                        items: 1,
                    nav: false
                        },

                    600:{
                        items: 2,
                    nav: false
                          },

                    1000:{
                        items: 3,
                    nav: false
                          },
                    } 
                    });

                </script>

                <script src="index.js"></script> */}

            </>
        )
    }
};

export default EmoCard;

