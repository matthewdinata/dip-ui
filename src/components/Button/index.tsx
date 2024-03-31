import { Link } from 'react-router-dom';
import { CustomRedButtonProps } from './types';

export default function Button({
  title,
  link,
  thumbnailImage,
  imageClassName,
  extraButtonClassName,
}: {
  title: string;
  link: string;
  thumbnailImage?: string;
  imageClassName?: string;
  extraButtonClassName?: string;
}) {
  return (
    <Link
      to={link}
    >
      <button className={`h-40 w-40 rounded-[1.5rem] text-2xl bg-white border border-red-500 hover:font-bold hover:border-red-500 hover:border-2 px-4 ${extraButtonClassName}`}>
          {thumbnailImage && (
            <div className='image-container'>
              <img
                className={imageClassName}
                src={thumbnailImage}
                alt={title} // Provide alt text for accessibility
              />
            </div>
          )}
          {title}
      </button>
    </Link>
  );
}

// Todo: Enable selection of different colors
export const CustomRedButton = ({ title, ...attributes }: CustomRedButtonProps) => {
  return (
    <button className='bg-[#ca3735] hover:bg-[#ca37356e] text-center text-white hover:text-black min-w-[175px] hover:border-black' {...attributes}>
      {title}
    </button>
  )

}
