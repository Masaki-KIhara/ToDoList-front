import {
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "../../node_modules/@mui/material/index";

type Props = {
  title: string;
  tableBodyList: {
    id: number;
    title: string;
    isCompleted: string;
  }[];
};

export const TodoTable = ({ title, tableBodyList }: Props) => {
  const tableHeaderList = ["タイトル", "完了"];
  return (
    <>
      <h1 className={"text-center mb-[10px] font-bold"}>{title}</h1>
      <TableContainer
        className={"block mx-auto"}
        component={Paper}
        sx={{ width: 350 }}
      >
        <Table sx={{ width: 350 }}>
          <TableHead>
            <TableRow>
              {tableHeaderList.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableBodyList.map((data) => (
              <TableRow key={data.id}>
                <TableCell>{data.title}</TableCell>
                <TableCell>{data.isCompleted}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
