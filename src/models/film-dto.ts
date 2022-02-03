import { GenresDto } from './genres-dto';
import { PlatformDto } from './platform-dto';

export interface FilmDto {
    id?: string;
    api_id?: string;
    title: string;
    synopsis: string;
    poster?: string;
    year: string;
    genres: GenresDto[];
    platforms: PlatformDto[];
}