import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import css from './question.module.scss'

function Question({ title, name, register, error }) {
    const radioInputs = Array.from({ length: 6 }, (_, i) => {
        const id = uuidv4();
        return (
            <React.Fragment key={i}>
                <input
                    type="radio"
                    id={id}
                    {...register(name, { required: true })}
                    value={`${i}`}
                    className={i === 0 ? "element__first" : "element"}
                />
                <label htmlFor={id}>{i}</label>
            </React.Fragment>
        );
    });

    return (
        <div>
            <p>{title}</p>
            <div>
                {radioInputs}
            </div>
            <p className={`${css.validationError} ${error ? css.visible : ''}`}>Это обязательное поле</p>
        </div>
    );
}

export default Question;
