import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movies-dialog',
  templateUrl: './movies-dialog.component.html',
  styleUrls: ['./movies-dialog.component.css'],
})
export class MoviesDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {}
}
