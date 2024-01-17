import React from "react";

const CoinPage = ({ coinData }) => {
  let bpiArray = Object.values(coinData.bpi);
  return (
    <>
      <div className="px-4 py-4 xl:px-20 mt-4">
        <h1 className="font-bold text-2xl">{coinData.chartName}</h1>
        <h1 className="font-normal text-lg">{coinData.disclaimer}</h1>
        <h1 className="font-normal text-md">{coinData.time.updated}</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center px-4 py-4 lg:px-10 xl:px-20">
        {bpiArray.map((coin) => (
          <div key={coin.rate_float} className="bg-gray-200 rounded-md w-full">
            <div className="flex items-center justify-center text-gray-900 hover:bg-gray-300 gap-x-2.5 p-3 text-sm font-semibold leading-6">
              <h1 className="font-bold">{coin.description}</h1>
              <h1 className="font-bold">{coin.code}</h1>
            </div>
            <div className="flex items-center justify-center text-gray-900 hover:bg-gray-300 gap-x-2.5 p-3 text-sm font-semibold leading-6">
              <h1 className="font-bold">{coin.rate}</h1>
              <h1 className="font-bold">{coin.rate_float}</h1>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CoinPage;
