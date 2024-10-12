import styled from "styled-components"
import { breakpoints } from "./breakpoints"

const SectionItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
gap: 2em;
padding: 50px 0;

@media (max-width: ${breakpoints.tablet}){
    padding:40px 0;
}

@media (max-width: ${breakpoints.mobile}){
    flex-direction: column;
    padding: 30px 0;
}
@media (max-width: ${breakpoints.smallMobile}){
    padding: 15px 0;
}
`

const ContainerItem = styled.div`
    width: min(80vw, 1150px);
    max-height: fit-content;
    margin: 0 auto;
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;

    @media (max-width: 1080px){
        width: 100%;
    }
`

export function Section ({children, ...props}){
   return(
    <SectionItem {...props}>
{children}
    </SectionItem>
   )
}

export function Container({children, ...props}){
    return(
        <ContainerItem {...props}>
            {children}
        </ContainerItem>
    )
}