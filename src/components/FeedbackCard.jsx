import { quotes } from "../assets"


const FeedbackCard = ({  
  id,
  content,
  name,
  title,
  img
}) => (
  <div className="flex justify-between flex-col px-10 py-12 rounded-2xl max-w-[340px] md:w-1/3 
  md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" >

    <img src={quotes} alt="double_quotes" className="w-[42px] h-[27px]  object-contain" />
    <p className="text-lg text-slate-700 dark:text-slate-300 my-10" >
      {content}
    </p>

    <div className="flex flex-row space-x-4">
      <img src={img} alt={name} className="w-[48px] rounded-full" />
      <div className="flex flex-col" >
        <h4 className="text-primary dark:text-dimWhite" >{name}</h4>
        <span className="text-sm text-slate-500" >{title}</span>
      </div>
    </div>

  </div>
)

export default FeedbackCard