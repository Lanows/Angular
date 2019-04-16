import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setParams: {
                'api_key': '583aea9c82cd59697a0aa7b1dc106a21'
            }
        })
        // let me = JSON.parse(localStorage.getItem('me'));

        // if (me && me.account && me.account.token) {
        // request = request.clone({
        //     setHeaders: { 
        //         Authorization: `Token ${me.account.token}`
        //     }
        // });
        // }

        return next.handle(request);
    }
}