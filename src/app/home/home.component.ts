import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Programmazione_CineMille';
  public filmList: any[] = [];
  public displayedColumns_left: string[] = ['title', 'sala', 'data'];
  public observableList: any[] = [];

  public isLoading: boolean = true;
  public startDate: string = '';
  public endDate: string = '';

  public constructor(private movieService: MovieService,
    private router: Router){
    this.getMovieList();
  }

  public goToDetail(row: any): void {
    this.router.navigate(['/detail',row.id]);
  }

  public getMovieList(){
    this.isLoading = true;

    this.movieService.getActiveMovies().subscribe((res: any) => {
      this.filmList = res.results;
      this.startDate = res.dates.minimum;
      this.endDate = res.dates.maximum;
      this.isLoading = false;
    });
  }
}

