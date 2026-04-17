export interface TalkMetadata {
  title: string;
  speaker: string;
  year: number;
  category: string;
  tags: string[];
  language: string;
  level: string;
  event: string;
  date: string;
  description: string;
}

export const GDG_COLORS = {
  blue: '#4285F4',
  red: '#EA4335',
  yellow: '#FBBC04',
  green: '#34A853',
  grey: {
    50: '#F8F9FA',
    100: '#F1F3F4',
    200: '#E8EAED',
    300: '#DADCE0',
    400: '#BDC1C6',
    500: '#9AA0A6',
    600: '#80868B',
    700: '#5F6368',
    800: '#3C4043',
    900: '#202124'
  }
};
