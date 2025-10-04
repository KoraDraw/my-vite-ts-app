import React, { useState } from "react";
import type { ChangeEvent } from "react";

interface PostLengthFilterProps {
  onFilterChange: (minLength: number) => void;
}

export const PostLengthFilter: React.FC<PostLengthFilterProps> = ({
  onFilterChange,
}) => {
  const [value, setValue] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = Number(e.target.value);
    setValue(val);
    onFilterChange(val);
  };

  return (
    <div>
      <label>
        Минимальная длина заголовка:
        <input type="number" value={value} onChange={handleChange} min={0} />
      </label>
    </div>
  );
};
