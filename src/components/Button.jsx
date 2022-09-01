
const Button = ({styles, text=null}) => (
    <button type="button" 
    className={
      `py-2 px-6 bg-gradient-to-br from-blue-600 to-indigo-600
        hover:from-orange-400 hover:to-orange-600 hover:scale-105 duration-200
       text-white hover:text-slate-900 rounded-[10px] outline-none font-ubuntu 
       ${styles}`} >
     {  text ?? 'Hire Us' }
    </button>
  )


export default Button