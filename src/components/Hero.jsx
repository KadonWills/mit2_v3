import styles from "../style"
import { discount, logo_blue } from "../assets"
import GetStarted from "./GetStarted"

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      <div className={`flex ${styles.flexStart} flex-col xl:px-0 `}>

        <div className="flex flex-row  py-[6px] capitalize px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={` ${styles.paragraph} text-slate-400 text-sm ml-2`}>
          <span className="text-white">Up to 20% </span>
            Discount on every { " " }
          <span className="text-white">
            Project.
          </span>
          
          </p>
        </div>

        <div className="flex flex-row space-x-40 justify-between items-center w-full my-2">

          <h1 className="font-batangas uppercase text-secondary dark:text-white flex-1  text-[45px] md:text-[52px] ss:leading-[73px] leading-[60px]">
            We build <br className="block md:hidden" />
            <span className="text-gradient font-batangas"> Innovative</span>
            
          </h1>

          <div className="ss:flex hidden mr-4 justify-end">
            <GetStarted />
          </div>
          </div>
          <h2 className="font-batangas uppercase text-secondary dark:text-white flex-1  text-[45px] md:text-[52px] ss:leading-[73px] leading-[60px]">
            Web &amp; mobile solutions.
          </h2>

          <p className={`${styles.paragraph} text-primary max-w-[470px] mt-2`}>
            We put use our expertise to help you build and scale up your projects. Let's create the future...
          </p>
        
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-5 relative`} >
        <img src={logo_blue} alt="logo_blue arm" className="w-full h-[100%] object-contain relative z-5" />
        <div className="z-[0] absolute w-[40%] h-[40%] top-10 right-0 pink__gradient "/>
        <div className="z-[1] absolute w-[80%] h-[80%] bottom-0 rounded-full right-40 white__gradient "/>
        <div className="z-[0] absolute w-[100%] h-[100%] top-0  blue__gradient "/>
      </div>

    </section>
  )
}

export default Hero