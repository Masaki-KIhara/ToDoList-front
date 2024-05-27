import { PostTodoDataType } from "./useGetTodo";

export const usePostTodo = (
  getData: () => void,
  setIsOpenModal: (value: boolean) => void
) => {
  const postData = async (body: PostTodoDataType) => {
    fetch("http://127.0.0.1:8000/register_task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((res) => {
      if (res.ok) {
        setIsOpenModal(false);
        getData();
      } else {
        console.log("エラー");
      }
    });
  };
  return { postData };
};
