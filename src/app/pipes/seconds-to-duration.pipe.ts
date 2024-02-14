import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToDuration'
})
export class SecondsToDurationPipe implements PipeTransform {

  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    const seconds: number = value % 60;

    const formattedMinutes: string = this.padNumber(minutes);
    const formattedSeconds: string = this.padNumber(seconds);

    return `${formattedMinutes}:${formattedSeconds}`;
  }

  // Helper function to pad numbers with leading zeros
  private padNumber(number: number): string {
    return number < 10 ? '0' + number : '' + number;
  }

}
