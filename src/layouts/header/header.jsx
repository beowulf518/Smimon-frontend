import React, { useEffect } from 'react';
import {Grid, Button, Box, Typography} from '@mui/material';
import styled from 'styled-components'

import LoginIcon from '@mui/icons-material/Login';
import LoupeIcon from '@mui/icons-material/Loupe';


import Cloud_Text from '../../components/Text/Cloud_Text/Cloud_Text.js'
import Arrow3 from '../../components/arrow/arrow3.js'


import glass_face1 from '../../images/glass_face1.png'
import arrow1 from '../../images/arrow1.png';
import arrow2 from '../../images/arrow2.png';
import arrow3 from '../../images/arrow3.png'
import arrow4 from '../../images/arrow4.png'
import arrow5 from '../../images/arrow5.png'

import rect1 from '../../images/rect1.png';
import rect2 from '../../images/rect2.png';
import rect3 from '../../images/rect3.png';
import rect4 from '../../images/rect4.png';
import rect5 from '../../images/rect5.png';
import dog_arrow from '../../images/dog_arrow.png'
import graph1 from '../../images/graph1.png'
import spark1 from '../../images/spark1.png'
import spark2 from '../../images/spark2.png'
import card7 from '../../images/card7.png' 
import presale1 from '../../images/presale1.png' 
import presale2 from '../../images/presale2.png'

import emoticon1 from '../../images/emoticon1.png'
import emoticon2 from '../../images/emoticon2.png'
import emoticon3 from '../../images/emoticon3.png'
import glass_face2 from '../../images/glass_face2.png'

import Cloud_man1 from '../../images/cloud_man1.png'
import Cloud_man2 from '../../images/cloud_man2.png'
import Cloud_man3 from '../../images/cloud_man3.png'
import Cloud1 from '../../images/cloud1.png'
import Cloud2 from '../../images/cloud2.png'
import earth1 from '../../images/earth1.png'
import alert1 from '../../images/alert1.png'
import two_men from '../../images/two_men.png'
import light1 from '../../images/light1.png'
import letter1 from '../../images/letter1.png'
import star_man1 from '../../images/star_man1.png'
import NFT from '../../images/NFT.png'
import Join_Club from '../../images/Join_Club.png'
import astronaut from '../../images/astronaut.png'
import three_men from '../../images/three_men.png'


function Header() {
    const text1_1 = 'The old system is based on market control and greed. Sminem will not allow this by releasing the bulls.';
    const text1_2 = 'The old system is based on market control and greed. Sminem will not allow this by releasing the bulls.';

    const text2_1 = 'The only way to stop elite financial mafia from garnishing the wages of underpaid employers is to escape the old system. '
    const text2_2 = 'Sminem wants to save the markets from depression and bring optimism and euphoria for all investors. '

    const text3_1 = 'Sminem uses cryptocurrency to embolden his own strength.'
    const text3_2 = 'While extremely powerful when exposed to the full flux of a decentralized system, this can be seen during the beginning of the Bogdanoff Twins arc, where he accumulated most of his crypto-powers during the activation of CRAB-17'
    return (
        <Box sx={{
            position: 'relative',
            width: '1920.5px',
            height: 9100,
            background:"#0E0034"
          }} >
            <Box sx={{
                  position: 'relative',
                  width: '242.09px',
                  height: '86.29px',
                  left: '30px',
                  top: '32px',
              }}>
                  <Box sx={{
                      position: 'absolute',
                      width: '63px',
                      height: '78.29px',
                      top: '40px',
                      left: '30px',

                      
                  }}>
                    <img src={glass_face1} />
                  </Box>
                  <Box sx={{
                      position: 'absolute',
                      width: '178.87px',
                      height: '52.34px',
                      top: '50px',
                      left: '90px',
                      //transform: 'rotate(-4deg)',
                  }}>
                    <img src={arrow1}></img>
                  </Box>
                  <Box sx={{
                      position: 'absolute',
                      width: '127px',
                      height: '41px',
                      left: '93px',
                      top: '38.86px',
                      
                      fontFamily: `'Euclid Circular A', sans-serif`,
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '32px',
                      lineHeight: '41px',
                      /* identical to box height */
                      
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      
                      /* wgite */
                      
                      color: '#FFFFFF',
                      
                      transform: 'rotate(-4deg)',
                  }}>
                    SMINEM
                  </Box>

              </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '0px',
                
                position: 'absolute',
                width: '583px',
                height: '18px',
                left: 'calc(50% - 583px/2 - 339.5px)',
                top: '45px',
                
            }}>
                <HText width='40' left='0' order='0'>Home</HText>
                <HText width='98' left='83' order='1'>About Sminem</HText>
                <HText width='150' left='224' order='2'>Fair Distribution Model</HText>
                <HText width='49' left='417' order='3'>Presale</HText>
                <HText width='74' left='509' order='4'>Contact us</HText>
            </Box>
            <HButton >Minting starts soon </HButton>
            <Box sx={{
                position: 'absolute',
                left: '860px',
                top: '110px',
            }}>
                <img src={astronaut}></img>
            </Box>
            <RText_WG sx={{
                height: '122px',
                left: '109.45px',
                top: '199.3px',
                fontSize: '96px',
                lineHeight: '122px',
                display:'flex',
            }}>
                <Box >Welcome to </Box>
            <Box sx={{
                color:'#5DCB29'
            }}>{'\u00a0'}Sminem</Box>
            </RText_WG>
            <RText_WG sx={{
                height: '213px',
                left: '252.47px',
                top: '270.1px',
                fontSize: '168px',
                lineHeight: '213px',
            }}>Space Club
            </RText_WG>

            <Box sx={{
                position: 'absolute',
                height: '121px',
                width: '186px',
                left: '192px',
                top: '450px',
                
            }}>
                <img src={arrow2}></img>
            </Box>
            <Part1_ctext>
                <Part1_upbox>
                    <Part1_ub1>
                        <Part1_ub1t>    
                        Minting starts soon 
                        </Part1_ub1t>
                        
                    </Part1_ub1>

                    <Part1_ub2>
                        <Part1_ub2t>
                            Token info
                            </Part1_ub2t>
                        </Part1_ub2>
                </Part1_upbox>
                <Part1_ctext1 >Sminem is glorified by the whole crypto community Associated with the euphoric feeling of reaching financial freedom through disconnection from parasitical centralized mafia ponzi.
                </Part1_ctext1>
            </Part1_ctext>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '135.5px',
                left: '-0.5px',
                top: '753px',
                
                
            }}>
                <img src={rect1}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '624.5px',
                left: '-0.5px',
                top: '886px',
                
            }}>
                <img src={rect2}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '135.5px',
                left: '-0.5px',
                top: '1509px',
                
            }}>
                <img src={rect3}></img>
            </Box>
            <RText_WG sx={{
                height: '128px',
                left: '195px',
                top: '945.69px',
                fontSize: '80px',
                lineHeight: '128px',
                display: 'flex'
            }}>
                <Box>Who is </Box>
                <Box color='#5DCB29'>{'\u00a0'}Sminem?</Box>
            </RText_WG>
            <Box sx={{
                position: 'absolute',
                width: '423.49px',
                height: '110.13px',
                left: '791px',
                top: '1010px',
                
            }}>
                <img src={dog_arrow}></img>
            </Box>
            <Part1_text>
            Sminem is the saviour of the market by
            slaying all the bears. He is the hero
            we don't deserve but {'\u00a0'}
            <span style={{color:'#5DCB29'}}>definitely need</span>.
            </Part1_text>
            <Part1_stext>
            You can now become a bull yourself and save the market by rocking a Sminem avatar everywhere.
            </Part1_stext>
            <Box sx={{
                position:'absolute',
                width: ' 164.92px',
                height:'140.86px',
                top:'1734.6px',
                left:'545.72px'
            }}>
                <img src={graph1}></img>
            </Box>
            <RText_WG sx={{
                height: '152px',
                left: '300.48px',
                top: '1804.5px',
                fontSize: '120px',
                lineHeight: '152px',
            }}>FAIR DISTRIBUTION
            </RText_WG>
            <RText_WG sx={{
                height: '152px',
                left: '1122.45px',
                top: '1895.7px',
                fontSize: '120px',
                lineHeight: '152px',
            }}>MODEL
            </RText_WG>

            <Box sx={{
                position:'absolute',
                width: ' 156.83px',
                height:'115.01px',
                top:'2024.78px',
                left:'588.64px',
                opacity:'45%',
            }}>
                <img src={spark1}></img>
            </Box>
            <Box sx={{
                position:'absolute',
                width: ' 231.62px',
                height:'169.86px',
                top:'1960px',
                left:'687.14px'
            }}>
                <img src={spark2}></img>
            </Box>
            <Box sx={{
                position:'absolute',
                width: '624px',
                height:'322px',
                top:'2104.7px',
                left:'455.54px'
            }}>
                <img src={card7}></img>
            </Box>
            <Card_leftText>
                <Box display='flex'>                <Box color="#ffffff">The</Box><Box color="#5DCB29">{'\u00a0'}Sminem</Box></Box>

                <Box color="#5DCB29">   collection </Box>
            </Card_leftText>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '8px',
                
                position: 'absolute',
                width: '337px',
                height: '99px',
                left: '191.78px',
                top: '2275.92px',
                
                /* Bg */
                
                background:'#0E0034',
                
            }}><Part2_Text2>consists of</Part2_Text2></Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '8px',
                
                position: 'absolute',
                width: '760px',
                height: '99px',
                left: '191.78px',
                top: '2360.92px',
                
                /* Bg */
                
                background: '#0E0034',
            }}>
                <Part2_Text3 display='flex'><Box color="#ffffff" >abloom</Box> <Box color="#FFCB00">{'\u00a0'}young gentlemen</Box></Part2_Text3>
            </Box>
            <Part2_Text4>generated by a network of retail investors, known for taming the bear market and releasing the bulls.</Part2_Text4>
            <Box sx={{
                position: 'absolute',
                width: '977px',
                height: '1032px',
                left: '926px',
                top: '1838.5px',
            }}>
                <img src={three_men}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '135.5px',
                left: '-0.5px',
                top: '2787.5px',
                
                
            }}>
                <img src={rect1}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '624.5px',
                left: '-0.5px',
                top: '2923px',
                
            }}>
                <img src={rect2}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '135.5px',
                left: '-0.5px',
                top: '3545.5px',
                
            }}>
                <img src={rect3}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '110px',
                height: '38.66px',
                top: '3070px',
                left: '185px',
            }}>
                <img src={arrow3}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1315px',
                height: '166px',
                left: '327px',
                top: '3050px',
                
                fontFamily: `'Euclid Circular A',sans-serif`,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '64px',
                lineHeight: '83px',
                /* or 130% */
                
                color: '#FFFFFF',
            }}>
                Greedy bankers are trying to <span style={{color:'#5DCB29'}}>leave every
                small trader </span><span style={{color:'#ff0000'}}>bleeding</span> <span style={{color:'#5DCB29'}}>and dry</span>,
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1088px',
                height: '166px',
                left: '551px',
                top: '3239px',
                
                fontFamily: `'Euclid Circular A', sans-serif`,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '64px',
                lineHeight: '83px',
                /* or 130% */
                
                textAlign: 'right',
                
                
                color: '#FFFFFF'
                
            }}>
                SMINEM is here to <span style={{color:'#FFCB00'}}>stop this tyranny </span>and counter with justice.
            </Box>
            <Box sx={{
                position:'absolute',
                width: ' 94px',
                height:'94px',
                top:'3030.21px',
                left:'1500px'
            }}>
                <img src={emoticon1}></img>
            </Box>
            {/* <Part3_Text1>
                presale
            </Part3_Text1> */}
            <Box sx={{
                position:'absolute',
                width: ' 1464px',
                height:'446px',
                top:'3685.21px',
                left:'189.57px'
            }}>
                <img src={presale2}></img>
            </Box>
            <Box sx={{
                position:'absolute',
                width: ' 1464px',
                height:'446px',
                top:'3675.21px',
                left:'178.17px'
            }}>
                <img src={presale1}></img>
            </Box>
            <RText_WG sx={{
                height: '152px',
                left: '460.61px',
                top: '3920.52px',
                fontSize: '120px',
                lineHeight: '152px',
            }}>PRESALE</RText_WG>
            {/* <Box sx={{
                position: 'absolute',
                width: '145.94px',
                height: '145.94px',
                top: '3950.85px',
                left: '1015.95px',
                
            }}>
                <img src={emoticon2}></img>
            </Box> */}
            <Box sx={{
                position: 'absolute',
                width: '456px',
                height: '396px',
                top: '3805.17px',
                left: '1098.12px',
                
            }}>
                <img src={glass_face2}></img>
            </Box>

            <Box sx={{
                position: 'absolute',
                width: '544.15px',
                height: '417.58px',
                top: '3905.17px',
                left: '1015.95px',
                
            }}>
                <img src={emoticon3}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '110px',
                height: '38.66px',
                top: '4350.34px',
                left: '272px',
                
            }}>
                <img src={arrow3}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1291px',
                height: '166px',
                left: '416px',
                top: '4330px',
                
                fontFamily: `'Euclid Circular A', sans-serif`,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '64px',
                lineHeight: '83px',

                
                textAlign: 'right',
                
                
                color: '#FFFFFF'
                
            }}>
                Make sure you secure your 
                Sminem NFT by participating the presale
            </Box>

            <Cloud sx={{top:4900.73, left:0}}>
                <img src={Cloud1}></img>
            </Cloud>
            <Cloudman1 sx={{ top:4650, left:283}}>
                <img src={Cloud_man1}></img>
            </Cloudman1>

            <Cloud_Text pos_x={'864px'} pos_y={'4700px'} text1={text1_1} text2={text1_2}/>
            <Cloud_Text pos_x={'390px'} pos_y={'5260px'} text1={text2_1} text2={text2_2}/>
            <Cloud_Text pos_x={'864px'} pos_y={'5900px'} text1={text3_1} text2={text3_2}/>


            <Cloud_ sx={{top:5450, left:1123.7}}>
                <img src={Cloud2} width="780px"></img>
            </Cloud_>
            <Cloudman1 sx={{ top:5220, left:1102}}>
                <img src={Cloud_man2} ></img>
            </Cloudman1>


            <Cloud sx={{top:6100, left:0}}>
                <img src={Cloud1}></img>
            </Cloud>
            <Cloudman1 sx={{ top:5790, left:283}}>
                <img src={Cloud_man3}></img>
            </Cloudman1>


            <Box sx={{
                position: 'absolute',
                height: '236px',
                width: '236px',
                left: '180px',
                top: '7000px',
                borderRadius:' 0px',
                
            }}>
                <img src={earth1}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                height: '292px',
                width: '452px',
                left: '526px',
                top: '6822px',
                borderRadius:' 0px',

            }}>
                <img src={alert1}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                height: '337px',
                width: '381px',
                left: '238px',
                top: '7022px',
                borderRadius:' 0px',

            }}>
                <img src={two_men}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                height: '113px',
                width: '113px',
                left: '933.56px',
                top: '7000px',
                borderRadius:' 0px',
            }}>
                <img src={light1}></img>
            </Box>

            <Box sx={{
                position: 'absolute',
                height: '442px',
                width: '1627.76px',
                left: '174.36px',
                top: '6667.8px',
                borderRadius:' 0px',
            }}>
                <img src={letter1}></img>
            </Box>

            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '135.5px',
                left: '-0.5px',
                top: '7228px',
                
                
            }}>
                <img src={rect1}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '941.5px',
                left: '-0.5px',
                top: '7362px',
                
            }}>
                <img src={rect5}></img>
            </Box>
            
            {/* <Arrow3 top={'7497px'} img={arrow3}></Arrow3> */}
            <Box sx={{
                position: 'absolute',
                width: '1920px',
                height: '448px',
                left: '0px',
                top: '7855px',
            }}>
                <img src={NFT}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1102px',
                height: '135.457px',
                left: '412px',
                top: '7390px',
                
            }}>
                <img src={star_man1}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '136.5px',
                left: '-0.5px',
                top: '8168px',
                
            }}>
                <img src={rect4}></img>
            </Box>
            <Box sx={{
                position: 'absolute',
                width: '1920.5px',
                height: '488px',
                left: '0px',
                top: '8400px',
            }}>
                <img src={Join_Club}></img>
            </Box>
            
            <Box sx={{
                  position: 'relative',
                  width: '242.09px',
                  height: '86.29px',
                  left: '30px',
                  top: '8850px',
              }}>
                  <Box sx={{
                      position: 'absolute',
                      width: '63px',
                      height: '78.29px',
                      top: '40px',
                      left: '30px',

                      
                  }}>
                    <img src={glass_face1} />
                  </Box>
                  <Box sx={{
                      position: 'absolute',
                      width: '178.87px',
                      height: '52.34px',
                      top: '59.48px',
                      left: '90px',
                      //transform: 'rotate(-4deg)',
                  }}>
                    <img src={arrow1}></img>
                  </Box>
                  <Box sx={{
                      position: 'absolute',
                      width: '127px',
                      height: '41px',
                      left: '93px',
                      top: '40.86px',
                      
                      fontFamily: `'Euclid Circular A', sans-serif`,
                      fontStyle: 'normal',
                      fontWeight: 'bold',
                      fontSize: '32px',
                      lineHeight: '41px',
                      /* identical to box height */
                      
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      
                      /* wgite */
                      
                      color: '#FFFFFF',
                      
                      transform: 'rotate(-4deg)',
                  }}>
                    SMINEM
                  </Box>

              </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'flex-start',
                padding: '0px',
                
                position: 'absolute',
                width: '583px',
                height: '18px',
                left: 'calc(50% - 583px/2 - 339.5px)',
                top: '9010px',
                
            }}>
                <HText width='40' left='0' order='0'>Home</HText>
                <HText width='98' left='83' order='1'>About Sminem</HText>
                <HText width='150' left='224' order='2'>Fair Distribution Model</HText>
                <HText width='49' left='417' order='3'>Presale</HText>
                <HText width='74' left='509' order='4'>Contact us</HText>
            </Box>



        </Box>
    );
}

const Cloud =styled(Box)
`
position: absolute;
width: 922.48px;
height: 306.54px
`


const Cloud_ =styled(Box)
`
position: absolute;
width: 622.48px;
height: 306.54px
`

const Cloudman1 = styled(Box)
`
position: absolute;
width: 513.26px;
height: 486.52px;


`


const Cloudman2 = styled(Box)
`
position: absolute;
width: 513.26px;
height: 458.82px;

`

const Cloudtext = styled(Box)
{

}


const Part3_Text1 = styled(Typography)
`
position: absolute;
width: 1464px;
height: 446px;
left: 178.57px;
top: 3501.21px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 352px;
line-height: 446px;
letter-spacing: -0.02em;
text-transform: uppercase;
font-feature-settings: 'dnom' on, 'numr' on, 'sinf' on, 'ss01' on, 'salt' on;

/* Bg */

color: #0E0034;

/* Accent2 */

border: 1px solid #5DCB29;
transform: rotate(-4deg);
`

const Part2_Text4 = styled(Box)
`
position: absolute;
width: 682.55px;
height: 105px;
left: 368.45px;
top: 2470.12px;

font-family: 'Euclid Circular A',sans-serif;
font-style: normal;
font-weight: normal;
font-size: 32px;
line-height: 110%;
color: #E7DEFF;
`

const Part2_Text3 = styled(Box)
`
position: static;

left: 8px;
top: 8px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 83px;
/* identical to box height, or 130% */


color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`

const Part2_Text2 = styled(Box)
`
position: static;
left: 8px;
top: 8px;

font-family: 'Euclid Circular A',sans-serif;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 83px;
/* identical to box height, or 130% */


color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`

const Card_leftText = styled(Box)
`
position: absolute;
width: 366px;
height: 166px;
left: 80px;
top: 2116.92px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 64px;
line-height: 83px;
/* or 130% */

text-align: right;

`

const Part1_stext = styled(Box)
`
position: absolute;
width: 864px;
height: 86px;
left: 416px;
top: 1371px;

font-family: 'Euclid Circular A',sans-serif;
font-style: normal;
font-weight: normal;
font-size: 36px;
line-height: 43px;
/* or 43px */


/* text color */

color: #E7DEFF;
`


const Part1_text = styled(Box)
`
position: absolute;
width: 1200px;
height: 249px;
left: 416px;
top: 1092px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 64px;
line-height: 83px;
/* or 130% */


/* wgite */

color: #FFFFFF;
`

const Part1_ub2t = styled(Box)
`
position: static;

left: 24px;
top: 6px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.08em;
text-transform: uppercase;

/* text color */

color: #E7DEFF;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`

const Part1_ub1t = styled(Box)
`
position: static;

left: 24px;
top: 6px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.08em;
text-transform: uppercase;

/* Bg */

color: #0E0034;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 0px 10px;
`

const Part1_ub1 = styled(Box)
`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 6px 24px;

position: static;

left: 0px;
top: 0px;

/* Style */

background: #FFCB00;

/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
`

const Part1_ub2 = styled(Box)
`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 6px 24px;

position: static;

height: 32px;
left: 281px;
top: 0px;

/* Bg */

background: #0E0034;
/* text color */

border: 2px solid #E7DEFF;
box-sizing: border-box;

/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 0px 24px;
`


const Part1_upbox = styled(Box)
`
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 0px;

position: static;
width: 438px;
height: 32px;
left: 0px;
top: 171px;


/* Inside Auto Layout */

flex: none;
order: 1;
flex-grow: 0;
margin: 21px 0px;
`

const Part1_ctext1 = styled(Box)
`
position: static;
width: 638px;
height: 150px;
left: 0px;
top: 0px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 24px;
line-height: 30px;

color: #FFFFFF;


/* Inside Auto Layout */

flex: none;
order: 0;
flex-grow: 0;
margin: 21px 0px;
`

const Part1_ctext = styled(Box)
`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 0px;

position: absolute;
width: 638px;
height: 203px;
left: 416px;
top: 516.5px;

`

const HText = styled(Box)`
position: static;
height: 18px;
top: 0px;

font-family: 'Euclid Circular A', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 18px;
/* identical to box height */


/* text color */

color: #E7DEFF;


/* Inside Auto Layout */

flex: none;
flex-grow: 0;
margin: 0px 43px;
`

const HButton = styled(Box)`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 16px;

position: absolute;
width: 178px;
height: 24px;
right: 44.85px;
top: 35px;

/* Style */

background: #FFCB00;
font-family: 'Euclid Circular A',sans-serif;
font-style: normal;
font-weight: bold;
font-size: 13px;
line-height: 16px;
letter-spacing: -0.02em;
text-transform: uppercase;

/* Bg */

color: #0E0034;
`

const RText_WG = styled(Box)
`
position: absolute;
font-family: 'Euclid Circular A',sans-serif;
font-style: normal;
font-weight: bold;


/* identical to box height */

text-align: right;
letter-spacing: -0.02em;
text-transform: uppercase;
font-feature-settings: 'dnom' on, 'numr' on, 'sinf' on, 'ss01' on, 'salt' on;

/* wgite */

color: #FFFFFF;

transform: rotate(-4deg);
`

export { Header };