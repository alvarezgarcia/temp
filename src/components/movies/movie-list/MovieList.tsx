import { MovieListProps } from "./types";
import { MovieRow } from "../movie-row";

export default function MovieList({ list }: MovieListProps) {
    return (
        <>
            {
                list.map((movie) => (
                    <div key={movie.id} className="bg-white shadow-sm rounded-sm p-2">
                        <MovieRow movie={movie} />
                    </div>
                ))
            }
        </>
    )
}
