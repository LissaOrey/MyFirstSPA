import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { unfollowSuccess, follow,unfollow, followSuccess, toggleIsFollowingProgress, getUsers, setCurrentPage, } from '../../Redux/users-reducer';
import Preloader from '../common/Preloader/Preloader';
// import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage,this.props.pageSize);
    }
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber,this.props.pageSize);
        this.props.setCurrentPage(pageNumber);

        // usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => { 
        //     this.props.setUsers(data.items)
        //     this.props.toggleIsFetching(false) });
        //     this.props.toggleIsFetching(true);
        //     this.props.setCurrentPage(pageNumber);
    }
    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users usersTotalCount={this.props.usersTotalCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        friends: state.usersPage.friends,
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        usersTotalCount: state.usersPage.usersTotalCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,
    }
};
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (PageNumber) => {
//             dispatch(setCurrentPageAC(PageNumber));
//         },
//         setTotalUsersCount: (count) => {
//             dispatch(setUsersTotalCountAC(count));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(setIsFetchingAC(isFetching))
//         }
//     }
// };
export default connect(mapStateToProps, {
    unfollowSuccess,followSuccess,
    setCurrentPage,
     toggleIsFollowingProgress,
    getUsers, follow, unfollow,
})(UsersContainer);
// const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

// export default UsersContainer;