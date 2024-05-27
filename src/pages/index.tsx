import { TodoTable } from "@/components/atoms/table";
import { useState } from "react";
import {
  Box,
  Button,
  Modal,
  TextField,
} from "../../node_modules/@mui/material/index";
import { useGetTodos } from "./api/useGetTodo";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { usePostTodo } from "./api/usePostTodo";

type FormValues = {
  title: string;
};

export default function Home() {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const { unCompleteTodoListDate, completeTodoListDate, getData } =
    useGetTodos();
  const { postData } = usePostTodo(getData, setIsOpenModal);
  const { handleSubmit, control, reset } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    postData(data);
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
      <div className="grid mt-10 justify-center">
        <h1 className="text-center font-bold">未完了タスク一覧</h1>
        <div className="text-right">
          <Button
            variant="contained"
            className="w-10 text-right h-[30px] mb-[10px]"
            onClick={() => {
              setIsOpenModal(true);
              reset({ title: "" });
            }}
          >
            登録
          </Button>
        </div>
        <TodoTable tableBodyList={unCompleteTodoListDate} />
      </div>
      <div className="grid justify-center mt-20">
        <h1 className="text-center font-bold">完了タスク一覧</h1>
        <TodoTable tableBodyList={completeTodoListDate} />
      </div>
      <Modal
        open={isOpenModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 className={"font-bold mb-10"}>タスク名登録</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              control={control}
              name={"title"}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={"タスク名"}
                  className={"w-[90%]"}
                  name={field.name}
                  value={field.value}
                />
              )}
            />
            <div className="flex justify-center gap-10 mt-10">
              <Button
                type={"button"}
                onClick={() => {
                  setIsOpenModal(false);
                  reset({ title: "" });
                }}
                variant="text"
                className="w-[20%] text-right"
              >
                キャンセル
              </Button>
              <Button
                type={"submit"}
                variant="contained"
                className="w-[20%] text-right"
              >
                登録
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </>
  );
}
