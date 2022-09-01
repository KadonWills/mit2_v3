import styles, {layout} from "../style"
import { clients } from "../constants"

const Clients = () => (
  <section className={styles.flexCenter + " my-4"} >

    <div className={`${styles.flexCenter} flex-wrap w-[90%] `} >

    {
      clients.map((client, index) => (
        <div key={client.id}  className={`${styles.flexCenter} flex-1  min-w-[192px] md:min-w-[120px] `}>
          <img  src={client.logo} alt="client_logo"
          className=" w-[192px] h-[100px] object-contain " />
        </div>
        ))
      }
    
    </div>

  </section>
)

export default Clients