import React, { useEffect } from "react";
import "./Questions.css";

function QuestionsComponent() {

    useEffect(() => {
        // Додаємо слухачів подій після рендеру компоненту
        const questions = document.querySelectorAll('.faq-question');
        questions.forEach(question => {
            question.addEventListener('click', () => {
                const item = question.parentElement;
                item.classList.toggle('active');
                const arrow = question.querySelector('.arrow');
                // Зміна стрілки
                arrow.innerHTML = item.classList.contains('active') ? '&#9660;' : '&#9654;';
            });
        });

        // Очищаємо слухачі подій, коли компонент буде розмонтовуватись
        return () => {
            questions.forEach(question => {
                question.removeEventListener('click', () => { });
            });
        };
    }, []); // Порожній масив означає, що цей код виконується тільки один раз після першого рендеру

    return (
        <div className="faq-container">
            <h1 className="faq-title">FAQ</h1>

            <div className="faq-item">
                <div className="faq-question">
                    <span>Скільки коштує терапія?</span>
                    <span className="arrow">&#9654;</span>
                </div>
                <div className="faq-answer">
                    Перше індивідуальне заняття безкоштовне, у подальшому 1 сеанс коштує 500 грн.
                    Групові заняття, вебінари та тренінги завжди проводяться безкоштовно.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <span>Скільки триває сеанс?</span>
                    <span className="arrow">&#9654;</span>
                </div>
                <div className="faq-answer">
                    Тривалість сеансу індивідуальної терапії - 60 хвилин
                    Тривалість сеансу групової терапії - 80 хвилин
                    Тривалість вебінарів та тренінгів - 120 хвилин
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <span>Максимальна кількість учасників на груповій терапії?</span>
                    <span className="arrow">&#9654;</span>
                </div>
                <div className="faq-answer">
                    Від 2 до 7 учасників
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <span>Де саме проходять сеанси?</span>
                    <span className="arrow">&#9654;</span>
                </div>
                <div className="faq-answer">
                    Індивідуальні та групові терапії у google meet
                    Вебінари та тренінги проходять через нашу власну вбудовану відеосистему або офлайн
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <span>Чи ефективне онлайн-консультування?</span>
                    <span className="arrow">&#9654;</span>
                </div>
                <div className="faq-answer">
                    Так. За останнє десятиліття було проведено багато наукових досліджень, які доводять високу ефективність
                    онлайн-консультування. За багатьма показниками такий формат не поступається традиційному, а часом -
                    навіть перевершує
                    його.
                </div>
            </div>

            <div className="faq-item">
                <div className="faq-question">
                    <span>Не знайшли потрібної відповіді?</span>
                    <span className="arrow">&#9654;</span>
                </div>
                <div className="faq-answer">
                    Пишіть нам на пошту:
                    googlegmail@gmail.com
                </div>
            </div>
        </div>
    );
}

export default QuestionsComponent;
