import { useEffect, useState } from "react";
import PersonComponent from "./PersonCard";
import "./Specialists.css"
import axios from "axios";
import first_image from "./assets/1.jpg"
import second_image from "./assets/2.jpg"
import third_image from "./assets/3.jpg"
import fourth_image from "./assets/4.jpg"

function SpecialistsComponent() {


    return (
        <div className="something">
            <h1 className="center">Наша команда</h1>
            <div className="cont-row">
                <PersonComponent photo={first_image} name="Дарина Ковальчук" desc="
Спеціалізується на роботі з тривожними розладами та посттравматичним стресовим розладом. Відомо за глибокий емпатичний підхід і використання когнітивно-поведінкової терапії."/>
                <PersonComponent photo={second_image} name="Максим Бойко" desc="
Працює з дітьми дошкільного та молодшого шкільного віку. Особливу увагу приділяє розвитку емоційного інтелекту у дітей та налагодженню зв’язку з батьками."/>
                <PersonComponent photo={third_image} name="Олеся Гриценко" desc="
Проводить індивідуальні та групові сесії. Вважає, що кожна емоція має право на існування та шукає справжні потреби за поведінкою клієнта."/>
                <PersonComponent photo={fourth_image} name="Тарас Черненко" desc="
Консультує бізнеси з питань командної взаємодії, лідерства та подолання вигорання. Часто виступає на конференціях із теми ментального здоров’я в корпоративному середовищі"/>
            </div>
        </div>
    );
}

export default SpecialistsComponent;
