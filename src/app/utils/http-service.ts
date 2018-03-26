import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


export const GET = 'GET';
export const POST = 'POST';
export const PUT = 'PUT';
export const DELETE = 'DELETE';
export const POPULATE = 'populate';

@Injectable()
export class HttpService {

    private requestUrl;
    private requestOptions = {};
    private headerObjects = {};
    private paramObjects = {};
    constructor(private http: HttpClient) {
        this.clear();
        this.http = http;
    }

    /*Set the url you are sending the request to. Throws error if not set*/
    public setUrl(url: string) {
        this.clear();
        this.requestUrl = url;
        return this;
    }

    /*Set optional query string to append to url*/
    public setQueryParams(prop: string, value: any) {
        if (!prop || typeof prop !== 'string' || !prop.length) {
            throw new Error(`${prop} should be a string`);
        }
        if (!value.toString().length) {
            throw new Error(`The value is not set`);
        }
        this.paramObjects[prop] = value;
        return this;
    }

    /*Set header with custom key to accompany request*/
    public setHeader(prop: string, value: any) {
        if (!prop || typeof prop !== 'string' || !prop.length) {
            throw new Error(`${prop} should be a string`);
        }
        if (!value.toString().length) {
            throw new Error(`The value is not set`);
        }
        this.headerObjects[prop] = value;
        return this;
    }

    /*Set header with custom key to accompany request*/
    public setRequestOption(prop: string, value: any) {
        if (!prop || typeof prop !== 'string' || !prop.length) {
            throw new Error(`The request option property is required and should be a string`);
        }
        if (!value.toString().length) {
            throw new Error(`The value of the request option is required`);
        }
        this.requestOptions[prop] = value;
        return this;
    }


    /*Finally send the request after building it*/
    public send<T>(method: string = GET, body: any = {}): Observable<T> {
        if (!this.requestUrl) {
            throw new Error('Error: the request url is not set.');
        }
        return this.buildRequest<T>(method, body);
    }

    /*Build the request with the available options*/
    private buildRequest<T>(method: string, body: any = {}): Observable<T> {
        const headers = new HttpHeaders(this.headerObjects);
        const url: string = this.requestUrl;
        const params = new HttpParams({fromObject: this.paramObjects });
        const options = Object.assign({}, this.requestOptions, {params, headers});
        let httpRequest = null;
        switch (method) {
            case POST :
                httpRequest = this.http.post<T>(url, body, options);
                break;
            case PUT :
                httpRequest = this.http.put<T>(url, body, options);
                break;
            case DELETE :
                httpRequest = this.http.delete<T>(url, options);
                break;
            case GET :
                httpRequest = this.http.get<T>(url, options);
                break;
            default:
                httpRequest = this.http.get<T>(url, options);
                break;
        }
        if (!httpRequest) {
            throw new Error('Error: Nothing to send. Follow the instructions in setting up your request');
        }

        return httpRequest;
    }
    private clear() {
        this.requestUrl = null;
        this.headerObjects = {};
        this.paramObjects = {};
        this.requestOptions = {};
    }
}
