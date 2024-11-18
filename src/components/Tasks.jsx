import NewTask from "./NewTask"

export default function Tasks({tasks,onAddTask,onDeleteTask}) {
    return <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask onDeleteTask={onDeleteTask} onAddTask={onAddTask}/>
        {tasks.length > 0 ? <ul className="p-4 mt-8 rounded-md bg-stone-100">
            {tasks.map(task=><li key={task.id} className="flex items-center justify-between border-b-2 border-stone-300 py-2">
                <p className="text-stone-800">{task.text}</p>
                <button className="text-stone-700 hover:text-red-500" onClick={()=>onDeleteTask(task.id)}>Delete</button>
            </li>)}
        </ul> : <p className="text-stone-800 my-4">This project doesn't have any task</p>}
        
    </section>
}