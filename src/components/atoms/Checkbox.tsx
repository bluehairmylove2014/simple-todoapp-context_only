"use client";

type checkboxParams = {
  tid: number;
  defaultValue?: boolean;
  onChange: (params: any) => void;
};
function Checkbox({ tid, defaultValue, onChange }: checkboxParams) {
  return (
    <div className=" cursor-pointer">
      <input
        className=" cursor-pointer"
        type="checkbox"
        defaultChecked={defaultValue}
        onChange={(e) => {
          onChange({ taskId: tid, value: e.target.checked });
        }}
      />
    </div>
  );
}

export default Checkbox;
