import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import SelectedProject from "./components/SelectedProject";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(task){
    setProjectState(prevState=>{
      const newTask = {
        id:Math.random(),
        text:task,
        projectId:prevState.selectedProjectId
      }
      return {...prevState,
        tasks:[...prevState.tasks,newTask]}
    });
  }

  function handleDeleteTask(id){
    setProjectState(prevState=>{
      return {...prevState,
        tasks:prevState.tasks.filter(task=>task.id !== id)}
    });
  }

  function handleNewProject() {
    setProjectState(prevState=>{
      return {...prevState,selectedProjectId:null}
    });
  }
  function handleCancelClick() {
    setProjectState(prevState=>{
      return {...prevState,selectedProjectId:undefined}
    });
  }
  function handleDeleteProject(id){
    setProjectState(prevState=>{
      return {...prevState,
        selectedProjectId:undefined,
        projects:prevState.projects.filter(project=>project.id !== id)}
    });
  }
  function handleAddProject(projectData){
    setProjectState(prevState=>{
      const newProject = {
        id:Math.random(),
        ...projectData,
        
      
      }
      return {...prevState,
        selectedProjectId:undefined,projects:[...prevState.projects,newProject]}
    });
  }

  function handleSelectProject(id){ 
    setProjectState(prevState=>{
      return {...prevState,selectedProjectId:id}
    });
  }

  let content = <SelectedProject project={projectState.projects.find(project=>project.id === projectState.selectedProjectId)} onDeleteClick={handleDeleteProject}
  onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}
  />;

  if(projectState.selectedProjectId === null){
    content = <NewProject onCancelClick={handleCancelClick} onSaveClick={handleAddProject}/>;
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected addNewProject={handleNewProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={handleSelectProject} addNewProject={handleNewProject} projects={projectState.projects} selectedProjectId={projectState.selectedProjectId}/>
      {content}
    </main>
  );
}

export default App;
