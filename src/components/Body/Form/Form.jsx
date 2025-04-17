import axios from "axios";
import { useState } from "react";


function FormComponent() {

    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [comments, setComments] = useState("");
    const sendForm = async () => {
        await axios.post('/', {
            name: name,
            lastname: lastname,
            phone: phone,
            email: email,
            comments: comments
        }).then(function (response) {
            console.log(response);
        });
    }

    return (<form action={sendForm} method="POST">
        <input type="text" name="Name" value={name} onChange={(event) => setName(event.target.value)} placeholder="name" />
        <input type="text" name="lastname" value={lastname} onChange={(event) => setLastname(event.target.value)} placeholder="lastname" />
        <input type="text" name="phone" value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="phone" />
        <input type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="email" />
        <input type="text" name="comments" value={comments} onChange={(event) => setComments(event.target.value)} placeholder="comments"/>
        <input type="submit" value="Submit" />
    </form>  );
}

export default FormComponent;