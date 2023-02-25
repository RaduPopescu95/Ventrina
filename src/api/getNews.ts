export const getNews = async (
  setData?: any,
  setLoading?: any,
  setNews?: any,
) => {
  try {
    const response = await fetch(
      'https://newsapi.org/v2/top-headlines?country=us&apiKey=10460c04286842f09ca1ac3c91bb54ba',
    );
    const json = await response.json();
    if (setData) {
      console.log(json.articles);
      setData(json.articles);
    } else {
      setNews(json.articles);
    }
  } catch (error) {
    console.error(error);
  } finally {
    setLoading(false);
  }
};
// 5fc3d4b6a95343cebfd2576b61f7e47f

// 10460c04286842f09ca1ac3c91bb54ba
