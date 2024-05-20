declare type SignUpParams = {
    firstName?: string;
    lastName?: string;
    address1?: string;
    city?: string;
    state?: string;
    postalCode?: string;
    dateOfBirth?: string;
    ssn?: string;
    email: string;
    password: string;
}

declare type User = {
    $id: string;
    email: string;
    userId: string;
    dwollaCustomerUrl: string;
    dwollaCustomerId: string;
    firstName: string;
    lastName: string;
    name: string;
    address1: string;
    city: string;
    state: string;
    postalCode: string;
    dateOfBirth: string;
    ssn: string;
}

declare interface SignInProps {
    email: string;
    password: string;
}
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
    user: User;
}

declare interface MobileNavProps {
    user: User;
}

declare interface RightSideBarProps {
    user: User;
    transactions: [];
    banks: [];
}

declare interface BankCardProps {
    account: {};
    userName: string;
    showBalance: boolean;
}

declare interface FooterProps {
    user: User;
    type?: 'mobile' | 'desktop';
}