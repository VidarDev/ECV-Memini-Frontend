'use client';

import { Image } from '@nextui-org/image';
import React, { useState } from 'react';

const AlbumsScreen = () => {
  const [showText, setShowText] = useState(Array(5).fill(false));

  const handleToggle = (index: number) => {
    setShowText((prevShowText) => {
      const newShowText = [...prevShowText];
      newShowText[index] = !newShowText[index];
      return newShowText;
    });
  };

  // Tableau d'URL d'images
  const imageUrls = [
    'https://via.placeholder.com/300?text=Image+1',
    'https://via.placeholder.com/300?text=Image+2',
    'https://via.placeholder.com/300?text=Image+3',
    'https://via.placeholder.com/300?text=Image+4',
    'https://via.placeholder.com/300?text=Image+5',
  ];

  const cards = imageUrls.map((url, index) => (
    <div
      key={index}
      className={`relative mb-8 h-[20rem] w-[15rem] ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}
    >
      <div
        role="button"
        tabIndex={0}
        className="h-full w-full cursor-pointer"
        onClick={() => handleToggle(index)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleToggle(index);
          }
        }}
      >
        <Image
          alt={`Album Image ${index + 1}`}
          className={`h-[20rem] w-[15rem] rounded-xl ${showText[index] ? 'hidden' : 'block'}`}
          src={url}
        />
        <div
          className={`absolute inset-0 flex items-center justify-center rounded-xl bg-black bg-opacity-75 p-4 text-center text-white ${showText[index] ? 'flex' : 'hidden'}`}
        >
          <p>Ce texte apparaît au clic de l&apos;image.</p>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="min-w-screen flex h-full min-h-screen w-full items-center justify-center bg-[#261e15]">
      <div className="flex w-full flex-col items-center gap-16 px-4">{cards}</div>
    </section>
  );
};

export default AlbumsScreen;
