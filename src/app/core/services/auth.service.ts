import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, of, Subject } from 'rxjs';
import { User } from './../../features/dashboard/users/models/index';
import { HttpClient } from '@angular/common/http';
import { NotifierService } from './notifier.service';
import { Store } from '@ngrx/store';
import { environment } from 'src/app/environments/environment.development';
import { setAuthUser, unsetAuthUser } from '../store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private VALID_TOKEN = 'lksfdjglfdkgjklfdkjgldfjisdhfjsdfsdk';

  constructor(
    private http: HttpClient,
    private router: Router,
    private notifier: NotifierService,
    private store: Store<any> // Ajusta esto según tu estado raíz
  ) {}

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.http
        .get<User[]>(environment.apiUrl + '/users', {
          params: {
            email: username,
            password: password,
          },
        })
        .subscribe({
          next: (response) => {
            if (!response.length) {
              alert('Usuario o password invalido');
              resolve(false);
            } else {
              const authUser = response[0];
              localStorage.setItem('token', authUser.token);
              this.store.dispatch(setAuthUser({ payload: authUser }));
              resolve(true);
            }
          },
          error: (err) => {
            this.notifier.sendNotification('Error al iniciar sesion');
            reject(err);
          },
        });
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.store.dispatch(unsetAuthUser());
    this.router.navigate(['auth', 'login']);
  }

  verifyToken(): Observable<boolean> {
    const token = localStorage.getItem('token');
    if (!token) {
      return of(false);
    }
    return this.http
      .get<User[]>(environment.apiUrl + '/users', {
        params: {
          token,
        },
      })
      .pipe(
        map((response) => {
          if (!response.length) {
            return false;
          } else {
            const authUser = response[0];
            localStorage.setItem('token', authUser.token);
            this.store.dispatch(setAuthUser({ payload: authUser }));
            return true;
          }
        })
      );
  }

  obtenerUsuarioObservable(): Observable<any> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next({
          name: 'Name fake',
          email: 'fake@mail.com',
        });
        // observer.complete();
        // observer.error('Error desconocido');
      }, 2000);
    });
  }

  obtenerUsuarioPromise(): Promise<any> {
    return new Promise((resolve, reject) => {
      reject('Error desconocido');
      setTimeout(() => {
        resolve({
          name: 'Name fake',
          email: 'fake@mail.com',
        });
      }, 2000);
    });
  }
}
