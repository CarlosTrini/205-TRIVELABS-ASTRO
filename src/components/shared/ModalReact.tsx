import React, { useEffect, useState } from 'react';

import closeIcons from "@assets/images/close-icon.png";
import css from '@styles/components/modal.module.css';
import type { boolean } from 'astro:schema';


type propsT = {
    idModal: string;
    classModal?: string;
    title?: string;
    titleClass?: string;
    isOpen: boolean;
    children: React.ReactNode;
    onCloseModal: () => void;
};


const ModalReact = (props: propsT) => {

    const { idModal, classModal = "", titleClass, title, children, isOpen, onCloseModal } = props;

    const [setshowModal, setShowModal] = useState<boolean>(false);

    const closeModal = () => {
        setShowModal(false);
        onCloseModal();
    };

    useEffect(() => {
        setShowModal(isOpen);
    }, [isOpen]);

    return (
        <>
            <section className={`${css['modal-layer']} ${setshowModal ? css['modal-show'] : css['modal-hide']}`} id={idModal}>
                <section className={`${classModal} ${css['modal-container']} `}>
                    <header className={`${titleClass} ${css['header-modal']}`}>
                        <p>{title}</p>
                        <button
                            className={`${css['header-modal__close']}`}
                            id="headerModalClose"
                            onClick={closeModal}
                        >
                            <img src={closeIcons.src} alt="cerrar modal" />
                        </button>
                    </header>
                    {children}
                </section>
            </section>
        </>
    );
};

export default ModalReact;



