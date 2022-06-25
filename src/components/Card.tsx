import styled from 'styled-components'
import bgImage from '../assets/img/illustration-hero.svg'
import IconMusic from '../assets/img/icon-music.svg'
import { colors } from '../helpers/colors'
import { breakpoint } from '../helpers/breakpoints'

export const Card = () => {
    return (
        <Container>
            <Image src={bgImage} alt='Illustration Hero' />
            <Title>Order Summary</Title>
            <Text>
                You can now listen to millions of songs, audiobooks, and podcasts on any device
                anywhere you like!
            </Text>
            <PriceContainer>
                <LeftPrice>
                    <img src={IconMusic} alt='Icon Music' />
                    <PlanContainer>
                        <PlanText>Annual Plan</PlanText>
                        <Price>$59.99/year</Price>
                    </PlanContainer>
                </LeftPrice>
                <Link href='/'>Change</Link>
            </PriceContainer>
            <Button>Proceed to Payment</Button>
            <CancelButton href='/'>Cancel Order</CancelButton>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 90%;
    border-radius: 1em;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0 0.2em 1em #3829e067;
    max-width: 440px;
`

const Image = styled.img`
    width: 100%;
`

const Title = styled.h1`
    color: ${colors.dark_blue};
    font-size: 1.3em;
    font-weight: 900;
    margin-bottom: 0;
    margin-top: 1.6em;
    @media screen and (min-width: ${breakpoint.desktop}) {
        font-size: 2em;
    }
`

const Text = styled.p`
    color: ${colors.desaturated_blue};
    text-align: center;
    margin-bottom: 2em;
    width: 80%;
    line-height: 1.5em;
`

const LeftPrice = styled.div`
    display: flex;
    align-items: center;
`

const PlanContainer = styled.div`
    margin-left: 1em;
`

const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 1em;
    padding-right: 1em;
    width: 80%;
    border-radius: 1em;
    background-color: ${colors.very_pale_blue};
    height: 5em;
`

const PlanText = styled.p`
    color: ${colors.dark_blue};
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 0;
`

const Price = styled.span`
    color: ${colors.desaturated_blue};
`

const Link = styled.a`
    color: ${colors.bright_blue};
    font-weight: 700;
    font-size: 0.8em;
    &:hover {
        text-decoration: none;
        color: rgba(56, 41, 224, 0.6);
    }
`

const Button = styled.button`
    width: 80%;
    height: 3em;
    border: 0;
    border-radius: 0.8em;
    margin-top: 2em;
    margin-bottom: 1.5em;
    color: #fff;
    background-color: ${colors.bright_blue};
    font-family: 'Red Hat Display';
    font-weight: 900;
    font-size: 1em;
    box-shadow: 0 0.5em 2em #3829e067;
    cursor: pointer;
    &:hover {
        background-color: rgba(56, 41, 224, 0.6);
    }
`

const CancelButton = styled.a`
    color: ${colors.desaturated_blue};
    font-weight: 900;
    text-decoration: none;
    margin-bottom: 2em;
    &:hover {
        color: ${colors.dark_blue};
    }
`
