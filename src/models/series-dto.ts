import { PlatformDto } from './platform-dto';

export interface SerieDto {
    id?: string;
    api_id?: string;
    name: string;
    description: string;
    seasons: string;
    seasons_details: [{
        number: number;
        episodes: number;
    }];
    total_episodes: number;
    followers?: number;
    genres: [{
        key: string,
    }];
    creation?: string;
    banner?: string;
    poster?: string;
    link?: string;
    platforms: PlatformDto[];
}