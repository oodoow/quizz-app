import React from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledButton = styled(Button)`
    margin: 1rem;
    width: 12rem;
`


export default function Question ({individualQuestion, answerClicked}) {
    console.log({individualQuestion})
    return (
        <div>
            <p>
                { individualQuestion.question }
            </p>
                { individualQuestion?.answers?.map((el,index)=>
                    <p key={index}>
                        <StyledButton 
                            onClick={()=>answerClicked(index)}
                            key={index} >
                                {el.text}
                        </StyledButton>
                    </p>
                )}
        </div>

    )
}

Question.propTypes = {
    individualQuestion: PropTypes.object,
    answerClicked: PropTypes.func,
  };