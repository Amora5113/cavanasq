import {useState} from 'react'
import Logo from "../Assets/Logos/Logooficial.png"
import Fondo from "../Assets/Img/c.webp"
import Fondomobile from "../Assets/Img/fm.webp"


const headbarRedes = [
  {
    id: 1,
    title: "WhatsApp",
    link: "https://wa.me/5216161070699",
    icon: 'bi bi-whatsapp'
  },

  {
    id: 2,
    title: "Instagram",
    link: "https://www.instagram.com/",
    icon: 'bi bi-instagram'
  },
 
]

const Pagea = () => {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  };


  return (
  <section className='relative overflow-hidden min-h-screen'>

    {/* BACKGROUND DESKTOP */}
    <div
      className='hidden md:block absolute inset-0 z-0'
      style={{
        backgroundImage: `url(${Fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>

    {/* BACKGROUND MOBILE */}
    <div
      className='block md:hidden absolute inset-0 z-0'
      style={{
        backgroundImage: `url(${Fondomobile})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>

    {/* CONTENIDO */}
    <div className='relative z-9999 min-h-screen pt-20 md:pt-30 md:pb-22.5'>

      {/* HEADBAR */}
      <nav className="fixed flex justify-between items-center top-0 left-0 bg-white/30 w-full backdrop-blur-md z-50">
        {/* Logo Headbar */}
        <div className='items-center align-middle p-6'>
          <img src={Logo} alt='Logo del sitio' className='w-80'/>
        </div>

        <div className='hidden md:flex justify-evenly w-full items-center p-6'>
          {/* call to */}
          <div>
            <h1 className='text-blue-900 font-bold'> 
              Para mayor información llama al
            </h1>
            <h1 className='text-gray-700'> 
              +52 (616) - 107 - 0699
            </h1>
          </div>

          {/* linea entre divs*/}
          <div className='border-l-2 border-l-white/50 w-2 h-15'></div>

          {/* email to */}
          <div >
            <h1 className='text-blue-900 font-bold '> 
              Contáctanos al correo
            </h1>
            <a className='text-gray-700' href="mailto:jmendez@sanquintinm2.com">
              jmendez@sanquintinm2.com
            </a>
          </div>

          {/* linea entre divs*/}
          <div className='border-l-2 border-l-white/50 w-2 h-15 '></div>

          {/* located */}
          <div >
            <h1 className='text-blue-900 font-bold'> 
              Nos ubicamos en
            </h1>
            <h1 className='text-gray-700'>
              San Quintin, Baja California
            </h1>
          </div>
        </div>


          {/* Boton hamburguesa */}
          <button onClick={toggleMenu} className='md:hidden pr-6 text-blue-950'>
            <svg
              className='w-8 h-8'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            > 
              {isOpen ? ( 
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              ) 
              }
            </svg>
          </button>
          
          {/* Navegación redes */}
            <div className='hidden md:block pr-6'>
              <ul className='flex space-x-6'>
                {headbarRedes.map((link)=>(
                  <li key={link.id}>
                    <a 
                      target='_blank'
                      rel='noopener noreferrer'
                      className='inline-block transition-transform duration-300 transform hover:scale-125'
                      href={link.link}> 
                        <i
                          className={`${link.icon} sm:text-3xl text-lg text-blue-950 hover:text-blue-700 transition-all
                          duration-300`}>
                        </i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          {/* Menú móvil */}
          <div
            className={`
            md:hidden
            absolute
            text-center
            top-full
            left-0
            w-full
          bg-white/95
            backdrop-blur-md
            transition-all
            duration-300
            overflow-hidden
            ${isOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0"}
            `}>

              {/* call to */}
                <div>
                  <h1 className='text-blue-900 font-bold'>
                    Para mayor información llama al
                  </h1>
                  <h1 className='text-gray-700'>
                    +52 (616) - 107 - 0699
                  </h1>
                </div>

              {/* email */}
                <div>
                  <h1 className='text-blue-900 font-bold'>
                    Contáctanos al correo
                  </h1>
                  <a
                    className='text-gray-700'
                    href="mailto:jmendez@sanquintinm2.com"
                  >
                    jmendez@sanquintinm2.com
                  </a>
                </div>

              {/* ubicación */}
                <div>
                  <h1 className='text-blue-900 font-bold'>
                    Nos ubicamos en
                  </h1>

                  <h1 className='text-gray-700'>
                    San Quintin, Baja California
                  </h1>
                </div>

              {/* redes */}
                <ul className='flex justify-center items-center gap-6 pt-4 border-t border-blue-200'>
                  {headbarRedes.map((link) => (
                    <li key={link.id}>
                      <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href={link.link}
                        onClick={() => setIsOpen(false)}
                        className='inline-block transition-transform duration-300 transform hover:scale-125'
                      >
                        <i
                          className={`${link.icon} text-2xl text-blue-950 hover:text-blue-700 transition-all duration-300`}
                        ></i>
                      </a>
                    </li>
                  ))}
                </ul>
          </div>

      </nav>
      
      <div className='relative bg-blue-950 text-white text-center flex justify-between align-middle items-center gridprincipal 
        sm:px-8 sm:py-4 px-4 py-2 sm:pl-2 sm:pr-2 pl-2 pr-2 '>
            
          {/* div vacio */}
            <div className='border-l border-l/100'></div>

          {/* Frase 1 */}
            <div className="text-center text-[clamp(14px,2vw,18px)]">
              <h1> 
                Presencia Empresarial de Alto Nivel
              </h1>
            </div>

          {/* linea entre divs*/}
            <div className='border-l-2 border-l-white/50 h-10'></div>

          {/* Frase 2 */}
            <div  className=" text-center text-[clamp(14px,2vw,18px)]">
              <h1 > 
                Ubicación que Optimiza tu Operación
              </h1>
            </div>

          {/* linea entre divs*/}
            <div className='border-l-2 border-l-white/50 h-10'></div>

          {/* Frase 3 */}
            <div className=' text-center text-[clamp(14px,2vw,18px)]' >
              <h1 > 
                Beneficios en Zona de Expansión Industrial
              </h1>
            </div>
            
          {/* div vacio */}
            <div className='border-r border-r/100'></div>

        </div> 
        
      </div>
    </section>
  )
}

export default Pagea
