import { Button, ButtonProps } from "../ui/button";

export interface SinalizationActionsProps {
  actions: ButtonProps[];
}

const SinalizationActions = ({ actions }: SinalizationActionsProps) => {
  return (
    <>
      {actions.map((action) => (
        <Button
          key={action.id}
          size="icon"
          className="rounded-full"
          {...action}
        />
      ))}
    </>
  );
};

export default SinalizationActions;
