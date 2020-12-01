import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg,
        HeroContent, HeroH1, HeroP,
        HeroBtnWrapper, ArrowForward, ArrowRight
 } from './HeroElements'
 import {Button} from '../ButtonElement'
import Video from '../../Video/video2.mp4'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = ()=>{
        setHover(!hover)
    }
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video}
                type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Online Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive
                    N10,000 in credit towards your next payment. 
                </HeroP>
                <HeroBtnWrapper>
                    <Button to='signup'
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    primary='true'
                    dark='true'>
                        Get Started {hover? <ArrowForward/> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
