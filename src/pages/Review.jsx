import React, {useState, useEffect} from "react";
import {useForm, FormProvider} from "react-hook-form";
import {questionsList} from "../vendor/questionsList";
import {allFields} from "../vendor/allFields";
import css from './review.module.scss';
import Question from "../components/Question";
import { generateAuthUrl } from "../auth";


function Review() {

    const formMethods = useForm();
    const {register, handleSubmit, formState: {errors}, reset} = formMethods;
    const [isSend, setIsSend] = useState(false);

    useEffect(() => {
        const authUrl = generateAuthUrl();
        console.log("Авторизуйтесь на следующей странице:", authUrl);
    }, []);

    const onSubmit = async (data) => {
        const result = {};
        const fields = allFields;
        fields.forEach((field) => {
            if (data[field] !== undefined) {
                result[field] = data[field];
            }
        });

        try {
            const csvData = Object.values(result).join(","); // Преобразование данных в формат CSV

            const spreadsheetId = '127Gxe82GUUTUsJ2VQMJPKe1jgr6Qb2JJZNy6p7nq7aE';
            const sheetname = 'Results';
            const accessToken = 'YOUR_ACCESS_TOKEN'; // Полученный OAuth 2.0 токен доступа

            const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetname}?valueInputOption=RAW`;

            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "text/csv",
                    "Authorization": `Bearer ${accessToken}`,
                    "Referer": "http://localhost:3000"
                },
                body: csvData,
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


    /*const onSubmit = async (data) => {
        const result = {};
        const fields = allFields;
        fields.forEach((field) => {
            if (data[field] !== undefined) {
                result[field] = data[field];
            }
        });

        try {
            const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/127Gxe82GUUTUsJ2VQMJPKe1jgr6Qb2JJZNy6p7nq7aE/values/%D0%A0%D0%B5%D0%B7%D1%83%D0%BB%D1%8C%D1%82%D0%B0%D1%82%D1%8B?key=AIzaSyCYVOhUd2S7CN0zKVonNEIzi39DJ9KInyQ", {
                method: "POST",
                mode: 'cors',
                headers: {
                    "Content-Type": "application/json",
                    "Origin": "*",
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
    };*/

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