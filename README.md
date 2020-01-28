# Slalom's React-Native Dojo!

## TODO-List

5. Take screenshots of the various screens reached during installation
6. Make pull request for each of the feature implementations for the dojo.
8. Outline bonus challenge task.
9. Provide additional learning resources.

## Project Description

For this dojo, we will be completing the features of a simple shopping cart application, built with React Native and Redux. The goal of the dojo is to get people more comfortable with working with mobile and React Native, Redux is simply there to make managing states easier. One of the exercises will require writing the logic of a Redux reducer, however the goal will not be to use redux best practices, but instead just manipulate the state to make to do what you want.

This dojo is intended for those who have a basic understanding of React or greater. However, the dojo supporters will do their best to help those using React/React-Native for the first time.

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

For iOS:how

`
react-native run-ios
`

Note: depending on how node is installed on your machine, you may need to add **npx** before the command.

###### Exercise 2: Make the Button Component

This is the core exercise to get you started with React Native, if you know how to make components, you know how to make React Native apps.

In React Native, JSX uses React elements that translate to native components. for example:

 ```html
    <TouchableOpacity
      onPress={() => {}}
      style={styles.button}>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>{props.content}</Text>
      </View>
    </TouchableOpacity>
```

Each of these HTML-like tags translates to a widget that in iOS and Android. Similar to React, these components has props (properties) that can give you control of what they do. Most components have a style property which allows you to change how it looks. Styles in React Native are similar to CSS, however, a lot of stylings available in CSS are not available in React Native. inversely there are a few styles available for React Native that are not available in CSS such as marginVertical.

 ```html
  const styles = StyleSheet.create({
  button: {
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: 'blue',
  },
  textContainer: { },
  textContent: { },
});

```

1. For this exercise, try making a button component that adds 2 buttons using icons from react-native-vector-icons that look something like this:

<img src="docs/images/button_component.png" width="250" height="250">

https://github.com/oblador/react-native-vector-icons
Material icons have already been installed in this dojo project, so it is reccommended that those are used. React native vector icons have an onPress prop, so using buttons or touchable components are not neccessary for this exercise.

###### Exercise 3: Give Logic to the Buttons

This is where the Redux portion of the dojo comes in, so part of this is not mandatory.
As part of this exercise you will be filling in the logic of the reducer so that the shopping cart gets populated when items are added to the reducer. For this portion of the dojo unless you have experience with React and Redux, we will not ask you to follow best practices for Redux, and will allow you to put conditional logic in your reducer for simplicity.

Note: Redux assumes that you will not recognize mutations to the state array, so keep that in mind when writing the logic.

1. Fill in the logic for the ADD_TO_CART case so that the state array has the newly added item from the payload.

2. Add the onPress functionality to the plus button so that when you press it, it calls the reducer with the ADD_TO_CART action.

3. (Optional) Add the onPress functionality for the remove from cart button.


###### Bonus Challenge: Make a checkout screen

React Native is very simple if you are already familiar with React and Redux. The only additional knowledge required to make React Native apps if you are familiar with the former is to know how JSX translates to native components, using 3rd party libraries in your React Native apps, and the additional operations requirements for native development.

As a bonus challenge, if you have completed the above exercises, make a checkout screen using React Native in Redux.

The only specifications for the screen are that it must sum all of the dollar values for each items in the shopping cart. Good luck, and we hope you enjoyed! If you want an example of how the navigation was done in this app, take a look at the ShoppingCart.js in the src directory and the ShoppingCartIcon.js in the components directory.
