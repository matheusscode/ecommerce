import {
  Table as ShadcnTable,
  TableBody,
  TableHeader,
  TableRow as ShadcnTableRow,
} from "@/components/ui/table";
import TableHead, { Column } from "./table-head";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import TableRow from "./table-row";

export interface TableProps<T> extends HTMLAttributes<HTMLTableElement> {
  columns: Column[];
  data: T[];
}

export function Table<T>({
  className,
  data,
  columns,
  ...props
}: TableProps<T>) {
  return (
    <ShadcnTable
      {...props}
      draggable="false"
      className={cn("w-full select-none", className)}
    >
      <TableHeader className="sticky top-0">
        <ShadcnTableRow>
          {columns?.map((column) => (
            <TableHead key={column.id} column={column} />
          ))}
        </ShadcnTableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, index) => (
          <TableRow
            className="border-0"
            key={index}
            data={row}
            columns={columns}
          />
        ))}
      </TableBody>
    </ShadcnTable>
  );
}

export default Table;
