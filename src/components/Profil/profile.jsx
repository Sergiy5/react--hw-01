import PropTypes from 'prop-types'
import { Card, Avatar, UserData, Stats, Label, Item } from './profile.styled'

const Profile = ({username, tag, location, avatar, stats}) => {
    
  return (<Card>
    <Card className="description">
      <Avatar
        src={avatar}
        alt="User avatar"
        className="avatar"
      />
      <UserData className="name">{username}</UserData>
      <UserData className="tag">{tag}@pmarica</UserData>
      <UserData className="location">{location}</UserData>
    </Card>

    <Stats>
      <Item>
        <Label>Followers</Label>
        <Label className="quantity">{stats.followers}</Label>
      </Item>
      <Item>
        <Label>Views</Label>
        <Label className="quantity">{stats.views}</Label>
      </Item>
      <Item>
        <Label>Likes</Label>
        <Label className="quantity">{stats.likes}</Label>
      </Item>
    </Stats>
  </Card>
  )
}

export default Profile;

Profile.propTypes = {
  
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired})
}