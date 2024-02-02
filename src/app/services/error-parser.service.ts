import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ErrorParserService {

  constructor() { }

  parseHtmlError(htmlContent:string){
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, 'text/html');

    // Extract text content until the first <br> tag
    const preElement = doc.querySelector('pre');
    const errorMessage = preElement ? this.extractTextUntilBreak(preElement.innerHTML) : 'Unknown error';

    // Remove "Error:" prefix
    return errorMessage.replace(/^Error:\s*/, '') || 'Unknown error';
  }

  private extractTextUntilBreak(html: string): string {
    const breakIndex = html.indexOf('<br>');
    return breakIndex !== -1 ? html.substring(0, breakIndex) : html;
  }
}
