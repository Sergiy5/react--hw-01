import PropTypes from 'prop-types'
import {Item, StatusIsOnline, Img, TextName} from './friend-list-item.styled'
 
const FriendListItem = ({ allFriends }) => {
    return (
        allFriends.map(({avatar, name, isOnline, id}) => (
            <Item key={id} className="item">
                <StatusIsOnline isOnline={isOnline} className="status"></StatusIsOnline>
                <Img className="avatar" src={avatar} alt="User avatar" width="80px" />
                <TextName className="name">{name}</TextName>
            </Item>
        )
    ))
};

export default FriendListItem

FriendListItem.propTypes = {
    allFriends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}
    