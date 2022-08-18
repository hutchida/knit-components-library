import React from "react"
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
  TweetInfo
} from './styles'
import { ITweetTile } from "./types"

export const TweetTile = ({ config, user, tweet }: ITweetTile) => {
  const size = config.size || '4rem'

  return (
    < TileContainer style={{ width: size }}>
      <UserPanel>
        <ProfilePic>
          <img src={user.profilePic} alt={user.handle} />
        </ProfilePic>
        <UserInfo>
          <UserHandle>{user.handle}</UserHandle>
          <UserBio>{user.bio}</UserBio>
          <UserStats>Followers: {user.numOfFollowers}</UserStats>
        </UserInfo>
      </UserPanel>
      <TweetPanel>
        <Tweet>{tweet.tweet}</Tweet>
        <TweetInfo>Retweeted: {tweet.numOfRetweets} | {tweet.published}</TweetInfo>
      </TweetPanel>
    </TileContainer >
  )
}