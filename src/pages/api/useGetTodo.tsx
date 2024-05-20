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
    formatData.forEach((item) => {
      if (!item.is_complete) {
        setUnCompleteTodoListDate([
          {
            id: item.id,
            title: item.title,
            isCompleted: "未完了",
          },
        ]);
      } else {
        setCompleteTodoListDate([
          {
            id: item.id,
            title: item.title,
            isCompleted: "完了",
          },
        ]);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return { unCompleteTodoListDate, completeTodoListDate };
};
