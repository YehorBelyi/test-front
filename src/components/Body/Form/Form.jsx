import axios from "axios";
import { useState } from "react";
import "./Form.css"

function FormComponent() {

  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const sendForm = async () => {
    await axios.post('http://127.0.0.1:8000/', {
      first_name: name,
      last_name: lastname,
      phone: phone,
      email: email,
      comment: comments
    }).then(function (response) {
      console.log(response);
    });
    setName("");
    setLastname("");
    setPhone("");
    setEmail("");
    setComments("");
  }

  return (
    <div className="form-container">
      <h2>Бажаєте залишити відгук? Просимо вас!</h2>
      <form className="modal-form" method="POST" action={sendForm}>
        <div className="modal-field">
          <label htmlFor="user-name" className="modal-label">Name</label>
          <div className="modal-input-wrapper">
            <input
              type="text"
              name="user-name"
              id="user-name"
              className="modal-input"
              value={name} onChange={(event) => setName(event.target.value)}
            />
            <svg width="18" height="24" className="modal-icons">
              <use href="./images/icons.svg#icon-person"></use>
            </svg>
          </div>
        </div>

        <div className="modal-field">
          <label htmlFor="user-name" className="modal-label">Lastname</label>
          <div className="modal-input-wrapper">
            <input
              type="text"
              name="user-name"
              id="user-name"
              className="modal-input"
              value={lastname} onChange={(event) => setLastname(event.target.value)}
            />
            <svg width="18" height="24" className="modal-icons">
              <use href="./images/icons.svg#icon-person"></use>
            </svg>
          </div>
        </div>

        <div className="modal-field">
          <label htmlFor="user-tel" className="modal-label">Phone</label>
          <div className="modal-input-wrapper">
            <input
              type="tel"
              name="user-tel"
              id="user-tel"
              className="modal-input"
              value={phone} onChange={(event) => setPhone(event.target.value)}
            />
            <svg width="18" height="24" className="modal-icons">
              <use href="./images/icons.svg#icon-email"></use>
            </svg>
          </div>
        </div>

        <div className="modal-field">
          <label htmlFor="user-email" className="modal-label">Email</label>
          <div className="modal-input-wrapper">
            <input
              type="email"
              name="user-email"
              id="user-email"
              className="modal-input"
              value={email} onChange={(event) => setEmail(event.target.value)}
            />
            <svg width="18" height="24" className="modal-icons">
              <use href="./images/icons.svg#icon-phone"></use>
            </svg>
          </div>
        </div>

        <div className="modal-field modal-comment">
          <label htmlFor="user-comment" className="modal-label">Comment</label>
          <textarea
            name="user-comment"
            id="user-comment"
            className="modal-textarea"
            placeholder="Text input"
            value={comments} onChange={(event) => setComments(event.target.value)}
          ></textarea>
        </div>

        <button type="submit" className="modal-btn">Send</button>
      </form> </div>)
}


export default FormComponent;