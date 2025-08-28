import React, { useState } from "react";
import data from "./data";
import { Badge, Card, Container, Spinner, Tab, Table } from "react-bootstrap";
const CompleteTest = () => {
  const [first, setFirst] = useState([
    { title: "오늘", complete: true, tno: 3 },
    { title: "내일", complete: false, tno: 23 },
    { title: "모레", complete: true, tno: 11 },
    { title: "어제", complete: true, tno: 8 },
    { title: "글피", complete: true, tno: 100 },
    { title: "내일모레", complete: true, tno: 1000 },
  ]);

  return (
    <Container className="py-4">
      <Table>
        <tbody>
          {first &&
            first.map((i) => (
              <tr key={i.tno}>
                <td className="text-muted">#{i.title}</td>
                <td>
                  <Badge
                    className={
                      i.complete
                        ? "badge rounded-pill bg-primary"
                        : "badge rounded-pill bg-danger"
                    }
                    pill
                    onClick={() =>
                      setFirst((arr) =>
                        arr.map((obj) =>
                          obj.tno === i.tno
                            ? { ...obj, complete: !obj.complete }
                            : obj
                        )
                      )
                    }
                  >
                    {i.complete ? "완료" : "미완료"}
                  </Badge>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </Container>
  );
};
//first에는 객체 배열이 들어 있고 각각의 button 마다 first에 들어 있는 것은 배열이고
//그 배열을  setFirst에서는 하나를 꺼내면  배열이고  button을 누르는것이 어떤 tno와
// 같은지 확인하고
//같은  tno를 찾아서  !를 활용하여 toggle함

export default CompleteTest;
