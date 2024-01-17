import React from "react";

const ImagesPage = ({ images }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-center items-center px-4 py-2 lg:px-4 lg:py-4 xl:px-20 xl:py-10">
      {images.map((image) => (
        <div key={image.id} className="bg-gray-200 rounded-md w-full shadow-sm">
          <img
            className="rounded-t-md rounded-b-none object-cover"
            src={image.download_url}
            height={image.height}
            width={image.width}
            alt={image.author}
          />
          <div className="px-2 py-2 flex flex-col ">
            <h1 className="font-bold text-xl">Author </h1>
            <h1 className="font-normal text-xl">{image.author}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesPage;
