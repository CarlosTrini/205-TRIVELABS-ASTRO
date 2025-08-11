import { useState } from "react";
import ModalReact from "./shared/ModalReact";
import css from "@styles/pages/home.module.css";

const ContactHeroModal = () => {

    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.target;
    };

    return (
        <>

            <button className={`${css["contact-btn"]} g-button-rounded `} onClick={() => setIsOpen(true)}>
                Contáctanos
            </button>

            <ModalReact
                title="¿Dudas? Contáctanos"
                idModal="contact-hero-home"
                isOpen={isOpen}
                onCloseModal={() => {
                    setIsOpen(false);
                }}
            >
                <>
                    <form className={`${css['modal-contact-form']} `} onSubmit={handleSubmit} >
                        <div className={`${css['form-group']} `}>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" />
                            <span className={`${css['error-input']} `} >Este campo es necesario</span>
                        </div>

                        <div className={`${css['form-group']} `}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" />
                            <span className={`${css['error-input']} `} >Este campo es necesario</span>
                        </div>

                        <div className={`${css['form-group']} `}>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" ></textarea>
                            <span className={`${css['error-input']} `} >Este campo es necesario</span>
                        </div>
                        <div className={`${css['form-group']}  `}>

                            <button className={`${css['form-submit']} g-button-rounded`} type="submit">Enviar</button>
                        </div>
                    </form>
                </>
            </ModalReact>
        </>
    );
};

export default ContactHeroModal;