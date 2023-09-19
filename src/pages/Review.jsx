import React from "react";
import {useForm} from "react-hook-form";
import Question from "../components/Question";
import {questionsList} from "../vendor/questionsList";

function Review() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();

    const onSubmit = (data) => {
        console.log(data);
        reset();
    };

    return (
        <main>
            <div className="container">
                <div>
                    <img src={require('../images/logo.svg').default} alt="Логотип"/>
                    <div>
                        <h1>Как вам новый офис?</h1>
                        <p>Коллеги, выделите, пожалуйста, 5 минут на прохождение <span>анонимного</span> опроса. При
                            ответах используйте
                            шкалу от 1 до 5, где 1 — «абсолютно не устраивает», а 5 —«все отлично». Ставьте 0, если вы
                            затрудняетесь ответить. На каждый вопрос вы также можете оставить комментарий в свободной
                            форме.
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <h2>Как вам новый офис?</h2>
                        {
                            questionsList[1].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[`q${index + 1}`]}
                                />
                            ))
                        }
                        <p>Оставьте ваш комментарий</p>
                        <input type="text" name="[Как вам новый офис?] Комментарий" {...register("comment")} />
                        <button type="submit">Отправить</button>
                    </div>
                </form>
            </div>
        </main>
    );
}

export default Review;