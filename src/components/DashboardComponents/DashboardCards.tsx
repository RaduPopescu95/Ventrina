import React from 'react';
import NewsCard from './NewsCard';
import MarketplaceCard from './MarketplaceCard';
import AdsCard from './AdsCard/AdsCard';
import ShopCard from './ShopCard/ShopCard';
import VisitorsCard from './VisitorsCard/VisitorsCard';
import OrdersCard from './OrdersCard/OrdersCard';
import SupportCard from './SupportCard/SupportCard';
import InviteFriendsCard from './InviteFriendsCard/InviteFriendsCard';

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
