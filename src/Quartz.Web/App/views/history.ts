import {autoinject} from 'aurelia-framework';
import {Parent} from "aurelia-framework";
import {Router} from "aurelia-router";
import {HttpClient} from "aurelia-http-client";

@autoinject
export class JobHistoryView {

    public entries: any[];

    constructor(private router: Router, private http: HttpClient) {
    }

    activate(params: any) {
        return this.http.get(`/api/schedulers/${params.schedulerName}/jobs/history`).then(response => {
            this.entries = <any[]>response.content;
        });
    }
}