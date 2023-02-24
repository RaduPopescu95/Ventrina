import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Dashboard.style';
import DashboardHeader from '../../components/DashboardComponents/DashboardHeader/DashboardHeader';
import NewsCard from '../../components/DashboardComponents/NewsCard';
import MarketplaceCard from '../../components/DashboardComponents/MarketplaceCard';
import AdsCard from '../../components/DashboardComponents/AdsCard/AdsCard';
import ShopCard from '../../components/DashboardComponents/ShopCard/ShopCard';
import VisitorsCard from '../../components/DashboardComponents/VisitorsCard/VisitorsCard';
import OrdersCard from '../../components/DashboardComponents/OrdersCard/OrdersCard';
import SupportCard from '../../components/DashboardComponents/SupportCard/SupportCard';
import InviteFriendsCard from '../../components/DashboardComponents/InviteFriendsCard/InviteFriendsCard';
import DashboardCards from 'src/components/DashboardComponents/DashboardCards';

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
