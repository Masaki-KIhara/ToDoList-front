import { useEffect, useState } from "react";

type ResponseDataType = {
  id: number;
  title: string;
  is_complete: boolean;
  created_at: Date;
};

type TodoDataType = {
  id: number;
  title: string;
  isCompleted: string;
};

export type PostTodoDataType = {
  title: string;
};

export const useGetTodos = () => {
  const [unCompleteTodoListDate, setUnCompleteTodoListDate] = useState<
    TodoDataType[]
  >([]);
  const [completeTodoListDate, setCompleteTodoListDate] = useState<
    TodoDataType[]
  >([]);

  const getData = async () => {
    const response = await fetch("http://127.0.0.1:8000/tasks");
    const formatData: ResponseDataType[] = await response.json();
    const unCompleteTodos = formatData.filter((item) => !item.is_complete);
    const completeTodos = formatData.filter((item) => item.is_complete);
    setUnCompleteTodoListDate(
      unCompleteTodos.map((item) => ({
        id: item.id,
        title: item.title,
        isCompleted: "未完了",
      }))
    );
    setCompleteTodoListDate(
      completeTodos.map((item) => ({
        id: item.id,
        title: item.title,
        isCompleted: "完了",
      }))
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return { unCompleteTodoListDate, completeTodoListDate, getData };
};
