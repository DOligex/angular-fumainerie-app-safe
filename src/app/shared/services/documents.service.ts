import { environment } from './../../../environments/environment';
import { Document } from './../models/document';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
static URL = environment.url + '/document';

  constructor(private http: HttpClient) { }

getDocumentsByWord(word: string): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + `/recherche/${word}`);
}
getAllDocuments(): Observable<Document[]> {
  return this.http.get<Document[]>(DocumentsService.URL + '/accueil');
}

}