import { AppRoutes } from "./routes/AppRoutes";
import { TaskState } from './context/task/taskState'
import { UiState } from './context/ui/uiState'

function App() {
  return (
    <TaskState>
      <UiState>
        <AppRoutes />
      </UiState>  
    </TaskState>
  );
}

export default App;
