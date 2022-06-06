import { MovieRowProps } from './types';

export default function MovieRow({ movie }: MovieRowProps) {
    return (
        <>
            {movie.image && <img src={movie.image.medium} className='w-full h-full object-cover' />}
        </>
    )
}
