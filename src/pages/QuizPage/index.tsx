import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const Button = ({
  title,
  link,
  thumbnailImage,
  imageClassName,
}: {
  title: string;
  link: string;
  thumbnailImage?: string;
  imageClassName?: string;
}) => {
  return (
    <Link to={link} className="button">
    <button className='h-40 w-40 rounded-[1.5rem] bg-white border border-red-500 hover:font-bold hover:border-red-500 hover:border-2 px-4'>
      <div className='button-text'>
        {thumbnailImage && (
          <div className='image-container'>
            <img
              className={imageClassName}
              src={thumbnailImage}
              alt={title} // Provide alt text for accessibility
            />
          </div>
        )}
        <span className="text-red-500 text-2xl">{title}</span>
      </div>
    </button>
    </Link>
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
            link= 'https://docs.google.com/forms/d/e/1FAIpQLSfwytZYKTldmYdbptONKEuVoSguHkEqFgjhl99XhITs_CRvOw/viewform'
            imageClassName='h-[105%] w-[105%]'
          />
          <Button
            title='Cyber Bully'
            link='https://docs.google.com/forms/d/e/1FAIpQLSduwIZFgi5drIk0b0VAHEtEWjW9tKjVVxms0YJTVDZOvWA_GA/viewform?usp=sf_link'
            imageClassName='h-[105%] w-[105%]'
          />
          <Button
            title='Vape'
            link='https://docs.google.com/forms/d/e/1FAIpQLSfN89u7PbacF--dHy3-M6WiJ5-y0mSElpll6MhY_yHSSowk8A/viewform?usp=sf_link'
            imageClassName='h-[105%] w-[105%]'
          />
          <Button
            title='Heritage'
            link= 'https://docs.google.com/forms/d/e/1FAIpQLSdee7Xxjr4tAP8TGAnCRUIg5BLAVfPRPC5kslhqZoM50M3P3A/viewform'
            imageClassName='h-[105%] w-[105%]'
          />
        </div>
      </div>
    </div>
  );
}