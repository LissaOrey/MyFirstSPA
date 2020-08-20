const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_TOTAL_COUNT = 'SET_USERS_TOTAL_COUNT';

let initialState = {
    users: [],
    pageSize: 10,
    usersTotalCount: 10,
    currentPage:1
};
const usersReducer = (state=initialState, action)=>{
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return{
                            ...u, followed: true,
                        }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u=>{
                    if(u.id === action.userId){
                        return{
                            ...u, followed: false,
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:{
            return {
                ...state, users: action.users
                //TODO: мб ошибка
            }
        }
        case SET_CURRENT_PAGE:{
            return {
                ...state, currentPage: action.currentPage
            //TODO: мб ошибка
            }
        }
        case SET_USERS_TOTAL_COUNT:{
            return {
                ...state, usersTotalCount: action.count
            //TODO: мб ошибка
            }
        }
        default:
            return state;
    }
}

export const followAC =(userId)=>({type:FOLLOW, userId });
export const unfollowAC =(userId)=>({type: UNFOLLOW, userId });
export const setUsersAC =(users)=>({type:SET_USERS, users});
export const setCurrentPageAC =(currentPage)=>({type:SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCountAC =(usersTotalCount)=>({type:SET_USERS_TOTAL_COUNT, count: usersTotalCount});

export default usersReducer;