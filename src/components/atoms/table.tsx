import {
  Button,
  ListItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "../../../node_modules/@mui/material/index";

type Props = {
  tableBodyList: {
    id: number;
    title: string;
    isCompleted: string;
  }[];
};

export const TodoTable = ({ tableBodyList }: Props) => {
  const tableHeaderList = ["タイトル", "完了"];
  return (
    <TableContainer component={Paper} sx={{ width: 350 }}>
      <Table sx={{ width: 350 }}>
        <TableHead className={"bg-slate-400"}>
          <TableRow>
            {tableHeaderList.map((item, index) => (
              <TableCell key={index}>{item}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableBodyList.length > 0 ? (
            <>
              {tableBodyList.map((data) => (
                <TableRow key={data.id}>
                  <TableCell>{data.title}</TableCell>
                  <TableCell>{data.isCompleted}</TableCell>
                </TableRow>
              ))}
            </>
          ) : (
            <TableRow>
              <TableCell>タスクが存在しません</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
