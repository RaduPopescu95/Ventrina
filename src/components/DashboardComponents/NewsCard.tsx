import React, { useEffect, useState } from 'react';
import { StyleSheet, Linking, Image, ActivityIndicator } from 'react-native';
import Card from 'src/components/DashboardComponents/Card/Card';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ImageCard from 'src/components/DashboardComponents/ImageCard/ImageCard';
import colors from 'src/data/colors';
import { getNews } from 'src/api/getNews';
import useNewsMockup from 'src/hooks/useNewsMockup';

type NewsItem = {
  publishedAt: string | undefined;
  urlToImage: string | undefined;
  title: string | undefined;
  description: string | undefined;
};

const NewsCard = () => {
  const { data, isLoading, setData, setLoading } = useNewsMockup();

  useEffect(() => {
    console.log('data.....', data);
  }, [data]);

  return (
    <Card
      icon={
        <AntDesign name="filetext1" size={28} color={colors.light.newText} />
      }
      title="Latest news"
      linkText="Visit our blog"
      linkIcon={
        <Feather name="external-link" size={24} color={colors.light.blue} />
      }>
      <>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <>
            {data.map((newsItem: NewsItem, index) => {
              if (index > 3) {
                return;
              }
              return (
                <ImageCard
                  key={newsItem.publishedAt}
                  image={
                    <Image
                      style={styles.image}
                      source={{
                        uri: 'https://picsum.photos/200',
                        // uri: newsItem.urlToImage,
                      }}
                    />
                  }
                  title={newsItem.title}
                  // subTitle={newsItem.description}
                  subTitle={
                    '10 profitable Things to make and Sell Online for...'
                  }
                  timeToRead={newsItem.publishedAt}
                />
              );
            })}
          </>
        )}
      </>
    </Card>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: '100%',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
  },
});

export default NewsCard;
