import DefaultLayout from './DefaultLayout';
import DashboardLayout from './DashboardLayout';
import PageLayout from './PageLayout';

export { DefaultLayout, DashboardLayout, PageLayout };

export type LayoutType =
  | typeof DefaultLayout
  | typeof DashboardLayout
  | typeof PageLayout;
