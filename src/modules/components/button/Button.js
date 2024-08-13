import './button.scss';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link as ScrollLink } from 'react-scroll';

export default function Button({ children, onClick, isActive, to, target }) {

    if (to) {

        if (target) {
            return (
                <a
                    href={to}
                    target={target}
                    className={isActive ? 'active' : 'button'}
                    onClick={onClick}
                >
                    {children}
                </a>
            );
        }

        return (
            // <Link 
            //     to={to}
            //     className={isActive ? 'active' : 'button'}
            //     onClick={onClick}
            //     smooth 
            // >
            //     {children}
            // </Link>
            <ScrollLink
                to="contact"
                smooth={true}
                className={isActive ? 'active' : 'button'}
                onClick={onClick}
            >
                {children}
            </ScrollLink>
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
