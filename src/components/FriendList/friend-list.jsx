import PropTypes from 'prop-types'
import FriendListItem from "./friend-list-items";
import { List } from './friend-list.styled'

const FriendList = ({ allFriends }) => {
  return (
    <List className="friend-list">
          <FriendListItem allFriends = {allFriends} />
    </List>
  );
};

export default FriendList;

FriendList.propTypes = {
    allFriends: PropTypes.arrayOf(PropTypes.shape({}))
}
