import { TodoTable } from "@/components/table";
import { useGetTodos } from "./api/useGetTodo";

export default function Home() {
  const { unCompleteTodoListDate, completeTodoListDate } = useGetTodos();
  return (
    <>
      <TodoTable
        title={"未完了タスク一覧"}
        tableBodyList={unCompleteTodoListDate}
      />

      <TodoTable
        title={"完了タスク一覧"}
        tableBodyList={completeTodoListDate}
      />
    </>
  );
}
