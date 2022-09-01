import styles from "../style"
import { arrowUp } from "../assets"

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[100px] h-[100px] p-[3px]   cursor-pointer hover:scale-105 ease-in-out duration-500 invert dark:invert-0 rounded-full bg-blue-gradient `}>
    <div className={`${styles.flexCenter}  bg-primary group w-full h-full rounded-full`}>
      <div className={`grid  place-content-center p-3`}>
        <p className="font-ubuntu font-medium text-[16px] leading-[23px] flex space-x-3">
          <span className="text-gradient group:hover:text-secondary ">
            Get
          </span>
        <img src={arrowUp} alt="arrow" className="w-[23px] h-[23px] object-contain " />
        </p>
        
        <br />
        <p className="font-ubuntu font-medium text-[16px] leading-[23px] w-full">
          <span className="text-gradient group:hover:text-secondary ">
            In Touch 
          </span>
        </p>
      </div>
    </div>
  </div>
)


export default GetStarted