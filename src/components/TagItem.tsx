import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import React, { FC, memo } from "react";

import { useAppDispatch } from "../app/hooks";
import { setEditedTag } from "../features/task/taskSlice";
import { useMutateTag } from "../hooks/useMutateTag";
import { Tag } from "../types/types";

interface Props {
  tag: Tag;
}

const TagItem: FC<Props> = ({ tag }) => {
  const dispatch = useAppDispatch();
  const { deleteTagMutation } = useMutateTag();
  console.log("rendered TagItem");
  if (deleteTagMutation.isLoading) {
    return <p>Deleting...</p>;
  }
  return (
    <li className="my-3">
      <span className="font-bold">{tag.name}</span>
      <div className="float-right ml-20 flex">
        <PencilIcon
          className="mx-1 h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            dispatch(
              setEditedTag({
                id: tag.id,
                name: tag.name
              })
            );
          }}
        />
        <TrashIcon
          className="h-5 w-5 cursor-pointer text-blue-500"
          onClick={() => {
            deleteTagMutation.mutate(tag.id);
          }}
        />
      </div>
    </li>
  );
};

export const TagItemMemo = memo(TagItem);
