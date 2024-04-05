import {RowData, TableOptionsResolved, createTable, TableOptions} from '@tanstack/table-core';
export function createAngularTable<TData extends RowData> (options: TableOptionsResolved<TData>) {
  let table = createTable<TData>(options);
  let state = table.initialState;

  // Compose the default state above with any user state.
  table.setOptions((prev: any) => {
    return {
      ...prev,
      ...options,
      state: {
        ...state,
        ...options.state,
      },
      onStateChange: (updater) => {
        options.onStateChange?.(updater);
      },
    };
  });

  return table;
}
