import React, { useState } from "react";
import "./Questions.css";

function QuestionsComponent() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleQuestion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Скільки коштує терапія?",
            answer:
                "Перше індивідуальне заняття безкоштовне, у подальшому 1 сеанс коштує 500 грн. Групові заняття, вебінари та тренінги завжди проводяться безкоштовно.",
        },
        {
            question: "Скільки триває сеанс?",
            answer:
                "Тривалість сеансу індивідуальної терапії - 60 хвилин. Тривалість сеансу групової терапії - 80 хвилин. Тривалість вебінарів та тренінгів - 120 хвилин.",
        },
        {
            question: "Максимальна кількість учасників на груповій терапії?",
            answer: "Від 2 до 7 учасників.",
        },
        {
            question: "Де саме проходять сеанси?",
            answer:
                "Індивідуальні та групові терапії у Google Meet. Вебінари та тренінги проходять через нашу власну вбудовану відеосистему або офлайн.",
        },
        {
            question: "Чи ефективне онлайн-консультування?",
            answer:
                "Так. За останнє десятиліття було проведено багато наукових досліджень, які доводять високу ефективність онлайн-консультування. За багатьма показниками такий формат не поступається традиційному, а часом - навіть перевершує його.",
        },
        {
            question: "Не знайшли потрібної відповіді?",
            answer: "Пишіть нам на пошту: googlegmail@gmail.com.",
        },
    ];

    return (
        <div className="faq-container">
            <h1 className="faq-title">FAQ</h1>
            {faqData.map((item, index) => (
                <div
                    key={index}
                    className={`faq-item ${activeIndex === index ? "active" : ""}`}
                >
                    <div className="faq-question" onClick={() => toggleQuestion(index)}>
                        <span>{item.question}</span>
                        <span className="arrow">{activeIndex === index ? "▼" : "▶"}</span>
                    </div>
                    <div className="faq-answer">{item.answer}</div>
                </div>
            ))}
        </div>
    );
}

export default QuestionsComponent;