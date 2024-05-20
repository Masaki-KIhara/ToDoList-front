import { TodoTable } from "@/component/table";
import { useGetTodos } from "./api/useGetTodo";

export default function Home() {
  const { unCompleteTodoListDate, completeTodoListDate } = useGetTodos();
  return (
    <>
      <div className="mt-12">
        <TodoTable
          title={"未完了タスク一覧"}
          tableBodyList={unCompleteTodoListDate}
        />
      </div>
      <div className="mt-12">
        <TodoTable
          title={"完了タスク一覧"}
          tableBodyList={completeTodoListDate}
        />
      </div>
    </>
  );
}
