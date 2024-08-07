import { Trash } from "lucide-react";
import { ITask } from "../../App";
import classNames from "classnames";

interface Props {
  data: ITask
  removeTask: (id: number) => void
  toggleTaskStatus: ({id, value}:{id: number; value: boolean}) => void

}

export function Item({data, removeTask, toggleTaskStatus}:Props){ 
  function handleTaskToggle(){
    toggleTaskStatus({id: data.id, value: !data.isChecked})
    console.log('cliquei')
  }

  function handleRemove() {
    removeTask(data.id)
  }

  const checkboxCheckedClassname = data.isChecked
  ? ''// classe para checked
  : 'bg-gray-300 text-white'; // classe para unchecked

  const paragraphCheckedClassname = data.isChecked
  ? 'text-[--purple] line-through' // classe para checked
  : 'text-[--blue]';

  
  return (
    <div className="flex flex-row flex-1 gap-4 bg-[--gray-500] border-solid  border-[1px] border-[--gray-400] rounded-lg p-4 items-center justify-between max-w-96">
      <div className="flex justify-center ">
        <label htmlFor="checkbox" onClick={handleTaskToggle} className="flex items-center justify-between gap-4 p-2">
          <input type="checkbox" readOnly checked={data.isChecked} />
          <span className={classNames(checkboxCheckedClassname, classNames)}>
            {data.isChecked}
          </span>
          
          <p className={classNames(paragraphCheckedClassname, classNames)}>
            {data.text}
          </p>
        </label>
      </div>
      <button onClick={handleRemove}>
        <Trash size={14} color="#d45d5d"/>
      </button>
    </div>
  )
} 