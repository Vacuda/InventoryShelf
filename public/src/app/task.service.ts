

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _http: HttpClient) {}

    getTasks(){
        return this._http.get('/api/tasks');
    }

    getOneTask(id){
        return this._http.get(`/api/task/${id}`);
    }

    createTask(data){
        return this._http.post('/api/task/create', data);
    }

    deleteTask(id){
        return this._http.delete(`/api/task/destroy/${id}`);
    }

    markComplete(id){
        return this._http.get(`/api/task/complete/${id}`);
    }

    updateTask(id, data){
        return this._http.put(`/api/task/update/${id}`, data);
    }




}