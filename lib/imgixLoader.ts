interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const ImgixLoader = (data: ImageLoaderProps) => {
  return `${data.src}?w=${data.width}&q=${data.quality || 75}`;
};

export default ImgixLoader;
