export interface FilterOption {
  id: string;
  label: string;
  value: string;
  icon?: string;
}

export interface FilterGroup {
  id: string;
  title: string;
  description?: string;
  type: 'multi' | 'single' | 'range';
  options: FilterOption[];
}
