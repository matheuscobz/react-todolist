interface Props{ 
  tasksCounter: number
  checkedTasksCounter: number
}

export function Header({tasksCounter, checkedTasksCounter}:Props){
  return (
    <header className="flex justify-evenly items-center gap-2 bg-[--gray-600] ">
      <aside className="text-[--blue] flex justify-between items-center gap-2 mt-12 ">
        <p className="font-bold ">Tarefas criadas</p>
        <span className="px-2 bg-[--gray-400] rounded-2xl font-bold">{tasksCounter}</span>
      </aside>
      <aside className="text-[--purple] flex justify-center items-center gap-2   mt-12 ">
        <p className="font-bold">Concluídas</p>
        <span className="px-2  rounded-2xl bg-[--gray-400] font-bold">
        {
          tasksCounter === 0
          ? tasksCounter 
          : `${checkedTasksCounter} de ${tasksCounter}`
        } </span>
      </aside>
    </header>
  )
}