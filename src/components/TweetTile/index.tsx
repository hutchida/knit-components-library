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
const sizeMap = {
  'xs': '10rem',
  'sm': '15rem',
  'md': '30rem',
  'lg': '40rem',
  'xl': '60rem',
}
const colorMap = {
  0: { 'heavy': 'red', 'light': 'pink' },
  1: { 'heavy': 'orange', 'light': 'peachpuff' },
  2: { 'heavy': 'palegreen', 'light': 'honeydew' },
}
export const TweetTile = ({ config, user, tweet }: ITweetTile) => {
  const size = sizeMap[config.size] || '50rem'
  const color = colorMap[tweet.sentiment] || { 'heavy': 'purple', 'light': 'plum' }
  return (
    <TileContainer style={{
      width: size,
      height: size,
      backgroundColor: color.light,
      borderColor: color.heavy
    }}>
      <UserPanel>
        <ProfilePic>
          <img src={user.profilePic} alt={user.handle} />
        </ProfilePic>
        <UserInfo>
          <UserHandle>@{user.handle}</UserHandle>
          <UserBio>{user.bio}</UserBio>
          <UserStats>Followers: {user.numOfFollowers}</UserStats>
        </UserInfo>
      </UserPanel>
      <TweetPanel>
        <Tweet>"{tweet.tweet}"</Tweet>
        <TweetInfo>Retweeted: {tweet.numOfRetweets} | Published: {tweet.published}</TweetInfo>
      </TweetPanel>
    </TileContainer >
  )
}