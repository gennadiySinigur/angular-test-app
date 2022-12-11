import Chart from 'chart.js/auto';

export type LineChart = Chart<"line", string[] | { x: string; y: number; }[], string> | undefined;
