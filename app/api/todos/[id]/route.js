import { db } from "@/connection/firebaseConfig";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;

  if (id) {
    try {
      const todoRef = doc(db, "todos", id);
      await deleteDoc(todoRef);
      return NextResponse.json({ message: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Failed to delete todo" });
    }
  } else {
    res.setHeader("Allow", ["DELETE"]);
    return NextResponse.json({ message: "Todo deleted unsuccessfully" });
  }
}

export async function PATCH(req, { params }) {
  const { id } = params; //  `id` from params

  console.log(`PATCH`, id);

  if (id) {
    try {
      const requestBody = await req.json(); // Parse the incoming request body
      const { completed } = requestBody; // Get 'completed' value from the request body

      await updateDoc(doc(db, "todos", id), {
        completed: !completed, // Toggle the 'completed' value
      });

      // Return success response
      return NextResponse.json({ message: "Todo updated successfully" });
    } catch (error) {
      console.error("Error updating todo:", error);

      // Return error response
      return NextResponse.json(
        { error: "Failed to update todo" },
        { status: 500 }
      );
    }
  } else {
    // Return failure response if no id is provided
    return NextResponse.json(
      { message: "Todo update unsuccessful" },
      { status: 400 }
    );
  }
}
