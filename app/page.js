// Fetchin the Api in server side in initial Load
import TodoClient from "@/components/todo/TodoClient";
import { db } from "@/connection/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

async function fetchTodos() {
  const snapshot = await getDocs(collection(db, "todos"));
  const todos = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return todos;
}

export default async function TodosPage() {
  // Fetching data on the server
  const todos = await fetchTodos();

  // Pass to Todo-Client Component
  // return <TodoClient initialTodos={todos} />;
  return <TodoClient />;
}
