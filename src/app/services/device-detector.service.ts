import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeviceDetectorService {

  constructor() { }
  isMobile(): boolean {
    return window.innerWidth < 768; // Adjust the threshold as needed
  }

  isTablet(): boolean {
    return window.innerWidth >= 768 && window.innerWidth < 1024; // Adjust the threshold as needed
  }
}
