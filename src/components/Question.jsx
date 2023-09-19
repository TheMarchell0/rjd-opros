import React, {useState, useEffect} from "react";
import {v4 as uuidv4} from "uuid";
import css from "./question.module.scss";

function Question({title, name, register, error}) {
    const [textTrigger, setTextTrigger] = useState(false);
    const [parsedTitle, setParsedTitle] = useState(title);
    const [parsedName, setParsedName] = useState(name);
    const regex = /^[0-9]+\.\s+/;

    useEffect(() => {
        let parsedTitle = title;
        let parsedName = name;
        const match = parsedName.match(regex);
        if (match) {
            parsedName = parsedName.slice(match[0].length);
        }
        if (parsedTitle.includes("{type=text}:") && parsedName.includes("{type=text}:")) {
            parsedTitle = parsedTitle.replace("{type=text}:", "").trim();
            parsedName = parsedName.replace("{type=text}:", "").trim();
            setTextTrigger(true);
        }
        setParsedName(parsedName);
        setParsedTitle(parsedTitle);
    }, [title, name]);

    const textInput = (
        <input
            type="text"
            {...register(parsedName, {required: false})}
            className={css.textInput}
            placeholder="Введите текст..."
        />
    );

    const radioInput = Array.from({length: 6}, (_, i) => {
        const id = uuidv4();
        return (
            <React.Fragment key={i}>
                <input
                    type="radio"
                    id={id}
                    name={name}
                    {...register(name, {required: true})}
                    value={`${i}`}
                />
                <label
                    htmlFor={id}
                    className={`${css.label} ${i === 0 && `${css.labelFirst}`}`}
                >
                    {i}
                </label>
            </React.Fragment>
        );
    });

    return (
        <div>
            <p className={css.title}>{parsedTitle}</p>
            <div className={css.list}>{textTrigger ? textInput : radioInput}</div>
            {!textTrigger && (
                <p className={`${css.validationError} ${error && css.visible}`}>
                    Это обязательное поле
                </p>
            )}
        </div>
    );
}

export default Question;
