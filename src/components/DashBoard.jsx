import * as React from 'react';
import { extendTheme, styled } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import LayersIcon from '@mui/icons-material/Layers';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { PageContainer } from '@toolpad/core/PageContainer';
import Grid from '@mui/material/Grid2';
import TopNavigation from './TopNavigation';
import TotalBalance from './dashboardComponents/TotalBalance';
import ProfitLossComponent from './dashboardComponents/ProfitLossComponent';
import MostTradedComponent from './dashboardComponents/MostTradedComponent';
import FundamentalsComponent from './dashboardComponents/FundamentalsComponent';
import NotificationsComponent from './dashboardComponents/NotificationsComponent';
import OrderHistoryComponent from './dashboardComponents/OrderHistoryComponent';
import { CalendarToday, CardMembership, CardTravel, Computer, Leaderboard, Newspaper, ViewList } from '@mui/icons-material';

const NAVIGATION = [
  {
    kind: 'header',
    title: 'Menu',
  },
  {
    segment: 'acounts_overview',
    title: 'Acounts Overview',
    icon: <DashboardIcon />,
  },
  {
    segment: 'payouts',
    title: 'Payouts',
    icon: <CardTravel />,
  },
  {
    segment: 'certificates',
    title: 'Certifivates',
    icon: <CardMembership />,
  },
  {
    segment: 'leaderboard',
    title: 'LeaderBoard',
    icon: <Leaderboard />,
  },
  {
    segment: 'order_list',
    title: 'Order List',
    icon: <ViewList />,
  },
  {
    kind: 'divider',
  },
  {
    kind: 'header',
    title: 'Apps',
  },
  {
    segment: 'news_feed',
    title: 'News Feeds',
    icon: <Newspaper />,
  },
  {
    segment: 'economic_calendar',
    title: 'Economic Calendar',
    icon: <CalendarToday />,
  },
  {
    segment: 'web_trader_platform',
    title: 'Web Trader Platform',
    icon: <Computer />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: 'class',
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath) {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

export default function DashboardLayoutBasic() {

  const router = useDemoRouter('/dashboard');

  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      branding={{title:"Trading"}}
    >
      <DashboardLayout slots={{toolbarActions:TopNavigation}}>
        <PageContainer sx={{backgroundColor : "rgba(0, 0, 0, 0.04)"}}>
          <Grid container spacing={2}>
            <Grid size={7}>
              <TotalBalance />
            </Grid>
            <Grid size={5}>
              <ProfitLossComponent />
              <MostTradedComponent />
            </Grid>

            <Grid size={7}>
              <FundamentalsComponent />
            </Grid>
            <Grid size={5}>
              <NotificationsComponent />
            </Grid>

            <Grid size={12}>
                <OrderHistoryComponent />
            </Grid>
            
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}