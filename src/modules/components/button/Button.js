import './button.scss';
import { HashLink as Link } from 'react-router-hash-link';

export default function Button({children, onClick, isActive, to}) {
    // Если передан `to`, используем `Link`, иначе обычная кнопка.
    if (to) {
        return (
            <Link 
                to={to}
                className={isActive ? 'active' : 'button'}
                onClick={onClick}
                smooth // добавляем плавную прокрутку
            >
                {children}
            </Link>
        );
    }

    return (
        <button
            className={isActive ? 'active' : 'button'}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
