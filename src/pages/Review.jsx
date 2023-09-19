import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {questionsList} from "../vendor/questionsList";
import css from './review.module.scss';
import Question from "../components/Question";
import {allFields} from "../vendor/allFields";

function Review() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm();
    const [isSend, setIsSend] = useState(false);

    const onSubmit = (data) => {
        const result = {};

        const fields = allFields;

        fields.forEach((field) => {
            if (data[field] !== undefined) {
                result[field] = data[field];
            }
        });
        alert(JSON.stringify(result));
        setIsSend(true);
        reset();
    };

    return (
        <main>
            <div className="container">
                <div className={css.head}>
                    <img className={css.headImg} src={require('../images/logo.svg').default} alt="Логотип"/>
                    <div>
                        <h1 className={css.headTitle}>Как вам новый офис?</h1>
                        <p className={css.headDescription}>Коллеги, выделите, пожалуйста, 5 минут на
                            прохождение <span>анонимного</span> опроса. При
                            ответах используйте
                            шкалу от 1 до 5, где 1 — «абсолютно не устраивает», а 5 —«все отлично». Ставьте 0, если вы
                            затрудняетесь ответить. На каждый вопрос вы также можете оставить комментарий в свободной
                            форме.
                        </p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={css.formItem}>
                        <h2 className={css.formTitle}>Как вам новый офис?</h2>
                        {
                            questionsList[1].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[question]}
                                />
                            ))
                        }
                        <p className={css.formCommentText}>Оставьте ваш комментарий</p>
                        <input type="text"
                               name="Как вам новый офис? - Комментарий" {...register("Как вам новый офис? - Комментарий")}
                               placeholder='Введите текст...'/>
                    </div>
                    <div className={css.formItem}>
                        <h2 className={css.formTitle}>Обустройство офиса</h2>
                        {
                            questionsList[2].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[question]}
                                />
                            ))
                        }
                        <p className={css.formCommentText}>Оставьте ваш комментарий</p>
                        <input type="text"
                               name="Обустройство офиса - Комментарий" {...register("Обустройство офиса - Комментарий")}
                               placeholder='Введите текст...'/>
                    </div>
                    <div className={css.formItem}>
                        <h2 className={css.formTitle}>Клининг</h2>
                        {
                            questionsList[3].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[question]}
                                />
                            ))
                        }
                        <p className={css.formCommentText}>Оставьте ваш комментарий</p>
                        <input type="text" name="Клининг - Комментарий" {...register("Клининг - Комментарий")}
                               placeholder='Введите текст...'/>
                    </div>
                    <div className={css.formItem}>
                        <h2 className={css.formTitle}>Расходные материалы</h2>
                        {
                            questionsList[4].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[question]}
                                />
                            ))
                        }
                        <p className={css.formCommentText}>Оставьте ваш комментарий</p>
                        <input type="text"
                               name="Расходные материалы - Комментарий" {...register("Расходные материалы - Комментарий")}
                               placeholder='Введите текст...'/>
                    </div>
                    <div className={css.formItem}>
                        <h2 className={css.formTitle}>Служба охраны</h2>
                        {
                            questionsList[5].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[question]}
                                />
                            ))
                        }
                        <p className={css.formCommentText}>Оставьте ваш комментарий</p>
                        <input type="text"
                               name="Служба охраны - Комментарий" {...register("Служба охраны - Комментарий")}
                               placeholder='Введите текст...'/>
                    </div>
                    <div className={css.formItem}>
                        <h2 className={css.formTitle}>Инженерное оборудование и техническое обслуживание</h2>
                        {
                            questionsList[6].map((question, index) => (
                                <Question
                                    key={index}
                                    title={`${index + 1}. ${question}`}
                                    name={question}
                                    register={register}
                                    error={errors[question]}
                                />
                            ))
                        }
                        <p className={css.formCommentText}>Оставьте ваш комментарий</p>
                        <input type="text"
                               name="Инженерное оборудование и техническое обслуживание - Комментарий" {...register("Инженерное оборудование и техническое обслуживание - Комментарий")}
                               placeholder='Введите текст...'/>
                    </div>
                    <div className={css.formItem}>
                        <h2 className={`${css.formTitle} ${css.footerTitle}`}>Оставьте ваши пожелания</h2>
                        <input type="text"
                               name="Пожелания" {...register("Пожелания")}
                               placeholder='Введите текст...'/>
                    </div>
                    <button className={css.button} type="submit">Отправить</button>
                    <p className={`${css.successMessage} ${isSend && css.successMessageVisible}`}>Спасибо за пройденный
                        опрос!</p>
                </form>
            </div>
        </main>
    );
}

export default Review;