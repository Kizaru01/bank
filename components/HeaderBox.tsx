import { HeaderBoxProps } from "@/Types/header";

const HeaderBox = ({type, title, user, subtext}: HeaderBoxProps) => {
  return (
    <div className="flex flex-col gap-1 border border-b-emerald-500">
      <h1 className="text-[24px] lg:text-[30px] font-semibold text-gray-900 border border-b-fuchsia-600">
          {title}
          {type === 'Greeting' && <span className="text-p1">&nbsp;{user}</span>}
        </h1>
        <p className="text-[14px] lg:text-[16px] font-normal text-gray-600">{subtext}</p>
    </div>
  )
}

export default HeaderBox; 