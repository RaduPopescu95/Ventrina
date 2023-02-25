import React from 'react';
import { ScrollView } from 'react-native';
import { styles } from './Dashboard.style';
import DashboardHeader from '../../components/DashboardComponents/DashboardHeader/DashboardHeader';
import DashboardCards from 'src/components/DashboardComponents/DashboardCards';

type DashboardProps = {
  navigation: any;
};

const Dashboard = (props: DashboardProps) => {
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
