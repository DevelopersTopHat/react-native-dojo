
  

# Slalom's React-Native Dojo!

## Project Description

For this dojo, we will be completing the features of a simple shopping cart application, built with React Native and Redux. The goal of the dojo is to get people more comfortable with working with mobile and React Native; Redux is simply there to introduce an alternative method for managing states. One of the exercises will require writing the logic of a Redux reducer, however the goal will not be to use redux best practices, but instead just manipulate the state to make to do what you want.

This dojo is intended for those who have a basic understanding of React or greater. However, the dojo supporters will do their best to help those using React/React-Native for the first time.

## Installation of the Dojo Project

Note: The installation steps are different depending on the laptop OS and the phone OS, so you will need to follow the steps in the getting started docs. Also consider installing yarn as that will be the package manager of choice for this dojo.

https://yarnpkg.com/en/docs/install

https://reactnative.dev/docs/environment-setup

  

Running an application is different depending on if you use a physical device, or a virtual one. The pre-requisites for using a virtual device are having either XCode or Android Studio installed if you are using MacOS, or Android Studio if you are using Windows. Virtualization needs to be enabled on your computer if you want to use a simulator.

  

If you are planning on using a real device to debug your React Native application, usb debugging must be enabled on your device (https://support.brightcove.com/debugging-mobile-devices). You will also need a charging cable to connect your device to the computer you are working from.

  

You will also need an IDE to edit your code in. VSCode is the recommended IDE for this dojo :)

  

## Exercises to Complete

  

#### Exercise 1: Setup the Project

  

1. Start by downloading all of the necessary programs for running React Native on your operating system. For this Dojo, we will be using Yarn as our package manager, which you can install here: https://yarnpkg.com/en/docs/install

  

Once you have installed the package manager run:

  

` yarn install`

  

For MacOS you may need to also do this:

  

`cd ios && pod install && cd ..`

  

2. Once you have successfully installed all of the neccessary programs make sure you can run the dojo application. To run the project you can use the command

  

For Android:

  

`
npx react-native run-android
`

  

For iOS:how

  

`
npx react-native run-ios
`

  

Note: in order for the React Native project commands to be run irrespective of the version of the React Native CLI the keyword **npx** must be run before the command.

Sometimes the metro server will fail to run with an error in the console. This is usually caused by a broken version of NodeJS, and can be permanently fixed by switching to a version that doesn't throw that error :). If you aren't in the mood change Node versions this is a temporary fix https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start  


#### Exercise 2: Make the Expanding Tile Component
  
A lot of the advantages of React Native come from the fact that it is written with JavaScript, which means you can take advantage of the expansive list of JavaScript libraries. This exercise's primary focus will be a common implementation strategy in React Native, making use of a React-Native-Toast library and more vanilla approach to handling props with parent and child relationships.

This is the core exercise to get you started with React Native, if you know how to make components, you know how to make React Native apps.

In React Native, JSX uses React elements that translate to native components. for example:

```html
return (
    <TouchableOpacity
    onPress={() => {
      this.componentSpecificFunction();
    }}>
    <Image
      style={styles.itemImage}
      source={{
        uri: image,
      }}
    />
    </TouchableOpacity>
);
```

The above elements are transpiled to iOS and Android button widgets with a nested image. Similar to React, these components have props (properties) that can give you control of what they do. If you notice, only one element is returned as part of the render. This is because you cannot return more than one element in React-Native, so if you want a more complex component, you must nest your sub-elements in an outer container element (in this case TouchableOpacity, but usually a \<View>).

For this excercise you will be adding supporting logic and sub-component to the product catalog. At the end of this exercise you will have the basics required in order to build React-Native apps (believe me, it is a lot simpler once you are familiar with the language).

1. Navigate to ExpandingTile.js, there you will an empty state object in the constructor, empty function called toggleDescriptionDisplay and an incomplete return statement inside of the render function.
2. Start by adding a state to the state object that you will use to track whether the description is toggled or not.
3. Now that you can track the state of the item description, you can implement it's toggling inside of the toggleDescriptionDisplay function. You can do this by calling the React function this.setState({someState: newDesiredState});

You can have conditional rendering of elements by doing the following:

```html
    <View style={styles.textContainer}>
      {logic && <Text style={styles.text}>This is great filler text {variableText} </Text>}
    </View>
```
Elements are truthy, so you can render then if your boolean condition is true. If you use a component state for your boolean value, you can dynamically render an element based on a user action, **for example you can render text based on whether a button was pressed to toggle a state**.

4. The logic required to toggle the description display is now there, so all that is left is to add the description elements and control it with that state.
5. Take a look at the ProductCatalog.js and notice that it is passing a function to the expanding tile. Use the expanding tile's parent props to call that function when the tile is pressed.

Most components have a style property which allows you to change how it looks. Styles in React Native are similar to CSS, however, a lot of stylings available in CSS are not available in React Native. However, there are a few styles available for React Native that are not available in CSS such as marginVertical.

Note that all non-numeric styles must be wrapped in quotes.

```html
const styles = StyleSheet.create({
  itemImage: {
    width: '90%',
    height: undefined,
    aspectRatio: 1,
    alignSelf: 'center',
    marginVertical: 8,
  },
  descriptionContainer: {},
  description: {},
});
```

6. Style the description to look nice within the tile.

#### Exercise 3: Make the Button Component

Example button JSX:

```html
<TouchableOpacity onPress={() => {}} style={styles.button}>
	<View  style={styles.textContainer}>
		<Text  style={styles.textContent}>{props.content}</Text>
	</View>
</TouchableOpacity>
```

Example button styling: 

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

  

2. The file you will make your changes to is src/components/ButtonComponent.js where you will add the \<Icon> component that is going to represent your button.

	2.a The \<Icon> component is a third party component that has its own unique props. The props that you will want to use to select what it displays is the "name" property. For the image above I used the "add" and "remove" names like so, but if you want to use your own, you can take a look at your options here https://material.io/resources/icons/?style=baseline.
	```html
	<Icon name="add"/>
	```
	2.b When you add functionality to the \<Icon> component, you will be utilizing its onPress prop. The onPress prop accepts a function as an argument which for simplicity you can do like this:
	
	```html
	<Icon onPress={() => {}} />
	```
	2.c Similarly to being able to add functionality to the component through its props, you can also style it! The \<Icon> component supports the size, color and the style tags, which you can use to modify how the icon looks.
	```html
	<Icon size={30} color="white" style={styles.button} />
	```
	
4. Each component can only return one piece of JSX. That means you will need to wrap all sub elements in a parent element like:

  

```html
const ButtonComponent = props => {
return (
	<View>
		<Icon/>
		<Icon/>
	</View>
	);
};
```

  

4. The methods for adding and removing items are available in the props. The logic for the buttons has not been implemented yet, since that is the next exercise! The methods do need to be passed the item to add/remove like this:

  

```
props.onPressAdd(props.item)
```

  

https://github.com/oblador/react-native-vector-icons

Material icons have already been installed in this dojo project, so it is reccommended that those are used. React native vector icons have an onPress prop, so using buttons or touchable components are not neccessary for this exercise.

  

#### Exercise 4: Give Logic to the Buttons

  

This is where the Redux portion of the dojo comes in, so part of this is not mandatory. Most of the setup required to use Redux in the React Native project is already added.

As part of this exercise you will be filling in the logic of the reducer so that the shopping cart gets populated when items are added to the reducer. For this portion of the dojo unless you have experience with React and Redux, we will not ask you to follow best practices for Redux, and will allow you to put conditional logic in your reducer for simplicity.

  

Note: Redux assumes that you will not mutate the state array, and will thus recognize them, so keep that in mind when writing the logic for the reducer.

  

1. Fill in the logic for the ADD_TO_CART case in the Reducer so that the state array has the newly added item from the payload.
	
	1.a You can find the reducer with the ADD_TO_CART case in reducers/cartItems.js
	
	1.b The item being passed in the button press is contained within the action parameter in the field payload. You can access the value like so:
	
```html
let selectedItem = action.payload;
```
1.c State array mutation will not propogate the change to all components, so doing something like state.push(action.payload) will not update the item count for the shopping cart in the home screen (on the cart screen you will see your items and the item count). You can get around the immutability issue by returning a new array like so:

```html
let updatedCartItemList = [...state, action.payload];
```
  

2. Add the onPress functionality to the plus button so that when you press it, it calls the reducer with the ADD_TO_CART action. You can reference part 4 of the button component section to see how to call the redux function.

  
3. (Optional) Add the reducer functionality for the remove from cart button.

	3a. Similar to the the add to cart functionality, you will simply need to add the logic that supports removing items to the reducer. You can treat the state array as the shopping cart contents, and you can treat the action.payload as the item to be removed from the state array.
	
	3b. You must handle the situation where if the item doesn't exist in the cart, and the remove from cart button is hit, the button should not do anything.

  
  

#### Bonus Challenge: Make a checkout screen

  

React Native is very simple if you are already familiar with React and Redux. The only additional knowledge required to make React Native apps if you are familiar with the former is to know how JSX translates to native components, using 3rd party libraries in your React Native apps, and the additional operations requirements for native development.

  

As a bonus challenge, if you have completed the above exercises, make a checkout screen using React Native in Redux.

  

The only specifications for the screen are that it must sum all of the dollar values for each items in the shopping cart. Good luck, and we hope you enjoyed! If you want an example of how the navigation was done in this app, take a look at the ShoppingCart.js in the src directory and the ShoppingCartIcon.js in the components directory.

  

##### Aditional resources

  

https://facebook.github.io/react-native/docs/getting-started

  

If you are interested in what the best practices for redux are, take a look here

https://redux.js.org/style-guide/style-guide/

  

If you are curious as to how you might handle the case of not using conditional logic in the reducer, here are some options outlined in a stack overflow post

https://stackoverflow.com/questions/53057531/can-i-use-condition-in-my-action-reducer

Parent child element communication in React-Native:

https://stackoverflow.com/questions/41147874/react-native-parent-child-communication-and-return-values

Here are some more references to shopping cart apps built in React Native

https://codeburst.io/e-commerce-mobile-shop-with-react-native-and-redux-623e829db967

http://nobrok.com/category/shopping-cart-app/

https://blog.nativebase.io/react-native-e-commerce-starter-to-build-your-e-commerce-app-532ef626b913
