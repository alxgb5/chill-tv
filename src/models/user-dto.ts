import { GenresDto } from './genres-dto';
import { PlatformDto } from './platform-dto';
import { SerieDto } from './series-dto';

export interface UserDto {
    id?: string;
    username: string;
    email: string;
    password?: string;
    platforms?: PlatformDto[];
    genres?: GenresDto[];
    series?: SerieDto[];
}