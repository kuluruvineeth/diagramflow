import { TemplateEnum } from "@/lib/prompt-by-template";
import { FunctionComponent } from "react";

interface ITemplate {
  label: string;
  value: TemplateEnum;
}

export const templates: ITemplate[] = [
  { label: "Flowchart", value: TemplateEnum.FLOWCHART },
  { label: "Mindmap", value: TemplateEnum.MINDMAP },
  { label: "Timeline", value: TemplateEnum.TIMELINE },
  { label: "User Journey", value: TemplateEnum.USERJOURNEY },
  { label: "Entity Relationship", value: TemplateEnum.ENTITYRELATIONSHIP },
  { label: "Sequence Diagram", value: TemplateEnum.SEQUENCE },
  { label: "State Diagram", value: TemplateEnum.STATE },
];

interface ISelectTemplate {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectTemplate: FunctionComponent<ISelectTemplate> = ({ onChange }) => {
  return (
    <select onChange={onChange} className="select select-bordered select-lg">
      {templates.map((item) => (
        <option value={item.value} key={item.label}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default SelectTemplate;
