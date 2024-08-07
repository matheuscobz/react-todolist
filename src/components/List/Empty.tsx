import clipboard from '../../../public/Clipboard.png'

export function Empty(){
  return(
    <div className="flex flex-col justify-center items-center bg-[--gray-600] px-16 py-4 rounded-lg gap-4 text-[--gray-300]">
      <img src={clipboard} alt="" />
      <p className="flex flex-col">
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}