import React, {useState} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {questionsList} from "../vendor/questionsList";
import {allFields} from "../vendor/allFields";
import css from './review.module.scss';
import Question from "../components/Question";


function Review() {

    const formMethods = useForm();
    const {register, handleSubmit, formState: {errors}, reset} = formMethods;
    const [isSend, setIsSend] = useState(false);

    console.log('новое х4')

    const onSubmit = async (data) => {
        const result = {};
        const fields = allFields;
        fields.forEach((field) => {
            if (data[field] !== undefined) {
                result[field] = data[field];
            }
        });

        try {
            const response = await fetch("https://script.google.com/macros/s/AKfycbyr_3ynHQd_9XcrCyhIjkGZGUONIfN8T9_UMwP9_dyLoDKeh1DtCwsjGOXSnHF1WkFJqQ/exec", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "https://rjd-opros.vercel.app",
                },
                body: JSON.stringify(result),
            });

            if (response.ok) {
                setIsSend(true);
                setTimeout(() => {
                    setIsSend(false);
                }, 5000);
                reset();
            } else {
                // Обработка ошибки
            }
        } catch (error) {
            // Обработка ошибки
        }
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
                <FormProvider {...formMethods}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className={css.formItem}>
                            <h2 className={css.formTitle}>Как вам новый офис?</h2>
                            {
                                questionsList[1].map((question, index) => (
                                    <Question
                                        key={index}
                                        title={`${index + 1}. ${question}`}
                                        name={question}
                                        error={errors[question]}
                                        isSend={isSend}
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
                                        error={errors[question]}
                                        isSend={isSend}
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
                                        error={errors[question]}
                                        isSend={isSend}
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
                                        error={errors[question]}
                                        isSend={isSend}
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
                                        error={errors[question]}
                                        isSend={isSend}
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
                                        error={errors[question]}
                                        isSend={isSend}
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
                        <p className={`${css.successMessage} ${isSend && css.successMessageVisible}`}>Спасибо за
                            пройденный
                            опрос!</p>
                    </form>
                </FormProvider>
            </div>
        </main>
    );
}

export default Review;