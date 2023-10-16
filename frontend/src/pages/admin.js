import React from "react";
import styled from "styled-components";
import Button from 'react-bootstrap/Button';

import callBackend from "../helpers";

const UploadButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

const uploadQuestion = async () => {

    const questions = await callBackend({method: 'POST'})
    alert(JSON.stringify(questions));
  }

export default function StartButton() {
  return (
    // TODO form with upload
    <UploadButtonWrapper>
        <Button 
            variant="success"
            onClick={uploadQuestion} >
            Upload
        </Button>
    </UploadButtonWrapper>
  );
}