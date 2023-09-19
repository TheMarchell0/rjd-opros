import React, {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';
import css from './question.module.scss';

function Question({title, name, register, error}) {

    const [textTrigger, setTextTrigger] = useState(false);
    const [parsedTitle, setParsedTitle] = useState(title);

    useEffect(() => {
        if (title.includes('{type=text}:')) {
            setParsedTitle(title.replace('{type=text}:', ''));
            setTextTrigger(true);
        }
    }, [title]);

    const textInput = (
        <input
            type="text"
            id={uuidv4()}
            {...register(name, {required: true})}
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
                    {...register(name, {required: true})}
                    value={`${i}`}
                />
                <label htmlFor={id} className={`${css.label} ${i === 0 && `${css.labelFirst}`}`}>{i}</label>
            </React.Fragment>
        );
    });

    return (
        <div>
            <p className={css.title}>{parsedTitle}</p>
            <div className={css.list}>
                {textTrigger ? textInput : radioInput}
            </div>
            {!textTrigger && <p className={`${css.validationError} ${error && css.visible}`}>Это обязательное поле</p>}
        </div>
    );
}

export default Question;
