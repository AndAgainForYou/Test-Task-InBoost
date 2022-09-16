import React, {useState} from 'react';
import './style.css';
import {registerUser} from "../Api/api";
import add from "../icons/add.png";
import close from "../icons/close.png";

interface dataInterface {
    userPhoneNumber: number;
    userName: string;
    lastName: string;
    email: string;
    workplace: string;
    lang: string;
    profession: string;
    age: string;
    birth: string;
    idRole: string;
}

const Body: React.FC = () => {
    const [newInput, setNewInput] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [language, setLanguage] = useState('');
    const [phone, setPhone] = useState('');
    const [group, setGroup] = useState('');
    const [workplace, setWorkplace] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');
    const [birth, setBirth] = useState('');

    const saveEmail = (event: { target: { value: string } }) => {
        /\S+@\S+\.\S+/.test(event.target.value) ? setValidEmail(false) : setValidEmail(true)
        setEmail(event.target.value)
    }

    const savePhone = (event: { target: { value: string } }) => {
        setPhone(event.target.value)
    }

    const sendData = async () => {
        let data: dataInterface = {
            userPhoneNumber: Number(phone),
            userName: name === '' ? 'Danyil' : name,
            lastName: lastname === '' ? 'Zborovets' : lastname,
            email: email === '' ? 'Cryptodanil@gmail.com' : email,
            workplace: workplace === '' ? 'Work at Home' : workplace,
            profession: profession === '' ? 'React Dev' : profession,
            age: age === '' ? '20' : age,
            birth: birth === '' ? '10.01.2002' : birth,
            lang: language === '' ? "UA" : language,
            idRole: "de9b62b2-1ba9-4393-b191-efb19e05b22e",
        }
        await registerUser(data).then(r => console.log(r.data));
    }

    return (
        <div className="Header">
            <div className="Header-block">
                <div className="Header-block_head">
                    <div>
                        <img src={add} alt="add"/>
                        <p>Додати користувача</p>
                    </div>
                    <img src={close} alt="close"/>
                </div>
                <div className="Header-block_First-line">
                    <div>
                        <label>Ім’я</label>
                        <input
                            value={name}
                            onChange={e => setName(e.target.value)}
                            type="text"
                            placeholder="Daniil"/>
                    </div>
                    <div>
                        <label>Прізвище</label>
                        <input
                            value={lastname}
                            onChange={e => setLastname(e.target.value)}
                            type="text"
                            placeholder="Zborovets"/>
                    </div>
                </div>
                <div className="Header-block_First-line">
                    <div>
                        <label>Номер телефону</label>
                        <input
                            value={phone}
                            onChange={savePhone}
                            type="text"
                            placeholder="+380000000000"
                        />
                    </div>
                    <div>
                        <label>Email</label>
                        <input
                            className={validEmail ? 'badEmail' : ''}
                            value={email}
                            onChange={saveEmail}
                            type="text"
                            placeholder="example@gmail.com"
                        />
                    </div>
                </div>
                <div className="Header-block_Third-line">
                    <div>
                        <label>Група користувачів</label>
                        <select value={group} onChange={e => {
                            setGroup(e.target.value)
                        }}>
                            <option disabled={true} value="">
                                Оберіть групу
                            </option>
                            <option value="de9b62b2-1ba9-4393-b191-efb19e05b22e">Default</option>
                        </select>
                    </div>
                    <div>
                        <label>Мова</label>
                        <select
                            value={language}
                            onChange={e => {
                                setLanguage(e.target.value)
                            }}>
                            <option disabled={true} value="">
                                Оберіть мову
                            </option>
                            <option value="EN">Англійська</option>
                            <option value="UA">Українська</option>
                            <option value="DE">Німецька</option>
                            <option value="FR">Французька</option>
                        </select>
                    </div>
                </div>
                <div className="Header-block_Last-line">
                    <div>
                        <label>Додати нове поле</label>
                        <select value={newInput} onChange={e => {
                            setNewInput(e.target.value)
                        }}>
                            <option disabled={true} value="">
                                Оберіть поле
                            </option>
                            <option value="workplace">Місце роботи</option>
                            <option value="profession">Професія</option>
                            <option value="age">Вік</option>
                            <option value="birthday">Дата народження</option>
                        </select>
                    </div>
                    {newInput === '' ? <div></div>
                        : newInput === 'workplace' ?
                            <div>
                                <label>Місце роботи</label>
                                <input
                                    value={workplace}
                                    type="text"
                                    onChange={e => {
                                        setWorkplace(e.target.value)
                                    }}
                                    placeholder="Місце роботи"
                                />
                            </div>
                            : newInput === 'profession' ?
                                <div>
                                    <label>Професія</label>
                                    <input
                                        value={profession}
                                        type="text"
                                        onChange={e => {
                                            setProfession(e.target.value)
                                        }}
                                        placeholder="Професія"
                                    />
                                </div>
                                : newInput === 'age' ?
                                    <div>
                                        <label>Вік</label>
                                        <input
                                            value={age}
                                            type="text"
                                            onChange={e => {
                                                setAge(e.target.value)
                                            }}
                                            placeholder="Вік"/>
                                    </div> :
                                    <div>
                                        <label>Дата народження</label>
                                        <input
                                            value={birth}
                                            type="text"
                                            onChange={e => {
                                                setBirth(e.target.value)
                                            }}
                                            placeholder="Дата народження"
                                        />
                                    </div>
                    }
                </div>
                <div className="Header-block_Footer">
                    <button type="button" onClick={sendData}>Додати користувача</button>
                </div>
            </div>
        </div>
    );
}

export default Body;
