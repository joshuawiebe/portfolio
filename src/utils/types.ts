import type { Language } from '../i18n/translations';
export type { Language };

export interface Section {
  id: string;
  title: string;
  translateKey?: string;
}

export interface NavItem {
  href: string;
  label: string;
  translateKey: string;
}