import { useState } from "react";
import ModalReact from "./shared/ModalReact";
import css from "@styles/pages/home.module.css";

interface FormDataI {
    name: { value: string; error: string; };
    email: { value: string; error: string; };
    message: { value: string; error: string; };
}

const ContactHeroModal = () => {

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [formData, setFormData] = useState<FormDataI>({
        name: { value: '', error: '' },
        email: { value: '', error: '' },
        message: { value: '', error: '' },
    });

    const handleFormData = (e) => {
        const value = e.target.value;

        setFormData({
            ...formData,
            [e.target.name]: { value, error: '' }
        });

    };

    const validateFormData = (): boolean => {
        let success = true;

        const formDataCopy = { ...formData };
        const keys = Object.keys(formDataCopy);

        keys.forEach(key => {
            const input = formDataCopy[key as keyof FormDataI];
            if (key == 'email' && input.value.trim() !== '') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(input.value)) {
                    input.error = 'Por favor ingresa un email válido';
                    success = false;
                }
            }
            else if (input.value.trim() == '') {
                input.error = 'Este campo es obligatorio';
                success = false;
            }
        });

        setFormData(formDataCopy);

        return success;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const successForm = validateFormData();

        if (!successForm) return;

        //TODO: ⏳ AQUI EL PROCESO DE ENVIADO... QUE TODAVÍA NO ESTA

    };

    const resetForm = () => {
        setFormData({
            name: { value: '', error: '' },
            email: { value: '', error: '' },
            message: { value: '', error: '' },
        });
    };

    return (
        <>

            <button className={`${css["contact-btn"]} g-button-rounded `} onClick={() => setIsOpen(true)}>
                Contáctanos
            </button>

            <ModalReact
                title="Contáctanos"
                idModal="contact-hero-home"
                classModal={css['modal-contact']}
                titleClass={css['modal-contact-title']}
                isOpen={isOpen}
                onCloseModal={() => {
                    setIsOpen(false);
                    resetForm();
                }}
            >
                <>
                    <section className={`${css['modal-contact-hero']} `}>
                        <p>Comentanos tus dudas, ideas o propuestas. ✨</p>
                        <p>Estaremos encantados de ayudarte. Te contactaremos a la brevedad posible.</p>
                    </section>
                    <form className={`${css['modal-contact-form']} `} onSubmit={handleSubmit} noValidate={true} >
                        <div className={`${css['form-group']} `}>
                            <label htmlFor="name">Nombre:</label>
                            <input type="text" id="name" name="name" value={formData.name.value} onChange={(e) => handleFormData(e)} />
                            {
                                formData.name.error !== '' &&
                                <span className={`${css['error-input']} `} >{formData.name.error}</span>
                            }
                        </div>

                        <div className={`${css['form-group']} `}>
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" value={formData.email.value} onChange={(e) => handleFormData(e)} />
                            {
                                formData.email.error !== '' &&
                                <span className={`${css['error-input']} `} >{formData.email.error}</span>
                            }
                        </div>

                        <div className={`${css['form-group']} `}>
                            <label htmlFor="message">Mensaje:</label>
                            <textarea id="message" name="message" value={formData.message.value} onChange={(e) => handleFormData(e)}>
                                {/* {formData.message.value} */}
                            </textarea>
                            {
                                formData.message.error !== '' &&
                                <span className={`${css['error-input']} `} >{formData.message.error}</span>
                            }
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