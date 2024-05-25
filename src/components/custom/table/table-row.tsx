import { TableRow as ShadcnTableRow, TableCell } from "@/components/ui/table";
import { Column } from "./table-head";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  columns: Column[];
  data: any;
}

export const TableRow = ({
  className,
  columns,
  data,
  ...props
}: TableRowProps) => {
  return (
    <ShadcnTableRow {...props} className={cn("w-full", className)}>
      {columns.map((column) => (
        <TableCell
          key={column.id}
          className="py-4"
          style={{
            textAlign: column.align,
            width: column.width,
            minWidth: column.width,
            maxWidth: column.width,
          }}
        >
          <div
            className="whitespace-nowrap"
            style={{
              textAlign: column.align,
              lineClamp: 1,
              textOverflow: "ellipsis",
              overflow: "hidden",
            }}
          >
            {data[column.id]}
          </div>
        </TableCell>
      ))}
    </ShadcnTableRow>
  );
};

export default TableRow;
