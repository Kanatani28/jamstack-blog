const CardImage = ({
  alt,
  url,
}: {
  alt: string;
  url?: string;
}): JSX.Element => (
  <img
    className="w-full"
    src={
      url ||
      "https://images.microcms-assets.io/protected/ap-northeast-1:e6a442ba-1b7e-408b-91c1-74600a2683a1/service/maro-blog/media/PC.png"
    }
    alt={alt}
  />
);

export default CardImage;
