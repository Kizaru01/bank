type User = {
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
};

export interface SiderbarProps {
  user: User;
}
export interface MobileNavProps {
  user: User;
}
export interface RightSidebarProps {
  user: User;
  transactions: Transaction[];
  banks: Bank[] & Account[];
  }
  
export interface FooterProps {
  user: User;
  type?: 'mobile' | 'desktop'
}
