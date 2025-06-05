import React from "react";
import { ManagementSectionProps, Column } from "../types";
import { managementStyles } from "../styles";

interface ExtendedManagementSectionProps extends ManagementSectionProps {
  onRowClick?: (row: any) => void;
}

const ManagementSection: React.FC<ExtendedManagementSectionProps> = ({
  title,
  columns,
  data = [],
  onViewAll,
  className = "",
  onRowClick,
}) => {
  return (
    <div className={`${managementStyles.container} ${className}`}>
      <div className={managementStyles.header}>
        <h2 className={managementStyles.title}>{title}</h2>
        {onViewAll && (
          <button onClick={onViewAll} className={managementStyles.viewAll}>
            View All
          </button>
        )}
      </div>
      <div className={managementStyles.table}>
        <table className="w-full">
          <thead>
            <tr>
              {columns.map((column: Column, index: number) => (
                <th
                  key={index}
                  className="text-left py-3 px-4 text-sm font-medium text-white/60"
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr
                key={rowIndex}
                className="border-t border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                onClick={onRowClick ? () => onRowClick(row) : undefined}
              >
                {columns.map((column: Column, colIndex: number) => (
                  <td
                    key={colIndex}
                    className="py-3 px-4 text-sm text-white/80"
                  >
                    {column.accessor(row)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagementSection;
