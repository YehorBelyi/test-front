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

    return (
        <div classNameName="form-container">
                    <form className="modal-form">
          <div className="modal-field">
            <label for="user-name" className="modal-label">Name</label>
            <div className="modal-input-wrapper">
              <input
                type="text"
                name="user-name"
                id="user-name"
                className="modal-input"
              />
              <svg width="18" height="24" className="modal-icons">
                <use href="./images/icons.svg#icon-person"></use>
              </svg>
            </div>
          </div>

          <div className="modal-field">
            <label for="user-tel" className="modal-label">Phone</label>
            <div className="modal-input-wrapper">
              <input
                type="tel"
                name="user-tel"
                id="user-tel"
                className="modal-input"
              />
              <svg width="18" height="24" className="modal-icons">
                <use href="./images/icons.svg#icon-email"></use>
              </svg>
            </div>
          </div>

          <div className="modal-field">
            <label for="user-email" className="modal-label">Email</label>
            <div className="modal-input-wrapper">
              <input
                type="email"
                name="user-email"
                id="user-email"
                className="modal-input"
              />
              <svg width="18" height="24" className="modal-icons">
                <use href="./images/icons.svg#icon-phone"></use>
              </svg>
            </div>
          </div>

          <div className="modal-field modal-comment">
            <label for="user-comment" className="modal-label">Comment</label>
            <textarea
              name="user-comment"
              id="user-comment"
              className="modal-textarea"
              placeholder="Text input"
            ></textarea>
          </div>

          <div className="modal-field modal-check-mb">
            <input
              type="checkbox"
              name="user-privacy"
              id="user-privacy"
              className="modal-check visually-hidden"
              value="true"
            />
            <label for="user-privacy" className="modal-check-text"
              ><span className="modal-check-span">
                <svg className="modal-check-icon" width="10" height="8">
                  <use href="./images/icons.svg#icon-check"></use>
                </svg> </span
              >I accept the terms and conditions of the
              <a href="" className="modal-link"> Privacy Policy</a></label
            >
          </div>

          <button type="submit" className="modal-btn">Send</button>
        </form> </div> );
}

export default FormComponent;