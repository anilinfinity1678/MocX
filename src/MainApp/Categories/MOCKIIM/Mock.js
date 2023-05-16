import React, { useEffect, useState } from "react";
import { db } from "../../../Login/Firebase";
import { collection, getDocs } from "firebase/firestore";

const Mock = () => {
    const [interviewers, setInterviewers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const collectionRef = collection(db, "int");
                const querySnapshot = await getDocs(collectionRef);
                const interviewersData = querySnapshot.docs.map((doc) =>
                    doc.data()
                );
                setInterviewers(interviewersData);
            } catch (error) {
                console.log("Error fetching interviewers:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="Mock-main">
            <div className="interviewers">
                {interviewers.map((interviewer) => (
                    <div className="interviewer" key={interviewer.id}>
                        <div className="interviewer-img">
                            <h1>Image</h1>
                        </div>
                        <div className="interviewer-details">
                            <h3>{interviewer.name}</h3>
                            <h2>{interviewer.profession}</h2>
                            <p>{interviewer.experience}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mock;
