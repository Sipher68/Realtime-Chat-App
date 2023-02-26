import { Session } from 'next-auth';

interface FeedWrapper {
  session: Session;
}

const FeedWrapper: React.FC<FeedWrapper> = ({ session }) => {
  return <div>FeedWrapper</div>;
};

export default FeedWrapper;
