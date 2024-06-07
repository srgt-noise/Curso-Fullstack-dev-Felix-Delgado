import React, { useState } from 'react';

function MoodRecommender() {
    const initialQuestionState = {
        videoUrl: '',
        currentQuestion: 1
    };

    const [questionState, setQuestionState] = useState(initialQuestionState);

    const moodToVideo = {
        happy: "https://www.youtube.com/embed/GKdl-GCsNJ0",
        uplift: "https://www.youtube.com/embed/bCHvzQnL8kQ",
        stressed: "https://www.youtube.com/embed/rBrd_3VMC3c",
        blue: "https://www.youtube.com/embed/4VxdufqB9zg",
        angry: "https://www.youtube.com/embed/XNjKN0_wx3s"
    };

    const handleRecommendation = () => {
        if (questionState.currentQuestion < 3) {
            setQuestionState({
                ...questionState,
                currentQuestion: questionState.currentQuestion + 1
            });
        } else {
            const selectedMood = document.getElementById(`question${questionState.currentQuestion}`).value;
            setQuestionState({
                ...questionState,
                videoUrl: moodToVideo[selectedMood]
            });
        }
    };

    const handleStartOver = () => {
        setQuestionState(initialQuestionState);
    };

    return (
        <section style={{ display: 'flex', justifyContent: 'center', marginTop: '3em' }}>
            <div className="flex flex-col rounded-lg shadow-lg bg-white p-8 max-w-md mx-auto">
                <h1 className="text-2xl font-bold mb-4">How are you feeling today?</h1>
                {questionState.videoUrl ? (
                    <div>
                        <h2 className="text-lg font-semibold mt-6">Recommended Video:</h2>
                        <iframe id="videoFrame" width="400" height="200" src={questionState.videoUrl} frameBorder={0} allowFullScreen className="mt-4"></iframe>
                        <button onClick={handleStartOver} className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" style={{ display: 'block', margin: '0 auto', marginTop: '2em' }}>Start Over</button>
                    </div>
                ) : (
                    <div>
                        {questionState.currentQuestion === 1 && (
                            <div>
                                <p className="mb-2">Question 1: How was your day?</p>
                                <select id="question1" className="mb-4">
                                    <option value="happy">Great</option>
                                    <option value="stressed">Stressful</option>
                                    <option value="blue">Not so good</option>
                                </select>
                            </div>
                        )}
                        {questionState.currentQuestion === 2 && (
                            <div>
                                <p className="mb-2">Question 2: How much energy do you have?</p>
                                <select id="question2" className="mb-4">
                                    <option value="uplift">Energetic</option>
                                    <option value="blue">Tired</option>
                                    <option value="angry">Frustrated</option>
                                </select>
                            </div>
                        )}
                        {questionState.currentQuestion === 3 && (
                            <div>
                                <p className="mb-2">Question 3: What do you need right now?</p>
                                <select id="question3" className="mb-4">
                                    <option value="happy">Something fun</option>
                                    <option value="uplift">Inspiration</option>
                                    <option value="stressed">Relaxation</option>
                                    <option value="blue">Comfort</option>
                                    <option value="angry">A way to let off steam</option>
                                </select>
                            </div>
                        )}

                        <button onClick={handleRecommendation} className="bg-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded" style={{ display: 'block', margin: '0 auto', marginTop: '2em' }}>
                            {questionState.currentQuestion < 3 ? 'Next' : 'Recommend Video'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}

export default MoodRecommender;