import { stats } from "../constants"
import styles from "../style"

const Stats = () => (
    <section className={` ${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 w-[80%] mx-auto`}>
      {
        stats.map((stat) => 
          <div key={stat.id} className="flex flex-1 justify-start items-center flex-row space-x-2 m-3">
            <h4 className="font-batangas  xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-primary dark:text-white">{stat.value}</h4>
            <p className="font-ubuntu  xs:text-[20px] text-[26px] xs:leading-[26px] text-gradient leading-[21px] text-primary dark:text-white invert dark:invert-0">
              {stat.title}
            </p>
          </div>
        )
      }
    </section>
);


export default Stats