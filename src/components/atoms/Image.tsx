import { FC } from 'react';

interface IState {
  imageSrc: string,
  imageWidth?: string,
  imageHeight?: string,
  borderRadius?: string,
}

const Image: FC<IState> = ({ imageSrc, imageWidth, imageHeight, borderRadius }) => {
  return (
    <img 
      className="Image select-none" 
      src={imageSrc}
      width={imageWidth}
      height={imageHeight}
      alt={imageSrc.split('/')[imageSrc.split('/').length - 1] || "Image-alt not found"}
    />
  );
}

export default Image;