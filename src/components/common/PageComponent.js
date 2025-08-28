import React from "react";

const PageComponent = ({ serverData, movePage }) => {
  console.log(serverData);
  return (
    <div>
      <div className="m-6 flex justify-center">
        {serverData.prev ? (
          <div
            className="m-2 p-2 w-16 text-center font-bold text-blue-400"
            onClick={() => movePage({ page: serverData.prevPage })}
          >
            이전
          </div>
        ) : (
          <></>
        )}
        {serverData.pageNumList.map((i) => (
          <div
            key={i}
            className={`m-2 p-2 w-12 text-center rounded shadow-md text-white
                ${serverData.current === i ? "bg-gray-500" : "bg-blue-400"}`}
            onClick={() => movePage({ page: i })}
          >
            {i}
          </div>
        ))}
        {serverData.next ? (
          <div
            className="m-2 p-2 w-16 text-center font-bold text-blue-400"
            onClick={() => movePage({ page: serverData.nextPage })}
          >
            다음
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default PageComponent;
