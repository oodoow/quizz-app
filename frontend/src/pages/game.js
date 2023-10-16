import React, { useState, useEffect } from "react";

import callBackend from "../helpers";
import arrayShuffle from "array-shuffle";

import Question from "../components/question";

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
                                    <div>Question {selectedIndex + 1} / {numberOfQuestions}</div>
                                    <Question
                                        individualQuestion={pickedQuestions[selectedIndex] || {}}
                                        answerClicked={answerClicked} />
                                </>
                                : <div> 
                                    <p>Quiz finished - correct answers {rightAnswers}/{numberOfQuestions}</p>
                                    <button onClick={newQuiz}>New Quiz</button>
                                </div>
                            }
                        </div>
                    </>
            }
        </div>
    );
}