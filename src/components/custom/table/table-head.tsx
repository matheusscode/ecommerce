import { Icon, Icons } from "@/components/icon";
import { HTMLAttributes } from "react";
import { TableHead as ShadcnTable } from "@/components/ui/table";
import Span from "@/components/typography/span";
import { Button } from "@/components/ui/button";

export type Column = {
  width?: string | number;
  align?: "left" | "center" | "right";
  label?: string;
  icon?: Icons;
  showIcon?: boolean;
  id: string;
};

export interface TableHeadProps
  extends HTMLAttributes<HTMLTableHeaderCellElement> {
  column: Column;
}

const TableHead = ({ className, column, ...props }: TableHeadProps) => {
  const { align, icon, label, showIcon = false, width } = column;

  return (
    <ShadcnTable
      className="py-3"
      style={{
        textAlign: align,
        width: width,
        minWidth: width,
        maxWidth: width,
      }}
      {...props}
    >
      {showIcon && (
        <Button className="hover:bg-transparent" size="icon" variant="ghost">
          <Icon icon={icon as Icons} />
        </Button>
      )}
      <Span>{label}</Span>
    </ShadcnTable>
  );
};

export default TableHead;
