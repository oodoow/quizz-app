import React, { useState, useEffect } from "react";

import arrayShuffle from "array-shuffle";
import { Button } from "react-bootstrap";
import styled from "styled-components";

import Question from "../components/question";
import callBackend from "../helpers";


const CounterWrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
`;

export default function Game() {
    const [questions, setQuestions] = useState([]);
    const [pickedQuestions, setPickedQuestions] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [rightAnswers, setRightAnswers] = useState(0);
    const [loading, setLoading] = useState(true)
    const numberOfQuestions = 5;

    // get questions from db
    useEffect(()=> {
        // TODO: use react-query, see notes from previous app
        const loadQuestions = async () => {
            try {
                const questionsFromDb = await callBackend({method: 'GET', url: 'http://localhost:3000/questions'});
                if (questionsFromDb) {
                    setQuestions(questionsFromDb);
                }
            } catch(err) {
                alert(err)
            }
        }
        loadQuestions();
    }, [])

    useEffect(()=> {
        setPickedQuestions(getQuestions());
        setLoading(false);
    }, [questions])


    const getQuestions = () => {
        const shuffledQuestions = arrayShuffle(questions).slice(0, numberOfQuestions);
        
        return shuffledQuestions.map((x)=>{
            // re-format questions from db to better format for shuffle
            const answers = [
                {text:x.correctAnswer, correct:true},
                {text:x.badAnswer1, correct:false},
                {text:x.badAnswer2, correct:false},
                {text:x.badAnswer3, correct:false},
            ];
            return {
                question: x.question,
                answers: arrayShuffle(answers)
            }
        });
    }

    // for starting a new quiz
    const newQuiz = () => {
        setPickedQuestions(getQuestions());
        setSelectedIndex(0);
        setRightAnswers(0);
    }

    const answerClicked = (index) => {
        const question = pickedQuestions[selectedIndex];
        if (question?.answers[index]?.correct) {
            setRightAnswers(rightAnswers+1);
        } else {
            // incorrect answer warning todo
            // alert('error in answerClicked');
        }
        setSelectedIndex(selectedIndex+1)
    }

    return (
        <div className="main">
            {
                loading 
                    ? <p>Loading questions...</p>
                    : 
                    <>
                        <div>
                            {selectedIndex < numberOfQuestions
                                ? 
                                <>
                                    <CounterWrapper>Question {selectedIndex + 1} / {numberOfQuestions}</CounterWrapper>
                                    <Question
                                        individualQuestion={pickedQuestions[selectedIndex] || {}}
                                        answerClicked={answerClicked} />
                                </>
                                : <div className="center"> 
                                    <h1 className="mb-4">Quiz finished - correct answers {rightAnswers}/{numberOfQuestions}</h1>
                                    <Button 
                                        onClick={newQuiz}
                                        variant="success">
                                        Play again!
                                    </Button>
                                </div>
                            }
                        </div>
                    </>
            }
        </div>
    );
}