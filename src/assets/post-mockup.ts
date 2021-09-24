import { Post } from './post';

export const POSTS: Post[] = [
    {
        id: 0,
        date: new Date(),
        author: 'Daniel Koefoed',
        info: 'Rulle plåtad i april 20, Kodak 200 i en Minolta SRT 101b', 
        images: [
            '../../assets/images/1.jpg',
            '../../assets/images/2.jpg',
            '../../assets/images/3.jpg'
        ]
    },
    {
        id: 1,
        date: new Date(),
        author: 'Olof Koefoed',
        info: 'Rulle plåtad i oktober 20, Kodak 400 i en Minolta SRT 101b', 
        images: [
            '../../assets/images/2.jpg',
            '../../assets/images/3.jpg',
            '../../assets/images/1.jpg'
        ]
    },
    {
        id: 2,
        date: new Date(),
        author: 'Kenneth Koefoed',
        info: 'Rulle plåtad i december 21, Kodak Portra 400 i en Mamiya M645s1000', 
        images: [
            '../../assets/images/3.jpg',
            '../../assets/images/1.jpg',
            '../../assets/images/2.jpg'
        ]
    }
]
