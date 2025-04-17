import { useEffect, useState } from "react";
import PersonComponent from "./PersonCard";
import "./Specialists.css"
import axios from "axios";

function SpecialistsComponent() {

    const [userList, setUserList] = useState([]);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/');
            setUserList(response.data); 
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        getUsers();
    }, []);

    useEffect(() => {
        console.log(userList);  
    }, [userList]);

    return (
        <div className="something">
            <h1 className="center">Наша команда</h1>
            <div className="cont-row">
                {/* {userList.map((user, index) => (
                    <PersonComponent key={index} user={user} />  // Pass user data as props
                ))} */}
            </div>
        </div>
    );
}

export default SpecialistsComponent;
