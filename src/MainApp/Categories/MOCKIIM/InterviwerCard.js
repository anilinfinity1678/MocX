import React from "react";

const InterviewerCard = ({ interviewer }) => {
    const { name, experience, specialty } = interviewer;

    return (
        <div className="interviewer-card">
            <h3>{name}</h3>
            <p>Years of Experience: {experience}</p>
            <p>Specialty: {specialty}</p>
        </div>
    );
};

export default InterviewerCard;
