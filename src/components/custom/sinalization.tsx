import { Alert, AlertDescription, AlertTitle } from "../ui/alert";
import { tv, VariantProps } from "tailwind-variants";
import { ElementType, HTMLAttributes } from "react";
import { Button } from "../ui/button";

const sinalization = tv({
  base: "flex max-w-[500px] w-full justify-betweem   py-2 px-4",
  variants: {
    status: {
      success: "bg-semantic-g100 text-semantic-g900 hover:bg-semantic-g200",
      error: "bg-semantic-r100 text-semantic-r900 hover:bg-semantic-r200",
      warning: "bg-semantic-y100 text-semantic-y900 hover:bg-semantic-y200",
      info: "bg-semantic-b100 text-semantic-b900 hover:bg-semantic-b200",
      dark: "bg-neutral-800 text-white hover:bg-neutral-900",
      light: "hover:bg-neutral-50",
    },
  },
  defaultVariants: {
    status: "light",
  },
});

export interface SinalizationProps
  extends VariantProps<typeof sinalization>,
    HTMLAttributes<HTMLDivElement> {
  icon?: ElementType;
  title?: string;
  description?: string;
}

const Sinalization = ({
  status,
  className,
  icon: Icon,
  title,
  description,
  children,
  ...props
}: SinalizationProps) => {
  return (
    <Alert className={sinalization({ status, className })} {...props}>
      <div className="flex h-full  my-auto">{Icon && <Icon />}</div>
      <div className="flex ml-4 mr-2 mt-1 flex-col gap-0.5 w-full h-full">
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription className="line-clamp-2 break-words whitespace-break-spaces">
          {description}
        </AlertDescription>
      </div>
      <div className="flex items-center gap-2 pl-0">{children}</div>
    </Alert>
  );
};

export default Sinalization;
