import { AppRoutes } from "./routes/AppRoutes";
import { TaskState } from './context/task/taskState'
import { UiState } from './context/ui/uiState'
import { TodoState } from './context/todos/todoState'
import { AuthState } from './context/auth/authState'
import { tokenAuth } from "./config/authToken";

function App() {
  
  const token = localStorage.getItem('token');
  if(token){
    tokenAuth(token)
  }
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
