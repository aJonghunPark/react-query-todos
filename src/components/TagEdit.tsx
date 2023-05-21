import React, { FC, FormEvent, memo } from "react";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { selectTag, setEditedTag } from "../features/task/taskSlice";
import { useMutateTag } from "../hooks/useMutateTag";

const TagEdit: FC = () => {
  const editedTag = useAppSelector(selectTag);
  const dispatch = useAppDispatch();
  const { createTagMutation, updateTagMutation } = useMutateTag();
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editedTag.id === 0) {
      createTagMutation.mutate(editedTag);
    } else {
      updateTagMutation.mutate(editedTag);
    }
  };
  console.log("rendered TagEdit");
  if (updateTagMutation.isLoading) {
    return <span>Updating...</span>;
  }
  if (createTagMutation.isLoading) {
    return <span>Creating...</span>;
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          className="mb-3 border border-gray-300 px-3 py-2"
          placeholder="new tag ?"
          type="text"
          onChange={(e) =>
            dispatch(setEditedTag({ ...editedTag, name: e.target.value }))
          }
          value={editedTag.name}
        />
        <button
          className="my-3 mx-3 rounded bg-indigo-600 py-2 px-3 text-white hover:bg-indigo-700 disabled:opacity-40"
          disabled={!editedTag.name}
        >
          {editedTag.id === 0 ? "Create" : "Update"}
        </button>
      </form>
    </div>
  );
};

export const TagEditMemo = memo(TagEdit);
