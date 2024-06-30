# Fitness Tracker Angular Firebase App

This project, Fitness Tracker Angular Firebase App, is an Angular-based application designed to help users track their fitness routines and progress. It leverages Firebase for backend services, including authentication, database, and hosting. The application is built with Angular 18 and integrates various modern web technologies for a seamless user experience.

## Features

- **User Authentication**: Secure login and registration functionality using Firebase Authentication.
- **Training Sessions**: Users can start new training sessions, view ongoing sessions, and browse their past training records.
- **Real-time Database**: Utilizes Firebase Real-time Database to store and manage training data.
- **Responsive Design**: Crafted with mobile-first approach ensuring a great experience across devices.
- **Material Design**: Utilizes Angular Material for a sleek and modern UI.
- **Tailwind CSS**: Integrates Tailwind CSS for rapid styling and customization.
- **State Management**: Employs NgRx for state management, ensuring a scalable and maintainable codebase.
- **Deployment**: Hosted on Firebase Hosting for easy access and scalability.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js
- Angular CLI (v18.0.2)
- Firebase account

### Installation

1. Clone the repo

    ```sh
    git clone https://github.com/manthanank/fitness-tracker-angular-firebase-app.git
    ```

2. Install NPM packages

    ```sh
    npm install
    ```

3. Set up Firebase project

    - Create a new Firebase project
    - Enable Firebase Authentication and Real-time Database
    - Add Firebase configuration to `src/environments/environment.ts` and `src/environments/environment.prod.ts`

4. Run the application

    ```sh
    ng serve
    ```

## Usage

- Register a new account or login with an existing one.
- Start a new training session by selecting an exercise and entering the duration.
- View ongoing sessions and past training records.
- Log out to securely end the session.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Preview

The application is deployed on Firebase Hosting. You can access it [here](https://fitness-tracker-app-angular.web.app/).

## Acknowledgements

- [Angular](https://angular.io/)
- [Firebase](https://firebase.google.com/)
- [Angular Material](https://material.angular.io/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NgRx](https://ngrx.io/)
- [RxJS](https://rxjs.dev/)

## Screenshots

Here are some screenshots of the application:

Home Page Before Login

![Home Page Before Login](/public/assets/images/home-page-before-login.png)

Login Page

![Login Page](/public/assets/images/login-page.png)

Home Page After Login

![Home Page After Login](/public/assets/images/home-page-after-login.png)

Signup Page

![Signup Page](/public/assets/images/login-page.png)

Training Page After Login

![Training Page After Login](/public/assets/images/training-page-after-login.png)

Past Exercises

![Past Exercises](/public/assets/images/past-exercises.png)

## Appendix

This project was created as part of the Angular (Full App) with Angular Material, Angularfire & NgRx course by Maximilian Schwarzmüller on Udemy. The course covers a wide range of topics including Angular fundamentals, components, services, routing, forms, HTTP, and more. It also includes a section on Firebase integration and deployment.

I have updated the project to Angular 18 and made some modifications to the original code.

For more information, visit the course page: [Angular (Full App) with Angular Material, Angularfire & NgRx](https://www.udemy.com/course/angular-full-app-with-angular-material-angularfire-ngrx)
