import { card } from "../assets"
import styles, { layout } from "../style"
import Button from './Button'

const CardDeal = () => (
  <section className={` ${layout.section} `} >
    <div  className={` ${layout.sectionInfo} `}>
      <h2 className={`${styles.heading2} font-batangas capitalize`} >
        Boost your business <br className="sm:block hidden" /> with us today.
      </h2>
      <p className={` ${styles.paragraph} max-w-[470px] mt-5`} >
      From competitive analysis to interactive prototypes,
      our company implements engaging and simple-to-use user interfaces. Our user-friendly product design helps companies achieve quantifiable business goals through output that captivates the customer and sets them apart from the competition.
      </p>

    <Button styles={"mt-10"} text="Let's discuss your project" />
    </div>

    <div className={` ${layout.sectionImg} `}>
      <img src={card} alt="card" />
    </div>


  </section>
)

export default CardDeal