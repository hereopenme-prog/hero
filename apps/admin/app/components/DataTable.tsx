import React from 'react';

interface Column<T = Record<string, unknown>> {
  key?: string;
  label?: string;
  header?: string;
  accessor?: (item: T) => React.ReactNode;
  render?: (item: T) => React.ReactNode;
  className?: string;
}

interface DataTableProps<T = Record<string, unknown>> {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
}

export function DataTable<T = Record<string, unknown>>({ columns, data, onRowClick }: DataTableProps<T>) {
  if (data.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/[0.06]">
            {columns.map((col, i) => (
              <th
                key={col.key || i}
                className={`text-left py-3 px-4 text-[11px] font-semibold text-muted uppercase tracking-wider ${col.className || ''}`}
              >
                {col.label || col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr
              key={i}
              onClick={() => onRowClick?.(item)}
              className={`border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors ${onRowClick ? 'cursor-pointer' : ''}`}
            >
              {columns.map((col, j) => {
                const renderFn = col.render || col.accessor;
                return (
                  <td key={col.key || j} className={`py-3.5 px-4 text-[13px] ${col.className || ''}`}>
                    {renderFn ? renderFn(item) : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
