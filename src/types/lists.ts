export interface List {
  active: boolean;
  items: ListItems;
}

export interface ListItem {
  active: boolean;
  count: number;
  color: string;
}

export type Lists = Record<string, List>;
export type ListItems = Record<string, ListItem>;
