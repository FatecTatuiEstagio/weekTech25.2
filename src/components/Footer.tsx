
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer id='contato' className='bg-slate-900 text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {/* Informações da Instituição */}
          <div className='lg:col-span-2'>
            <div className='flex items-center space-x-3 mb-6'>
              {/* <div className='w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-lg'>ST</span>
              </div> */}
              <div>
                <h3 className='text-xl font-bold'>Semana de Tecnologia</h3>
                <p className='text-slate-300'>Fatec Tatuí</p>
              </div>
            </div>
            
            <p className='text-slate-300 mb-6 leading-relaxed'>
              A Semana de Tecnologia da Fatec Tatuí é um evento anual que conecta 
              estudantes, profissionais e empresas, promovendo o conhecimento e 
              a inovação tecnológica.
            </p>

            {/* Logos institucionais */}
            {/* <div className='flex items-center space-x-4'>
              <div className='w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold'>FATEC</span>
              </div>
              <div className='w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center'>
                <span className='text-white font-bold text-sm'>CPS</span>
              </div>
            </div> */}
          </div>

          {/* Contato */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Contato</h4>
            <div className='space-y-4'>
              <div className='flex items-start space-x-3'>
                <MapPin className='w-5 h-5 text-blue-400 mt-1 flex-shrink-0' />
                <div>
                  <p className='text-slate-300'>
                    Fatec Tatuí<br />
                    Rua Mario Dedini, 97<br />
                    Centro - Tatuí/SP<br />
                    CEP: 18270-070
                  </p>
                </div>
              </div>
              
              <div className='flex items-center space-x-3'>
                <Phone className='w-5 h-5 text-blue-400' />
                <span className='text-slate-300'>(15) 3205-7782</span>
              </div>
            </div>
          </div>

          {/* Redes Sociais e Links */}
          <div>
            <h4 className='text-lg font-semibold mb-6'>Siga-nos</h4>
            <div className='space-y-4'>
              <a 
                href='https://www.instagram.com/fatectatui'
                target='_blank'
                className='flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-200'
              >
                <Instagram className='w-5 h-5' />
                <span>@fatectatui</span>
              </a>
              
              <a 
                href='https://www.facebook.com/fatectatui' 
                target='_blank'
                className='flex items-center space-x-3 text-slate-300 hover:text-blue-400 transition-colors duration-200'
              >
                <Facebook className='w-5 h-5' />
                <span>Fatec Tatuí</span>
              </a>
            </div>

            <div className='mt-8'>
              <h5 className='font-semibold mb-3'>Links Úteis</h5>
              <div className='space-y-2'>
                <a target='_blank' href='https://www.fatectatui.edu.br/site4/portalAluno.php' className='block text-slate-300 hover:text-blue-400 transition-colors duration-200'>
                  Portal Fatec
                </a>
                <a target='_blank' href='https://www.cps.sp.gov.br/' className='block text-slate-300 hover:text-blue-400 transition-colors duration-200'>
                  Centro Paula Souza
                </a>
                <a target='_blank' href='https://vestibular.fatec.sp.gov.br/home/' className='block text-slate-300 hover:text-blue-400 transition-colors duration-200'>
                  Vestibular
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Linha separadora */}
        <div className='border-t border-slate-700 mt-12 pt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <p className='text-slate-400 text-sm'>
              © 2025 Fatec Tatuí - Centro Paula Souza. Todos os direitos reservados.
            </p>
            <p className='text-slate-400 text-sm mt-4 md:mt-0'>
              Desenvolvido para a Semana de Tecnologia 2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
