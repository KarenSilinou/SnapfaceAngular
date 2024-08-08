import { SnapType } from './snap-type.type';

export class FaceSnap {
  location?: string;
  createdDate!: string | number | Date;

  constructor(
    public id: number,
    public title: string,
    public imageUrl: string,
    public description: string,
    public createdAt: Date,
    public snaps: number
  ) {}

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType: SnapType) {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unSnap') {
      this.removeSnap();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
