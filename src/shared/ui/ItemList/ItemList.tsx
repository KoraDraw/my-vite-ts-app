import type { ReactNode } from "react";

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  className?: string;
}

export function ItemList<T>({
  items,
  renderItem,
  className,
}: ItemListProps<T>) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={index}>{renderItem(item, index)}</li>
      ))}
    </ul>
  );
}
