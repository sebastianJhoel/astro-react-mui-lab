export const colorTokens = {
  primary: '#1976d2',
  secondary: '#673ab7',
  accent: '#ffc107',
} as const;

export type ColorToken = keyof typeof colorTokens;
