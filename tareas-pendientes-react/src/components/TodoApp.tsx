import { useState } from "react"
import { ListaTareas } from "./Listatareas";

export const TodoApp = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("")
  const [listaTareas,setListaTareas] = useState<string[]>([])
  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return;
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea]);
    setNuevaTarea("");
  };
  const handleBorrarTarea = (index: number) => {
    setListaTareas(tareas => tareas.filter((_, i) => i !== index));
  };

  return (
    <div className="flex">
      <h1>Lista de tareas</h1>
      <div className="flex">
        <input type="text" 
        value={nuevaTarea} 
        onChange={(e) => setNuevaTarea(e.target.value)} 
        placeholder="Nueva tarea" 
        />

        <button onClick={handleAddTask}>Agregar tarea</button>
      </div>

      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  )
}