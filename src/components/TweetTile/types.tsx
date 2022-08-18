export interface ITweetTile {
  config: IConfig;
  user: ITwitterUser;
  tweet: ITweet;
}

export interface IConfig {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export interface ITwitterUser {
  profilePic: string;
  handle: string;
  bio: string;
  numOfFollowers: number;
  numFollowing: number;
}

export interface ITweet {
  tweet: string;
  published: string;
  numOfRetweets: number;
  sentiment: 0 | 1 | 2;
  url: string;
}