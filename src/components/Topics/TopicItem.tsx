import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import Countdown from 'react-countdown';
import { TopicFragment } from '../../graphql/generated/schema';

type TopicItemProps = {
  title: TopicFragment['title'];
  description: TopicFragment['description'];
  start: TopicFragment['start'];
  end: TopicFragment['end'];
  active: TopicFragment['active'];
  progress: TopicFragment['progress'];
  handleClick: () => void;
};

export const TopicItem = ({
  title,
  description,
  start,
  end,
  active,
  progress,
  handleClick,
}: TopicItemProps) => {
  const startTime = dayjs(start);
  const endTime = dayjs(end);
  const unlockTime = startTime.toDate();
  const runningTime = `${startTime.format('HH:mm')} ~ ${endTime.format(
    'HH:mm'
  )}`;

  return (
    <>
      <div className="mx-auto max-w-7xl py-4 px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-lg bg-gray-800 shadow-xl">
          <div className="absolute inset-0">
            <img
              src="https://fastly.picsum.photos/id/640/1024/240.jpg?hmac=ink4BUa6l0JEx6JrLToClVaXDsPvwgTsU0RLg76dz0g"
              alt={title ?? ''}
              className="h-full w-full rounded-lg object-cover opacity-40 mix-blend-mode: multiply"
            />
          </div>
          <div className="relative py-8 px-8">
            <h1 className="mb-2 text-3xl font-bold text-white">{title}</h1>
            <p className="mb-2 text-lg text-gray-200">{runningTime}</p>
            <p className="mb-10 text-gray-300">{description}</p>
            <div className="flex justify-end">
              <Countdown
                date={unlockTime}
                renderer={({ hours, minutes, seconds, completed }) => {
                  if (completed) {
                    return (
                      <button
                        className="btn btn-primary rounded-full"
                        onClick={handleClick}>
                        TALK
                      </button>
                    );
                  }

                  return (
                    <span className="countdown font-mono text-2xl text-white">
                      {hours}시 {minutes}분 {seconds}초
                    </span>
                  );
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
