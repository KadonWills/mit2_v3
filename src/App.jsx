import styles from "./style";
import { Navbar, Hero, Billing, Business, CTA, CardDeal, Clients, Footer, Stats, Testimonials } from "./components";

const App = () => (
    <div className='bg-slate-50 dark:bg-primary w-full mx-auto overflow-hidden'>
      
      <div className={` ${styles.flexCenter}`}>
        <div className={styles.boxWidth}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-slate-50 dark:bg-primary ${styles.flexStart}`}>
        <div className={styles.boxWidth}>
          <Hero />
        </div>
      </div>

      <div className={`bg-slate-50 dark:bg-primary ${styles.flexStart}`}>
        
        <div className={styles.boxWidth}>
          
          <Stats />

          <Business />
          
          <Billing />
          
          <CardDeal /> 
          
          <Testimonials /> 
          
          <Clients /> 
          
          <CTA /> 
          
          <Footer />
        
        </div>
      
      </div>
    
    </div>
);


export default App;