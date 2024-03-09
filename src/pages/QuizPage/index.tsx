import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';

const Button = ({
  title,
  thumbnailImage,
  imageClassName,
}: {
  title: string;
  thumbnailImage?: string;
  imageClassName?: string;
}) => {
  return (
      <button className='h-40 w-40 rounded-[1.5rem] text-2xl text-red-500 bg-white border border-red-500 hover:font-bold hover:border-red-500 hover:border-2 px-4'>
      <div className='button-text'>
        {title}
      </div>
      {thumbnailImage && (
        <div className='image-container'>
          <img
            className={imageClassName}
            src={thumbnailImage}
            alt={title} // Provide alt text for accessibility
          />
        </div>
      )}
    </button>
  );
};

export default function QuizPage() {
  return (
    <div className='min-h-screen'>
      <div className='mb-12 mt-24 flex flex-col gap-16'>
        <IoIosArrowBack className='text-2xl' />
        <header className='text-5xl font-bold text-center'>Quiz Yourself!</header>
        <div className='flex flex-wrap gap-10 items-center'>
          <Button
            title='Drugs'
            imageClassName='h-[105%] w-[105%]'
          />
          <Button
            title='Cyber Bully'
            imageClassName='h-[105%] w-[105%]'
          />
          <Button
            title='Vape'
            imageClassName='h-[105%] w-[105%]'
          />
          <Button
            title='Heritage'
            imageClassName='h-[105%] w-[105%]'
          />
        </div>
      </div>
    </div>
  );
}