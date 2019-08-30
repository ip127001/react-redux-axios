application made with react and redux

### Flow of the app

```
1. Login Page ('/') 
It is a login page: If u use these credentials you can login into application: {test, 1234}
If you enter wrong credentials then, you can't access other routes.

2. Home Page ('/open-league')
after login, you can access this page. Here it retrieves the data from api, request sent using redux thunk(can write asynchronous code in action creator).

3. Contact Form
after login, you can access this static page.

4. before login -> if you access these routes, then you will be redirected to login page (route guard).

5. id, password are saved in redux store.
```