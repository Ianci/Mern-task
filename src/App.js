import { AppRoutes } from "./routes/AppRoutes";
import { TaskState } from './context/task/taskState'
import { UiState } from './context/ui/uiState'
import { TodoState } from './context/todos/todoState'
import { AuthState } from './context/auth/authState'
function App() {
  
  return (
    <TaskState>
      <UiState>
        <TodoState>
          <AuthState>

            <AppRoutes />
        
          </AuthState>
        </TodoState>
      </UiState>  
    </TaskState>
  );
}

export default App;
