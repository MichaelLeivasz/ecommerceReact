import logo from '../assets/logo/react.svg';
import UserButtons from './UserButtons';

const Header = () => {
    return (
        <header className='flex text-xl sticky top-0 shadow-xl shadow-slate-400 bg-slate-950 text-slate-200 px-4 px-8 py-4 items-end justify-between text-xl z-10'>
            <a href='/'>
                <img className='h-16 px-2' src={logo} alt='Logo do React.' />
            </a>
            <UserButtons />
        </header>
    );
};

export default Header;
