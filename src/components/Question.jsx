import React, {useState, useEffect} from "react";
import {useFormContext} from "react-hook-form";
import css from "./question.module.scss";

function Question({title, name, error, isSend}) {
    const [textTrigger, setTextTrigger] = useState(false);
    const [selected, setSelected] = useState(null);
    const {register, setValue, watch} = useFormContext();

    const handleInputChange = (index) => {
        setSelected(index);
    };

    useEffect(() => {
        if (isSend) {
            setSelected(null);
        }
    }, [isSend]);

    useEffect(() => {
        if (title.includes("Чтобы вы хотели изменить") || title.includes("Чего вам не хватает")) {
            setTextTrigger(true);
        }
    }, [title]);

    const textInput = (
        <input
            type="text"
            name={name}
            defaultValue={watch(name)}
            {...register(name, { required: false })}
            className={css.textInput}
            placeholder="Введите текст..."
            onChange={(e) => setValue(name, e.target.value)}
        />
    );

    const radioInput = Array.from({length: 6}, (_, i) => {
        return (
            <React.Fragment key={i}>
                <label
                    className={`${css.label} ${i === 0 ? `${css.labelFirst}` : ''} ${selected === i ? `${css.checked}` : ''}`}
                >
                    {i}
                    <input
                        type="radio"
                        name={name}
                        {...register(name, { required: true })}
                        value={i}
                        onChange={(e) => {
                            handleInputChange(i);
                            setValue(name, e.target.value);
                        }}
                    />
                </label>
            </React.Fragment>
        );
    });

    return (
        <div>
            <p className={css.title}>{title}</p>
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
