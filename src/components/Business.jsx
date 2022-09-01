import styles, { layout } from "../style"
import { features } from "../constants"
import Button from "./Button"

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[10px] feature-card ${ index != features.length-1 ? 'mb-4' : null} `}>
      <div className={` w-[64px] h-[64px]  bg-dimBlue rounded-full ${styles.flexCenter}`}>
        <img src={icon} alt="title" className="w-[50%] h-[50%] object-contain " />
      </div>
      <div className={`flex flex-1 flex-col m-3`}>
        <h4 className={` font-ubuntu font-semibold text-primary dark:text-white tex-[18px] mb-1`}> {title} </h4>
        <p className={`font-ubuntu font-normal text-base text-primary dark:text-dimWhite`}>
          {content}
        </p>
      </div>
    </div>
);

const Business = () => (
    <section id="features" className={` ${layout.section} `}>
      <div className={` ${layout.sectionInfo} `}>
        <h2 className={` ${styles.heading2} font-batangas capitalize `}>
          You think it, <br className="sm:block hidden"/>
          We Bring it to life
        </h2>
        <p className={` ${styles.paragraph} max-w-[470px] mt-5 `}>
        We combine strong domain knowledge with technology expertise
        to build and maintain the best applications for You, 
        delivering both B2B and B2C audiences.
        </p>

        <Button styles='mt-10' />
      </div>

      <div className={` ${layout.sectionImg} flex-col `}>
        {
          features.map((feature, index) => (
            <FeatureCard key={feature.id} {...feature} index={index} />
          ))
        }
      </div>
    </section>
);

export default Business