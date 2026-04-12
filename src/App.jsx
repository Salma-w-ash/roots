
import { Toaster } from "react-hot-toast";
import AppRoutes from './Routes/AppRoutes'
import { Toast } from "./components/Toast";

export default function App() {
  return (
    <div>
      <Toast position="top-center" />
       <AppRoutes />
    </div>
  );
}
