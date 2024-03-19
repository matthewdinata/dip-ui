import { Link } from 'react-router-dom';

export default function Button({
  title,
  link,
  thumbnailImage,
  imageClassName,
}: {
  title: string;
  link: string;
  thumbnailImage?: string;
  imageClassName?: string;
}) {
  return (
    <Link
      to={link}
      className='button'
    >
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
          <span className='text-red-500 text-2xl'>{title}</span>
        </div>
      </button>
    </Link>
  );
}
