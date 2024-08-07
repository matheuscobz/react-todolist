import { Plus } from "lucide-react";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Header as ListHeader } from './components/List/Header'
import { Input } from "./components/Input";
import { useState } from "react";
import { Item } from "./components/List/Item";
import { Empty } from "./components/List/Empty";


export interface ITask {
  id: number
  text: string,
  isChecked: boolean
}

export function App() {
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<ITask[]>([])

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if(currentTask.isChecked) {
      return prevValue + 1
    }

    return prevValue
  }, 0)


  function handleAddTask(){
    if (!inputValue) {
      return
    }
    
    const newTask: ITask = {  
      id: new Date().getTime(),
      text: inputValue,
      isChecked: false
    }

    setTasks((state) => [...state, newTask])
    console.log(inputValue)
    setInputValue('')
  }

  function handleRemoveTask(id: number) {
    const filteredTasks = tasks.filter((task) => task.id !== id)

    if (!confirm('Deseja mesmo apagar essa tarefa?')) {
      return
    }

    setTasks(filteredTasks)
  }

  function handleToggleTask({id, value}: {id: number; value:boolean}){
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {...task, isChecked: value}
      }

      return {...task}
    })

    setTasks(updatedTasks)
  }

  return (
    <main className="bg-[--gray-600] h-screen">
      <Header />

      <section className="mx-0 my-auto w-screen  bg-[--gray-700] ">
        <div className="flex justify-center gap-2 transform w-screen translate-y-1/2 ">
          <Input 
            onChange={(e) => setInputValue(e.target.value)}
            value={inputValue}
          />
          <Button onClick={handleAddTask}>
            Criar
            <Plus className="size-4" color="#f2f2f2" />
          </Button>
        </div>

        <div className="flex flex-col gap-6 bg-[--gray-600] justify-center items-center">
         <ListHeader 
            checkedTasksCounter={checkedTasksCounter}
            tasksCounter={tasks.length}
         /> 
         {tasks.length > 0 ? (
          <div className="flex flex-col gap-3">
            {tasks.map((task) => (
              <Item 
                key={task.id}
                data={task}
                removeTask={handleRemoveTask}
                toggleTaskStatus={handleToggleTask}
              />
            ))}
          </div>
         ): (
          <Empty />
         ) }
        </div>
      </section>
    </main>

  )
}