import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { KnowledgeResponse } from '../models/knowledge-response';
import { EmailRequest } from '../models/email-request';
import { StackIds } from '../enums/stack-ids';
import { StackResponse } from '../models/stack-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrlKnowledge = 'https://webapiknowledge.azurewebsites.net';
  private readonly baseUrlEmail = 'https://webapiemail.azurewebsites.net';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  getAllKnowledge(): Observable<KnowledgeResponse[]> {
    return this.http.get<KnowledgeResponse[]>(`${this.baseUrlKnowledge}/V2/Knowledge`);
  }

  getKnowledgeByStackId(stackId: StackIds): Observable<KnowledgeResponse[]> {
    return this.http.get<KnowledgeResponse[]>(`${this.baseUrlKnowledge}/V2/Knowledge/ByStackId/${stackId}`);
  }

  getAllStacks(): Observable<StackResponse[]> {
    return this.http.get<StackResponse[]>(`${this.baseUrlKnowledge}/V2/Stack/all`);
  }

  sendEmail(email: EmailRequest): Observable<string> {
    return this.http.post(
      `${this.baseUrlEmail}/SendEmail`,
      JSON.stringify(email),
      { ...this.httpOptions, responseType: 'text' }
    );
  }
}
