import { AfterViewInit, OnInit, Component, ViewChild } from '@angular/core';
import { MoviesService } from './../../services/movies.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MoviesDialogComponent } from './movies-dialog/movies-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit, AfterViewInit {
  constructor(private movies: MoviesService, private dialog: MatDialog) {}

  moviesList: any[] = [];

  displayedColumns: string[] = [
    'thumbnail',
    'title',
    'rating',
    'release',
    'overview',
    'edit-overview',
  ];
  dataSource = new MatTableDataSource(this.moviesList);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  handleEditClick(movie: any): void {
    this.dialog.open(MoviesDialogComponent, { data: movie });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // async fetchMovies(id: number) {
  //   // let results;
  //   this.movies.getMovies(id).subscribe({
  //     next: (res) => {
  //       return res;
  //     },
  //     error: (err) => {
  //       return err;
  //     },
  //   });
  //   // return results;
  // }

  async ngOnInit() {
    // for (var i = 1; i <= 3; i++) {
    //   this.movies.getMovies(i).subscribe({
    //     next: (res) => {
    //       this.moviesList.push(...res.results);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //   });
    // }
    // console.log(this.moviesList);
    this.movies.getMovies(1).subscribe({
      next: (res) => {
        this.moviesList.push(...res.results);
        this.movies.getMovies(2).subscribe({
          next: (res) => {
            this.moviesList.push(...res.results);
            this.movies.getMovies(3).subscribe({
              next: (res) => {
                this.moviesList.push(...res.results);
                console.log(this.moviesList);
                this.dataSource = new MatTableDataSource(this.moviesList);
                this.dataSource.paginator = this.paginator;
              },
              error: (err) => console.log(err),
            });
          },
          error: (err) => console.log(err),
        });
      },
      error: (err) => console.log(err),
    });
  }
}
