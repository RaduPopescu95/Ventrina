export const paymentOptions = [
  {
    name: 'Cash',
    src: require('src/assets/images/cash.png'),
    action: 'Disable',
    style: {
      width: '25%',
      height: '80%',
      marginLeft: 10,
    },
  },
  {
    name: 'Wire transfer',
    src: require('src/assets/images/wire_transfer.png'),
    action: 'Disable',
    style: {
      width: '25%',
      height: 80,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Stripe',
    src: require('src/assets/images/logos_stripe.png'),
    action: 'Disable',
    style: {
      width: 100,
      height: '80%',
      marginLeft: 10,
    },
  },
  {
    name: 'Paypall',
    src: require('src/assets/images/paypall.png'),
    action: 'Disable',
    style: {
      width: '20%',
      height: 75,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Razoplay',
    src: require('src/assets/images/razoplay.png'),
    action: 'Disable',
    style: {
      width: '20%',
      height: 80,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'AlyPay',
    src: require('src/assets/images/alipay.png'),
    action: 'Coming soon',
    style: {
      width: '25%',
      height: 80,
      transform: [{ scale: 0.8 }],
    },
  },
  {
    name: 'Paystack',
    src: require('src/assets/images/paystack.png'),
    action: 'Coming soon',
    style: {
      width: '25%',
      height: 80,
      transform: [{ scale: 0.7 }],
    },
  },
];

export const statusList = [
  'Shipped',
  'New',
  'Return made',
  'Cancelled',
  'In progress',
];

export const subscriptionYear = [
  {
    title: 'Free',
    price: '0.00',
    period: 'year',
  },
  {
    title: 'Vetrina',
    benefit: '2 free months',
    price: '109,00',
    period: 'year',
  },
  {
    title: 'Shop',
    benefit: '2 free months',
    price: '209,00',
    period: 'year',
  },
  {
    title: 'Vetrina Plus',
    benefit: '2 free months',
    price: '399,00',
    period: 'year',
  },
];

export const subscriptionMonth = [
  {
    title: 'Free',
    price: '0.00',
    period: 'month',
  },
  {
    title: 'Vetrina',
    benefit: '1 free week',
    price: '15,99',
    period: 'month',
  },
  {
    title: 'Shop',
    benefit: '2 free weeks',
    price: '20,00',
    period: 'month',
  },
  {
    title: 'Vetrina Plus',
    benefit: '1 free month',
    price: '49,00',
    period: 'month',
  },
];
