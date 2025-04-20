import { useRef } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/colored-logo.svg';
import moldure from '../assets/squares-moldure.svg';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 

const Login: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();
  
    const handleGoToProfile = () => {
      navigate('/Profile');
    };

    return (
        <div className="Login flex items-center justify-center h-screen w-screen px-6 sm:px-8 md:px-16 relative">
            <div className="Login-content flex flex-col items-center justify-center w-full max-w-md relative z-10">
                {/** Logo **/}
                <Link to="/" className='text-[#006ACB]'>
                    <img src={logo} alt="logo" className="logo mb-8 mt-16 sm:mt-12 md:mt-16" style={{ width: '150px', height: 'auto' }} />
                </Link>
                {/** Form **/}
                <div className="Login-form w-full flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 gap-4">
                    <form action="" className="w-full flex flex-col items-center justify-center gap-4">
                        <TextBar label="Login" type='email' placeholder='Insira seu e-mail institucional' />
                        <TextBar label="Senha" type='password' placeholder='Digite sua senha' />
                        <a href="" className='text-[#006ACB]'>Esqueci minha senha</a>

                        <Button ref={ref} size="default" shape="pill" className="p-4 mt-4 mb-4 w-full justify-center" 
                        onClick={handleGoToProfile}>
                            Entrar
                        </Button>
                        
                        <div className="flex items-center gap-2 w-full">
                            <hr className="flex-1 border-t border-[#006ACB]" />
                            <span className="text-[#006ACB]">ou</span>
                            <hr className="flex-1 border-t border-[#006ACB]" />
                        </div>

                        <Link to="/signup" className='text-[#006ACB]'>Cadastre-se</Link>
                    </form>
                </div>
            </div>

            {/** Footer and Moldure **/}
            {/** <img 
                src={moldure} 
                alt="Moldura" 
                className="absolute bottom-0 right-0 w-[250px] sm:w-[350px] md:w-[450px] lg:w-[562px] h-auto z-0 pointer-events-none" 
            /> **/}
            {/** <div className='md:block footer absolute bottom-0 h-16 sm:h-20 w-screen bg-gradient-to-r from-[#006ACB] to-[#003465] z-0 pointer-events-none' /> **/}
        </div>
    );
}

export default Login;