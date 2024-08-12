# Food App - Get Me Therapy Project

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Screens](#screens)

## Overview

Welcome to my React web application project! This application is designed to provide a seamless user experience with advanced features, focusing on secure authentication and a dynamic tracking screen.

## Features

### Authentication and User Management

- **Secure Login**: Users can securely log in using their email and password credentials.
- **Google Sign-In Integration**: Simplify access with Google OAuth for quick and secure authentication.
- **User Registration**: New users can sign up using either email and password or their Google account.

### Dynamic Tracking Screen

- **Visual Countdown Clock**: A unique feature displaying an analog clock that counts down anticlockwise from the current time(when the web app starts) to 120 minutes earlier.
- **Interactive Slider**: Users can control the speed of the clock hands using a slider, ensuring a customizable experience.
- **Share Functionality**: Generate a shareable URL that replicates the current clock and slider configuration, facilitating easy collaboration or sharing of tracked time.
- **Quote Integration**: Display motivational quotes fetched from an external API, updating every 5 seconds to inspire users.

## Technologies Used

- **React**: JavaScript library for building responsive user interfaces.
- **React Router**: Declarative routing for navigating between pages.
- **Google OAuth**: Secure authentication and user management.
- **Tailwind CSS**: Utility-first CSS framework for fast and customizable styling.
- **Axios**: Promise-based HTTP client for making API requests.
- **Express.js**: Backend framework for serving APIs and managing data.
- **Open API**: API to fetch  random quotes on the tracking screen.

## Screens

### Onboarding

- **Onboarding Page1**
- **Onboarding Page2**
- **Onboarding Page3**

### Login and Authentication

- **Email and Password Login**
- **Google Login**
- **Email and Password Sign-up/Register**
- **Google Sign-up/Register**

### Forget Password and Email Verification

- **Forget Password Page**
- **Email Verification Page**
- **OTP Verification**
- **Reset Password Page**

### Tracking/Post-Login Screen

- **Analog Clock**: Displays time countdown anticlockwise.
- **Slider**: Adjusts the speed of the clock hands.
- **Share Button**: Generates a shareable URL.
- **Random Quotes**: Feature to display changing quotes.
=======
# Frontend Developer Assignment

## Overview
This project is a web application developed using ReactJS. It includes the following features:

1. Login and Authentication
2. Tracking/Post-Login Screen with:
- An Analog clock running anticlockwise, counting down from the current time to 120 minutes earlier.
- A slider to control the speed of the clock hands.
- A share button that generates a unique URL for sharing the current state of the clock and slider.
- An optional feature to display random quotes fetched from an open API every 5 seconds.

## Features
1. Login and Authentication
- Email and Password Login: Allows users to log in using their email and password.
- Google Login: Provides the option for users to log in with Google.
- Email and Password Sign-Up: Allows users to sign up and create an account using email and password.
- Google Sign-Up: Enables users to sign up and create an account using Google.
2. Tracking/Post-Login Screen
This screen is designed based on the UI provided for previous screens, maintaining the same style, colors, and overall look and feel.

### Components:
- **Analog Clock:**
Runs anticlockwise and counts down from the current time to 120 minutes earlier.
- **Speed Slider:**
Controls the speed of the clock hands, allowing users to increase or decrease the speed.
- **Share Button:**
Generates a unique URL when clicked, allowing another user to view the clock and slider on the same page with the exact same slider configuration.
- **Random Quotes (Optional):**
Uses an open API to show random quotes on the tracking screen, changing every 5 seconds.

## Deployment
The project is deployed on GitHub and hosted on Vercel.

- GitHub Repository: [Github Link](https://github.com/harshitkk11/Frontend_Developer_Project_GMT)
- Hosted Application: [Hosted Application Link](https://gmt-assignment.vercel.app/)

## Installation
To run this project locally, follow these steps:

1. Clone the repository:
```
git clone [[Your GitHub Repository Link]](https://github.com/harshitkk11/Frontend_Developer_Project_GMT)
cd Frontend_Developer_Project_GMT
```

2. Install dependencies:
```
npm install
```

3. Run the application:
```
npm start
```

4. Build the application for production:
```
npm run build
```

## Usage
- **Login:** Users can log in using their email and password or through Google.
- **Sign-Up:** Users can create a new account using their email and password or through Google.
- **Tracking Screen:** Users can interact with the analog clock, adjust the speed using the slider, and share the current state using the share button.
- **Random Quotes:** The tracking screen displays random quotes fetched from an open API every 5 seconds.
