import PropTypes from 'prop-types';
import { Box } from '../Box/Box.styled';
import {
    AvatarUser,
    UserName,
    UserTag,
    UserLocation,
    StatsItem,
    StatsLabel,
    StatsQuantity,
} from './Profile.styled'; 

export function Profile({ username, tag, location, avatar, stats }) {
    return (
        <Box
            width="cardNormal"
            mt={4}
            mr="auto"
            ml="auto"
            pt={4}
            textAlign="center"
            borderRadius="5px"
            overflow="hidden"
            boxShadow="medium"
        >
            <Box >
                <AvatarUser
                    src={avatar}
                    alt="User avatar"
                />
                <UserName>{username}</UserName>
                <UserTag>{tag}</UserTag>
                <UserLocation>{location}</UserLocation>
            </Box>
        
            <Box as="ul" display="flex" m={0} p={0}>
                <StatsItem key="1">
                    <StatsLabel>Followers</StatsLabel>
                    <StatsQuantity>
                        {Number(stats.followers).toLocaleString('en-US')}
                    </StatsQuantity>
                </StatsItem>
                <StatsItem key="2">
                    <StatsLabel>Views</StatsLabel>
                    <StatsQuantity>
                        {Number(stats.views).toLocaleString('en-US')}
                    </StatsQuantity>
                </StatsItem>
                <StatsItem key="3">
                    <StatsLabel>Likes</StatsLabel>
                    <StatsQuantity>
                        {Number(stats.likes).toLocaleString('en-US')}
                    </StatsQuantity>
                </StatsItem>
            </Box>
        </Box>
    );

}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
        }).isRequired,
    };