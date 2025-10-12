import React from 'react'
import styles from "../../styles/styles.module.css";

interface ButtonProps  {
    text: string;
    link: string;
    className?: string;
}

const Button = ({text, link, className}: ButtonProps) => {
    return (
        // <div className='w-full'>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles['cta-btn']} text-center text-[#F9FAFB]  rounded-lg shadow-sm px-4 md:px-8 py-4 ${className ? `${className} bg-white` : "bg-[#dd1e26]"}`}
            >
                <span>{text}</span>
            </a>
        // </div>
    )
}

export default Button;