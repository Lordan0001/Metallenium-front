import {atom, selector} from 'recoil';

export const bandsState = atom({
    key: 'bandsState',
    default: [],
});

export const loadingState = atom({
    key: 'loadingState',
    default: true,
});
export const albumsState = atom({
    key: 'albumsState',
    default: [],
});
export const songsState = atom({
    key: 'songsState',
    default: [],
});

export const tokenState = atom({
    key: 'tokenState',
    default: [],
});

export const userState = atom({
    key: 'userState',
    default: '',
});

export const isAuthorizedState = selector({
    key: 'isAuthorizedState',
    get: ({ get }) => {
        const user = get(userState);
        if(user != ''){
        return true}
        else{
            return false}
    },
});