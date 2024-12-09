import React from 'react';
import Image from 'next/image';

const galleryImages = [
  {
    src: '/pizza.jpg',
    alt: 'Delicious pizza with toppings',
  },
  {
    src: '/menu6.png',
    alt: 'Gourmet dish presentation',
  },
  {
    src: '/aboutUs1.png',
    alt: 'Grilled salmon with vegetables',
  },
  {
    src: '/chicken-fry.jpg',
    alt: 'BBQ platter with sides',
  },
  {
    src: '/aboutUs2.png',
    alt: 'Appetizer plate',
  },
  {
    src: '/cupcake.png',
    alt: 'French toast with fruits',
  },
];

const PhotoGallery = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
      <h2 className="text-2xl font-semibold mb-4">Photo Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoGallery; 