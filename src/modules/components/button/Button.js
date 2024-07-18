import './button.scss';
// import { Link } from 'react-router-dom';

export default function Button({children, onClick, isActive, to}) {

    return (
        <button
            className={isActive ? 'active' : 'button'}
            onClick={onClick}
        >
            {children}
        </button>

        // <Link 
        //     to={to}
        //     className={isActive ? 'active' : 'button'}
        //     onClick={onClick}
        //     role='button'
        //     >
        //         {children}
        // </Link>
    )
}