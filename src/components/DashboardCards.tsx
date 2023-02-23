import React from 'react';
import NewsCard from '../components/NewsCard';
import MarketplaceCard from '../components/MarketplaceCard';
import AdsCard from '../components/AdsCard/AdsCard';
import ShopCard from '../components/ShopCard/ShopCard';
import VisitorsCard from '../components/VisitorsCard/VisitorsCard';
import OrdersCard from '../components/OrdersCard/OrdersCard';
import SupportCard from '../components/SupportCard/SupportCard';
import InviteFriendsCard from '../components/InviteFriendsCard/InviteFriendsCard';

export default function DashboardCards() {
  return (
    <>
      <ShopCard />
      <VisitorsCard />
      <OrdersCard />
      <NewsCard />
      <MarketplaceCard />
      <AdsCard />
      <SupportCard />
      <InviteFriendsCard />
    </>
  );
}
