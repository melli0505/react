import React, { useCallback, useState } from "react";
import { MdSubdirectoryArrowLeft } from "react-icons/md";
import "./CommentInsert.scss";

const CommentInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  // onClick 이벤트로도 만들 수 있다. submit으로 하는 이유는 enter키에도 반응하기 때문임.
  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault(); // 새로고침 발생 방지
    },
    [onInsert, value]
  );
  return (
    <form className="Comment" onSubmit={onSubmit}>
      {/* <div> */}
        <input
          placeholder="댓글을 입력하세요."
          value={value}
          onChange={onChange}
        />
        <button type="submit">
          <MdSubdirectoryArrowLeft />
        </button>
      {/* </div> */}
    </form>
  );
};

export default CommentInsert;
