import { useParams } from 'react-router-dom';
import { Channel } from '../components/Channel';

export const ChannelPage = () => {
  const { channelId } = useParams() as { channelId: string };

  return <Channel channelId={channelId} />;
};
