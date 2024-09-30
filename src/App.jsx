import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectSidebar from "./components/ProjectSidebar";
import { useState } from "react";
function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  });
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

  let content;

  if(projectState.selectedProjectId === null){
    content = <NewProject onCancelClick={handleCancelClick} onSaveClick={handleAddProject}/>;
  }
  else if(projectState.selectedProjectId === undefined){
    content = <NoProjectSelected addNewProject={handleNewProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSidebar onSelectProject={handleSelectProject} addNewProject={handleNewProject} projects={projectState.projects}/>
      {content}
    </main>
  );
}

export default App;
