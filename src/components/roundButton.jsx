import styled from "styled-components";
import { breakpoints } from "./breakpoints";

const RoundButton = styled.button`
    display: flex;
    flex-shrink: 0;
    position: relative;
    width: 50px;
    height: 50px;
    background-color: var(--lineGreen);
    border-radius: 50%;
    border: 1px solid transparent; /* Ensures no unwanted borders */
    transition: all 0.2s linear;

    &:hover {
        background-color: oklch(90.91% 0.023 126.24);
    }

    &:focus {
        outline: none;
    }

    &:focus-visible {
        border-color: var(--focusBorderColor); /* Optional: customize focus border color */
    }

    @media (max-width: ${breakpoints.tablet}) {
        width: 40px;
        height: 40px;
    }
`;

const Minus = styled.div`
    width: 13px;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    background-color: var(--mainGreen);
    transform: translate(-50%, -50%);

    &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1;
        width: 100%;
        height: 100%;
        background-color: var(--mainGreen);
        transform: translate(-50%, -50%) rotate(90deg);
    }

    ${({ $hidden }) =>
        $hidden &&
        `
        &::after {
            display: none;
        }
    `}

    @media (max-width: ${breakpoints.tablet}) {
        width: 11px;
    }
`;

export default function RoundButtonElem({ onClick, minusHidden }) {
    return (
        <RoundButton type="button" onClick={onClick}>
            <Minus $hidden={minusHidden} />
        </RoundButton>
    );
}
