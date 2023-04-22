import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieService {
    public constructor(private http: HttpClient){
    }

    public getMovieDetail(id: number): any{
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}?api_key=33b59351f038b191f93ddf9044c3b502`);
    }

    public getActiveMovies(): any{
        return this.http.get('https://api.themoviedb.org/3/movie/now_playing?api_key=33b59351f038b191f93ddf9044c3b502&language=en-US&page=1');
    }

    public getMoviePoster(id: number): any{
        return this.http.get(`https://api.themoviedb.org/3/movie/${id}/images?api_key=33b59351f038b191f93ddf9044c3b502&language=en-US`);
    }
}
