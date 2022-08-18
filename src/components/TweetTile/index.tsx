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
/**
 * TweetTile component that takes config data, user data, and tweet data. The user data is displayed in 
 * top half of the tile, the tweet data in the lower half. The config data can be used to modify styling
 * from outside of the component. The tile will change border and background colour like a traffic light, 
 * based on the sentiment value in the tweet data.
 */
export const TweetTile = ({ config, user, tweet }: ITweetTile) => {
  const size = sizeMap[config.size] || '50rem'
  const color = colorMap[tweet.sentiment] || { 'heavy': 'purple', 'light': 'plum' }
  return (
    <TileContainer style={{
      // width: size,
      // height: size,
      backgroundColor: color.light,
      borderColor: color.heavy
    }}>
      <UserPanel>
        <ProfilePic>
          <img src={user.profilePic} alt={user.handle} />
        </ProfilePic>
        <UserInfo>
          <UserHandle>@{user.handle}</UserHandle>
          <UserStats>Followers: {user.numOfFollowers}</UserStats>
          <UserBio>{user.bio}</UserBio>
        </UserInfo>
      </UserPanel>
      <TweetPanel>
        <Tweet>"{tweet.tweet}"</Tweet>
        <LinkContainer><Link url={tweet.url}>See original tweet</Link></LinkContainer>
        <TweetInfo>Retweeted: {tweet.numOfRetweets} | Published: {tweet.published}</TweetInfo>
      </TweetPanel>
    </TileContainer >
  )
}