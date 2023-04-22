import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../services/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  public movie: any;
  public poster: any;

  public constructor(private activatedRoute: ActivatedRoute,
                    private movieService: MovieService,
                    private router: Router) {
    this.getMovie(this.activatedRoute.snapshot.params['id']);
    this.getMoviePoster(this.activatedRoute.snapshot.params['id']);
  }

  private getMovie(id: number): void {
    this.movieService.getMovieDetail(id).subscribe((response: number) => {
      this.movie = response;
    });
  }

  public goToHome(row: any): void {
    this.router.navigate(['',row.id]);
  }

  private getMoviePoster(id: number): void {
    this.movieService.getMoviePoster(id).subscribe((response: number) => {
      this.poster = response;
    });
  }

  public getLinkPoster():string{
    return 'http://image.tmdb.org/t/p/w500/'+this.movie.poster_path;
  }
}
