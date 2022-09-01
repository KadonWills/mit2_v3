import { logo_light_png, logo_blue } from "../assets"
import { footerLinks, socialMedia } from "../constants"
import styles from "../style"


const Footer = () => (

  <footer className={`${styles.flexCenter}  flex-col`}>

    <div className={`${styles.flexCenter} md:flex-row flex-col mb-8 w-full  `} >

      <div className="flex-1 flex flex-col justify-start mr-10" >

        <img src={ localStorage.theme != "dark" ? logo_blue : logo_light_png} alt="MiT² logo" className="w-[150px] h-[72px] object-contain " />
        <p className={`${styles.paragraph} mt-4 max-w-[310px] `} >
          Let's create the future...
        </p>
        <div className="fixed bottom-10 left-3 scale-90 flex flex-col mt-4 space-y-4">
          {
            socialMedia.map(sm => (
              <a href={sm.link} title={sm.key} key={sm.id} className="hover:scale-110 drop-shadow-sm duration-200 invert dark:invert-0" target="_blank" rel="noopener noreferrer">
                <img src={sm.icon} alt={sm.id + " social link"} />
              </a>
            ))
          }
        </div>
      </div>

      <div className="flex-[1.5] w-full flex flex-row flex-wrap justify-between md:mt-0 mt-10" >

        {
          footerLinks.map((fl) => (
            <div key={fl.key} className="flex flex-col ss:my-0 my-4 min-w-[150px] ">
              <h4 className="text-secondary dark:text-white text-lg font-batangas font-bold">
                {fl.title}
              </h4>

              <ul>
                {
                  fl.links.map((link, index) => (
                    <li key={link.name}
                        className="text-primary dark:text-slate-300 dark:hover:text-accent hover:text-secondary cursor-pointer mt-4" >
                          {
                            link.name
                          }
                    </li>
                  ))
                }
              </ul>

            </div>
          ))
        }

      </div>

    </div>

    <div className="" >

        <p className="text-slate-800 dark:text-slate-400">
          ©️ 2022 MiT². All rights reserved
        </p>

    </div>

  </footer>
)

export default Footer