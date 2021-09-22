import { Post } from './post';

export const POSTS: Post[] = [
    {
        id: 1,
        date: new Date(),
        author: 'Daniel Koefoed',
        info: 'Rulle plåtad i augusti 21, Kodak 400 i en Minolta SRT 120', 
        images: [
            '../../assets/images/R1-07795-014A.jpg'
        ]
    },
    {
        id: 2,
        date: new Date(),
        author: 'Olof Koefoed',
        info: 'Rulle plåtad i augusti 31, Kodak 200 i en Minolta SRT 120 b', 
        images: [
            '../../assets/images/R1-07795-014A.jpg'
        ]
    }
]
