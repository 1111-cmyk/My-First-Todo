// app/api/todos/route.js
import { db } from "@/connection/firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

export async function POST(request) {
  const { text, completed } = await request.json();
  try {
    const docRef = await addDoc(collection(db, "todos"), { text, completed });
    return new Response(JSON.stringify({ id: docRef.id, text, completed }), {
      status: 200,
    });
  } catch (error) {
    return new Response("Failed to create todo", { status: 500 });
  }
}
