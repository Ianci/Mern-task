import { AppRoutes } from "./routes/AppRoutes";
import { TaskState } from './context/task/taskState'
import { UiState } from './context/ui/uiState'
import { TodoState } from './context/todos/todoState'
function App() {
  return (
    <TaskState>
      <UiState>
        <TodoState>

          <AppRoutes />
        
        </TodoState>
      </UiState>  
    </TaskState>
  );
}

export default App;
