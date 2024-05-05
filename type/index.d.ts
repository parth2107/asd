declare interface HeaderBoxProps {
    type?:'title' | 'greeting';
    title: string;
    subtext: string;
    user?: string;
}

declare interface TotalBalanceBoxProps {
    accounts: [];
    totalBanks: number;
    totalCurrentBalance: number;
}

declare interface DoughnutChartProps {
    accounts: [];
}

declare interface SideBarProps {
    user: {firstName: string, lastName: string}
}

declare interface MobileNavProps {
    user: {firstName: string, lastName: string}
}