import React, { useEffect, useState } from "react";
import CoinPage from "./CoinPage";
import ImagesPage from "./ImagesPage";

const Main = () => {
  const [coinData, setCoinData] = useState(null);
  const [imagesData, setImagesData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callCoinApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.coindesk.com/v1/bpi/currentprice.json"
      );
      let data = await response.json();
      setLoading(false);
      setCoinData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const callImagesApi = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://picsum.photos/v2/list?page=1&limit=9"
      );
      let data = await response.json();
      setLoading(false);
      setImagesData(data);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    callCoinApi();
  }, []);

  useEffect(() => {
    callImagesApi();
  }, []);

  return (
    <>
      {coinData && <CoinPage coinData={coinData} />}
      {imagesData && <ImagesPage images={imagesData} />}
      {loading && (
        <div className="flex items-center justify-center mt-12">Loading...</div>
      )}
      {error && <div>{error}</div>}
    </>
  );
};

export default Main;
