import { useCallback, useState } from "react";
import {
  createSearchParams,
  parsePath,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) return defaultValue;
  return parseInt(param);
};
//todo/list?page=3&size=10
const useCustomMove = () => {
  const navigate = useNavigate();
  const [refresh, setreFresh] = useState(false);
  const [queryParams] = useSearchParams();

  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({ page, size }).toString();
  //목록 조회로 이동
  const moveToList = useCallback((pageParam) => {
    //{page:3, size:20}
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);
      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
      //   navigate(`todo/list?page=3&size=10`) , 등록후 자동으로 목록조회
    } else {
      queryStr = queryDefault;
    }
  });
  //수정, 삭제로 이동할수 있는 기능 추가
  const moveToModify = useCallback(
    (num) => {
      console.log(queryDefault);
      navigate({ pathname: `../modify/${num}`, search: queryDefault });
    },
    [page, size]
  );
  const moveToRead = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `:/read/${num}`,
      search: queryDefault,
    });
  };
  return { moveToList, moveToModify, page, size, refresh };
};

export default useCustomMove;
