import { Injectable } from '@nestjs/common';
import { isNullOrUndefined } from 'util';

@Injectable()
export class CacheService {
  private _debugNumber: number;

  get debugNumber(): number {
    if (isNullOrUndefined(this._debugNumber)) {
      this._debugNumber = 0;
    } else {
      this._debugNumber++;
    }
    return this._debugNumber;
  }

  constructor() {}

  add() {
    this._debugNumber = this._debugNumber + 10;
  }
}
