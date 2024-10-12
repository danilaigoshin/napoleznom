import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const H1 = styled.h1`
    font-family: var(--font-family-1), sans-serif;
    font-weight: 400;
    font-size: 54px;
    line-height: 1.1em;
    margin-left: -6px;
    color: var(--blackText);
    text-align: start;
    text-wrap: balance;

    @media (max-width: ${breakpoints.tablet}){
        font-size: clamp(28px, 6.25vw, 54px);
    }
    @media (max-width: ${breakpoints.mobile}){
        margin-left: -4px;
    }
    @media (max-width: ${breakpoints.extraSmallMobile}){
        margin-left: -2px;
    }
`
const H2 = styled.h2`
    font-family: var(--font-family-2), sans-serif;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.45em;
    color: var(--mainGreen);

    @media (max-width: ${breakpoints.tablet}){
        font-size: clamp(16px, 4.5vw, 20px)
    }
`
const H3 = styled.h3`
    font-family: var(--font-family-1), sans-serif;
    font-size: 36px;
    font-weight: 400;
    line-height: 1.25em;
    color: var(--blackText);
    margin: 20px 0;

    @media (max-width: ${breakpoints.tablet}){
        font-size: clamp(22px, 4.5vw, 36px);
    }
`
const H4 = styled.h4`
    font-family: var(--font-family-2), sans-serif;
    font-size: 24px;
    font-weight: 500;
    line-height: 1.3em;
    color: var(--blackText);


    @media (max-width: ${breakpoints.tablet}){
        font-size: clamp(18px, 3.2vw, 24px);
    }

`
const H5 = styled.h5`
    font-family: var(--font-family-2), sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.4em;
    color: var(--blackText);
`
const H6 = styled.h6`
    font-family: var(--font-family-1), sans-serif;
    font-weight: 400;
    font-size: 54px;
    line-height: 1.2em;
    color: var(--blackText);
    text-align: start;

`
const P = styled.p`
    font-family: var(--font-family-2), sans-serif;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5em;
    color: var(--blackText);

    @media (max-width: ${breakpoints.tablet}){
        font-size: clamp(14px, 2.1vw, 16px)
    }
`
export function TitleH1({children, ...props}){
    return(
        <H1 {...props} >{children}</H1>
    )
}

export function TitleH2({children}){
    return(
        <H2>{children}</H2>
    )
}

export function TitleH3({children, ...props}){
    return(
        <H3 {...props}>{children}</H3>
    )
}

export function TitleH4({children, ...props}){
    return(
        <H4 {...props}>{children}</H4>
    )
}

export function TitleH5({children, ...props}){
    return(
        <H5 {...props}>{children}</H5>
    )
}

export function TitleH6({children}){
    <H6>{children}</H6>
}
export function Paragraph({children, ...props}){
    return(
        <P {...props}>{children}</P>
    )
}