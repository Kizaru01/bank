export interface HeaderBoxProps {
  type?: "title" | "Greeting";
  title: string;
  subtext: string;
  user?: string;
}
export interface TotalBalanceBoxProps {
  accounts: Account[];
  totalBanks: number;
  totalCurrentBalance: number;
}
export interface DoughnutChartProps {
  accounts: Account[];
}