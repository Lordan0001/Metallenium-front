import { atom } from 'recoil';

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
