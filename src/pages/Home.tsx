import { useRef } from 'react';
import { Button } from '../components/Button';
import { TextBar } from '../components/TextBar';
import logo from '../assets/white-logo.svg'
import classroom from '../assets/classroom.svg';
import studentsMoldure from '../assets/happy-students.svg';
import bioCaique from '../assets/Imagem bio Caique.svg';
import bioGui from '../assets/Imagem bio_ fundoGuilherme.svg';
import bioLucas from '../assets/Imagem bio_ fundoLucas.svg';
import stars from '../assets/Stars.svg';
import coloredLogo from '../assets/colored-logo.svg'
import githubLogo from '../assets/GithubLogo.svg'
import moldure from '../assets/squares-moldure.svg'
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
    const ref = useRef<HTMLButtonElement | null>(null);
    const navigate = useNavigate();
  
    const handleGoToLogin = () => {
      navigate('/Login');
    };
  
    const handleGoToSignUp = () => {
      navigate('/SignUp'); 
    };
  
  return (
    <div className="Home relative">
        
        {/** top section **/}
        <section id="top-section">
            <div className="top-container flex flex-col items-center justify-center text-center">
                <h1 className='title text-[#F0F2F5] text-[28px] font-bold pb-2 px-4 w-full text-left hidden md:block'>AcadeMe Inc.</h1>
                <div className="top-content flex flex-col items-center justify-center text-center">
                    <img src={logo} alt="logo" className="w-32 md:w-48" />
                    <h1 className='slogan text-[#f4f0f5] text-[32px] md:text-[50px] mb-[21px]'>Seja bem-vindo ao seu<br/>futuro acadêmico</h1>
                    <div className="top-buttons-container flex flex-col md:flex-row items-center justify-center gap-4 md:gap-[24px]">
                        <Button 
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'                                                      
                            onClick={handleGoToSignUp}
                        > 
                            Cadastre-se
                        </Button>

                        <Button
                            ref={ref}
                            size='default'
                            shape='pill'
                            className='min-w-[171px] px-8 py-2 flex items-center justify-center'
                            onClick={handleGoToLogin}
                        >
                            Login
                        </Button>
                    </div>
                </div>
            </div>
        </section>

        {/** search section **/}
        <section id="search-section" className="relative h-screen flex items-center justify-center px-8 md:px-16 py-12 md:py-20">
            <div className="absolute inset-y-0 left-0 w-auto h-full hidden md:block">
                <img src={moldure} alt="Moldura" className="h-full object-contain rotate-180" />
            </div>
            <div className="search-container relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-40">
                <img src={classroom} alt="classroom" className="w-80 md:w-[500px] self-start md:self-center" />
                <div className="search-content-body flex flex-col items-center text-center md:items-start md:text-left md:ml-16">
                    <h1 className='search-title text-[#006ACB] text-[28px] md:text-[40px] mb-4'>O que é o AcadeMe?</h1>
                    <p className='about-search text-[#006ACB] text-[18px] md:text-[26px] mb-6 md:mb-10'>
                    Com o AcadeMe o aluno é capaz de destacar toda a
                    sua trajetória acadêmica trazendo visibilidade para
                    todas atividades feitas na faculdade e credibilidade
                    para seus conhecimentos.
                    </p>
                    <div className='searchbar-container w-full max-w-md'>
                    <TextBar
                        variant="default"
                        textSize="lg"
                        placeholder="Procurar Perfil..."
                        iconLeft="search"
                        hideIconsOnInput
                    />
                    </div>
                </div>
            </div>
        </section>

        {/** share section **/}
        <section id="share-section" className='bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] h-screen flex items-center justify-center px-8 md:px-16 py-12 md:py-20'>
            <div className="share-container flex flex-col md:flex-row items-center gap-10 md:gap-56">
                <div className="search-content-body flex flex-col items-center text-center md:items-start md:text-left">
                    <h1 className='share-title text-[#F0F2F5] text-[28px] md:text-[40px] mb-4'>Compartilhe</h1>
                    <p className='about-share text-[#F0F2F5] text-[18px] md:text-[26px] mb-6 md:mb-10'>
                    Você pode compartilhar seu portfólio com
                    colegas, professores e possíveis recrutadores,
                    destacando suas habilidades e conquistas acadêmicas.
                    Tudo isso em um ambiente que valoriza o desenvolvimento do seu potencial.
                    </p>
                </div>
                <img src={studentsMoldure} alt="happy-students" className="w-80 md:w-[500px]" />
            </div>
        </section>

        {/** feedback section **/}
        <section id='feedback-section' className='bg-white p-10 md:p-20 pb-0 relative'>
            <h1 className='text-[#006ACB] font-bold text-[28px] md:text-[40px] mb-10 md:mb-20'>Feedback dos Usuários</h1>
            <div className='feedback-container flex flex-col md:flex-row items-center justify-center gap-8 relative z-10'>
                <div className='message-container flex flex-col items-center text-[#F0F2F5] bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] opacity-90 w-full md:w-[400px] h-auto md:h-[600px] p-6 md:p-10 rounded-xl gap-6 md:gap-10'>
                    <div className='userinfo-container flex items-center gap-4'>
                        <img src={bioCaique} alt="Avatar" className='w-20 md:w-28' />
                        <span className='text-lg md:text-2xl'>Caíque C.</span>
                    </div>
                    <p className='about-feedback text-sm md:text-lg mt-4 md:mt-6'>
                    "Essa plataforma foi 
                    essencial para organizar 
                    meus trabalhos acadêmicos. 
                    Pude criar um 
                    portfólio que mostra tudo 
                    o que desenvolvi ao longo 
                    do curso, e ainda é super 
                    fácil de usar!"
                    </p>
                    <img src={stars} alt="Avaliação" className='mt-6 md:mt-12' />
                </div>

                <div className='message-container flex flex-col items-center text-[#F0F2F5] bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] opacity-90 w-full md:w-[400px] h-auto md:h-[600px] p-6 md:p-10 rounded-xl gap-6 md:gap-10'>
                    <div className='userinfo-container flex items-center gap-4'>
                        <img src={bioGui} alt="Avatar" className='w-20 md:w-28' />
                        <span className='text-lg md:text-2xl'>Guilherme V.</span>
                    </div>
                    <p className='about-feedback text-sm md:text-lg mt-4 md:mt-6'>
                    "O site me ajudou a apresentar meus trabalhos de forma profissional. 
                    É ótimo ter um portfólio acessível para mostrar para 
                    possíveis recrutadores ou até mesmo para amigos!"
                    </p>
                    <img src={stars} alt="Avaliação" className='mt-6 md:mt-12' />
                </div>

                <div className='message-container flex flex-col items-center text-[#F0F2F5] bg-gradient-to-r from-[#006ACB] to-[#003465] bg-[length:200%] opacity-90 w-full md:w-[400px] h-auto md:h-[600px] p-6 md:p-10 rounded-xl gap-6 md:gap-10'>
                    <div className='userinfo-container flex items-center gap-4'>
                        <img src={bioLucas} alt="Avatar" className='w-20 md:w-28' />
                        <span className='text-lg md:text-2xl'>Lucas M.</span>
                    </div>
                    <p className='about-feedback text-sm md:text-lg mt-4 md:mt-6'>
                    "Finalmente encontrei um lugar para centralizar todos os 
                    meus projetos da faculdade. Agora, qualquer pessoa pode 
                    ver meu progresso e as coisas que estudei. 
                    Estou muito satisfeito com a plataforma!"
                    </p>
                    <img src={stars} alt="Avaliação" className='mt-6 md:mt-12' />
                </div>
            </div>
        </section>

         {/** footer **/}
        <div className='footer-container flex flex-col md:flex-row items-center md:items-start gap-8 mt-20 mb-8 md:mb-0'>
            <img src={coloredLogo} alt="Logo" className="w-20 md:w-32" />
            <ul className='flex flex-col gap-2 text-[#006ACB]'>
                <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-6 md:h-8 w-6 md:w-8'/><span>github.com/caique18</span></li>
                <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-6 md:h-8 w-6 md:w-8'/><span>github.com/lucasmmps</span></li>
                <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-6 md:h-8 w-6 md:w-8'/><span>github.com/MikhaelNbg12</span></li>
                <li className='flex items-center gap-4 font-semibold'><img src={githubLogo} alt="GitLogo" className='h-6 md:h-8 w-6 md:w-8'/><span>github.com/v-gui</span></li>
            </ul>
        </div>
        <img src={moldure} alt="Moldura" className=" absolute flex bottom-0 right-0 z-0 pointer-events-none w-[700px] h-auto hidden md:block" />
    </div>
  );
}

export default Home;
