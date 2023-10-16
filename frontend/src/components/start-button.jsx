import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';
import { useRouter } from 'next/router';

const StartButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

export default function StartButton() {
    const router = useRouter();

    const handleClick = () => {
        router.push('/game');
    };
    return (
        <StartButtonWrapper>
            <Button 
                variant="info"
                onClick={handleClick} >
                Start
            </Button>
        </StartButtonWrapper>
    );
}