// src/hooks/useTasks.js
import { useState, useEffect } from "react";
import { collection, addDoc, deleteDoc, doc, updateDoc, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../AuthProvider";
import { v4 as uuidv4 } from "uuid";

export default function useTasks() {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (!user) return;

    const q = query(collection(db, "tasks"), where("userId", "==", user.uid));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const updatedTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(updatedTasks);
    });

    return () => unsubscribe(); // Cleanup listener
  }, [user]);

  const addTask = async (task) => {
    if (!user) return;
    await addDoc(collection(db, "tasks"), {
      ...task,
      userId: user.uid,
      completed: false,
    });
  };

  const deleteTask = async (id) => {
    await deleteDoc(doc(db, "tasks", id));
  };

  const updateTask = async (id, updates) => {
    await updateDoc(doc(db, "tasks", id), updates);
  };

  return { tasks, addTask, deleteTask, updateTask };
}
