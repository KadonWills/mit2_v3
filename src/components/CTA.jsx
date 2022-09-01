import styles from "../style"
import Button from "./Button"

const CTA = () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col  bg-black-gradient-2 rounded-2xl text-white box-shadow`}>
    <div className={`flex flex-1 flex-col`}>
      <h2 className={styles.heading2 + " text-secondary font-batangas"}>
        Book our service now !
      </h2>
      <p className={`${styles.paragraph} max-w-[470px]`}>
        Wether you need Expert Consultation, API Integrations, Robust Application, Trainings or simply a website, our highly skilled and diversified team got your back.
      </p>
    </div>

    <div className={` ${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles="" text="Contact Us" />

    </div>
  </section>
)

export default CTA