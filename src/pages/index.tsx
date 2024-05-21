import { TodoTable } from "@/components/atoms/table";
import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
} from "../../node_modules/@mui/material/index";
import { useGetTodos } from "./api/useGetTodo";
import { useForm, SubmitHandler } from "react-hook-form";

type FormValue = {
  title: string;
};

export default function Home() {
  const { unCompleteTodoListDate, completeTodoListDate } = useGetTodos();
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { handleSubmit } = useForm();
  const openModal = () => {
    setIsOpenModal(true);
  };
  const closeModal = () => {
    setIsOpenModal(false);
  };
  const onSubmit: SubmitHandler<FormValue> = (data) => {
    console.log(data);
  };
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      <div className="grid justify-center">
        <h1 className="text-center font-bold">未完了タスク一覧</h1>
        <div className="text-right">
          <Button
            variant="contained"
            className="w-10 text-right h-[30px] mb-[10px]"
            onClick={openModal}
          >
            登録
          </Button>
        </div>
        <TodoTable tableBodyList={unCompleteTodoListDate} />
      </div>
      <div className="grid justify-center mt-20">
        <h1 className="text-center font-bold">完了タスク一覧</h1>
        <TodoTable tableBodyList={completeTodoListDate} />{" "}
      </div>
      <Modal
        open={isOpenModal}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className={"font-bold mb-10"}>タスク名登録</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex gap-10">
            <TextField label={"タスク名"} className={"w-[50%]"} />
            <Button
              type={"submit"}
              variant="contained"
              className="w-10 text-right"
            >
              登録
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
}
