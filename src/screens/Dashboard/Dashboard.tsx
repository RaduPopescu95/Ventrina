import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Dashboard.style';
import DashboardHeader from '../../components/DashboardHeader/DashboardHeader';
import NewsCard from '../../components/NewsCard';
import MarketplaceCard from '../../components/MarketplaceCard';
import AdsCard from '../../components/AdsCard/AdsCard';
import ShopCard from '../../components/ShopCard/ShopCard';
import VisitorsCard from '../../components/VisitorsCard/VisitorsCard';
import OrdersCard from '../../components/OrdersComponents/OrdersCard/OrdersCard';
import SupportCard from '../../components/SupportCard/SupportCard';
import InviteFriendsCard from '../../components/InviteFriendsCard/InviteFriendsCard';
import DashboardCards from 'src/components/DashboardCards';

type DashboardProps = {
  navigation: any;
};

const Dashboard = (props: DashboardProps) => {
  const { navigation } = props;
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}>
      <DashboardHeader />
      <DashboardCards />
    </ScrollView>
  );
};

export default Dashboard;
