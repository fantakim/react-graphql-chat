import { Helmet } from 'react-helmet-async';

type MetaTagProps = {
  title: string;
};

export const MetaTag = ({ title }: MetaTagProps) => {
  const url = window.location.href;
  const image = window.location.origin + '/logo192.png';
  const description = `공중파 라이브 방송을 즐기며 자유롭게 대화해요`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};
