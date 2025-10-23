export type Theme = 'light' | 'dark';
export type Language = 'en' | 'de';

export interface ThemeState {
  theme: Theme;
  language: Language;
}

export interface Section {
  id: string;
  title: string;
  translateKey: string;
}

export interface NavItem {
  href: string;
  label: string;
  translateKey: string;
}

export interface AnimationConfig {
  duration?: number;
  delay?: number;
  easing?: string;
  threshold?: number;
}