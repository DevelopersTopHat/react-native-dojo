# Slalom's React-Native Dojo!

## TODO-List

5. Take screenshots of the various screens reached during installation
6. Make pull request for each of the feature implementations for the dojo.
8. Outline bonus challenge task.
9. Provide additional learning resources.

## Project Description

For this dojo, we will be completing the features of a simple shopping cart application, built with React Native and Redux. The goal of the dojo is to get people more comfortable with working with mobile and React Native, Redux is simply there to make managing states easier. One of the exercises will require writing the logic of a Redux reducer, however the goal will not be to use redux best practices, but instead just manipulate the state to make to do what you want.

## Installation of the Dojo Project

Note: The installation steps are different depending on the laptop OS and the phone OS, so you will need to follow the steps in the getting started docs. Please also install yarn as that will be the package manager of choice for this dojo.
https://yarnpkg.com/en/docs/install
https://facebook.github.io/react-native/docs/getting-started

Running an application is different depending on if you use a physical device, or a virtual one. The pre-requisites for using a virtual device are having either XCode or Android Studio installed if you are using MacOS, or Android Studio if you are using Windows. Virtualization needs to be enabled on your computer if you want to use a simulator.

If you are planning on using a real device to debug your React Native application, usb debugging must be enabled on your device (https://support.brightcove.com/debugging-mobile-devices). You will also need a charging cable to connect your device to the computer you are working from.

You will also need an IDE to edit your code in. VSCode is the recommended IDE for this dojo :) 

#### Exercises to Complete

###### Exercise 1: Setup the Project

1. Start by downloading all of the necessary programs for running React Native on your operating system. For this Dojo, we will be using Yarn as our package manager, which you can install here: https://yarnpkg.com/en/docs/install

Once you have installed the package manager run:

` yarn install`

For MacOS you may need to also do this:

`cd ios && pod install && cd ..`

2. Once you have successfully installed all of the neccessary programs make sure you can run the dojo application. To run the project you can use the command 

For Android:

`
react-native run-android
`

For iOS:

`
react-native run-ios
`

###### Exercise 2: Make the Button Component

This is the core exercise to get you started with React Native, if you know how to make components, you know how to make React Native apps.

In React Native