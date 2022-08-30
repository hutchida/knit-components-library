import React from "react"
import { Link } from "../Link"
import {
  TileContainer,
  UserPanel,
  ProfilePic,
  UserInfo,
  UserHandle,
  UserBio,
  UserStats,
  TweetPanel,
  Tweet,
  TweetInfo,
  LinkContainer,
} from './styles'
import { ITweetTile } from "./types"


/**
 * TweetTile component that takes config data, user data, and tweet data. The user data is displayed in 
 * top half of the tile, the tweet data in the lower half. The config data can be used to modify styling
 * from outside of the component. The tile will change border and background colour like a traffic light, 
 * based on the sentiment value in the tweet data.
 */
export const TweetTile = ({ config, user, tweet }: ITweetTile) => {
  const color = config.colorMap[tweet.sentiment] || { 'heavy': 'purple', 'light': 'plum' }
  return (
    <TileContainer style={{
      backgroundColor: color.light,
      borderColor: color.heavy
    }}>
      <UserPanel>
        <ProfilePic>
          <img src={user.profilePic} alt={user.handle} />
        </ProfilePic>
        <UserInfo>
          <UserHandle>@{user.handle}</UserHandle>
          <UserBio>Bio: {user.bio}
            <UserStats>Followers: {user.numOfFollowers}</UserStats></UserBio>
        </UserInfo>
      </UserPanel>
      <TweetPanel>
        <Tweet>"{tweet.tweet}"</Tweet>
        <TweetInfo>Retweeted: {tweet.numOfRetweets}
          <br />Published: {tweet.published}
          <LinkContainer><Link url={tweet.url}>See original tweet</Link></LinkContainer>
        </TweetInfo>
      </TweetPanel>
    </TileContainer >
  )
}