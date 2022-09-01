import {apple, bill, google, arrowUp } from '../assets'
import styles, { layout } from '../style'

const Billing = () =>  (
    <section id='product' className={`${layout.sectionReverse}`} > 
      <div className={layout.sectionImgReverse} >
        <img src={bill} alt="billing" className='w-full h-full relative z-[5] ' />

        <div className='absolute z-[3] -left-1/2 top-0 w-[60%] h-[60%] rounded-full white__gradient ' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[70%] h-[70%] rounded-full pink__gradient ' />
        <div />
      </div>

      <div className={layout.sectionInfo} >
        <h2 className={`${styles.heading2} font-batangas capitalize `} >
          Easily manage your <br className="sm:block hidden" /> <span className="font-black ">CANAL+ </span> subscriptions.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 `} >
        make your CANAL+ subscription from where you are 24h/7 via Orange Money or MTN Mobile Money with no extra fee. You can generate and download your receipt in PDF. 
        </p>

        <div className='flex flex-row w-full justify-start space-x-2 flex-wrap sm:mt-10 mt-6' >
          <img src={google} alt="google play" className='w-[128px]' />
          <img src={apple} alt="apple play" className='w-[128px]' />
          <a href="//www.mit2online.com/C-mobile" target="_blanks" className='text-xs mt-6 flex flex-row min-w-[150px] space-x-1 text-accent invert dark:invert-0'>
            <span>  learn more  </span>
            <img src={arrowUp} alt="arrow" className='w-[12px] mb-6 subpixel-antialiased' />
          </a>
        </div>
      </div>
    </section> 
  )


export default Billing