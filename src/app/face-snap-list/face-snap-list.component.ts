import { inject } from '@angular/core';
import { FaceSnap } from './../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [
    FaceSnapComponent,
    CommonModule,

  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})

export class FaceSnapListComponent implements OnInit {

  faceSnaps! : FaceSnap[];
  faceSnaps$! : Observable<FaceSnap[]>
  faceSnapsService = inject(FaceSnapsService);

  ngOnInit(): void { this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();}
}
