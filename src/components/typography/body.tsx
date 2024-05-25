import { cn } from "@/lib/utils";

export interface BodyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  text?: string;
}

const Body = ({ className, text, children, ...props }: BodyProps) => {
  return (
    <p
      className={cn("!text-b !font-b !leading-b !select-none", className)}
      {...props}
    >
      {children || text}
    </p>
  );
};

export default Body;
