import { ChevronDoubleRightIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useNavigate } from "react-router-dom";

import { useQueryTasks } from "../hooks/useQueryTasks";

export const ReactQueryA: React.FC = () => {
  const navigate = useNavigate();
  const { status, data } = useQueryTasks();
  console.log("rendered ReactQueryA");
  if (status === "loading") return <div>{"Loading..."}</div>;
  if (status === "error") return <div>{"Error"}</div>;
  return (
    <>
      <p className="my-3 font-bold">ReactQueryA</p>
      {data?.map((task) => (
        <p key={task.id}>{task.title}</p>
      ))}
      <ChevronDoubleRightIcon
        onClick={() => navigate("/query-b")}
        className="mt-2 h-5 w-5 cursor-pointer text-blue-500"
      />
      <p className="text-sm">react query B</p>
    </>
  );
};
