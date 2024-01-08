# MayoLoader

MayoLoader is a customizable, animated loading component for React Native applications. It provides a smooth fading effect, adding a polished look to your app's loading experience.

## Features

- Easy to integrate into any React Native project.
- Customizable fading animation.
- Supports custom images and styling.

## Installation

To install MayoLoader, run the following command in your React Native project:

```bash
yarn add mayo-loader

## Usage

Import MayoLoader into your React Native component and use it as shown below:


```Typescript
import MayoLoader from 'mayo-loader';

const YourComponent = () => {
  return (
    <MayoLoader
      isVisible={true}
      imageSource={require('./path/to/your-image.jpg')}
    />
  );
};

export default YourComponent;

```

### Props

    isVisible: Boolean - Controls the visibility of the loader.
    imageSource: ImageSourcePropType - Specifies the image to be used in the loader.
    duration: Number (optional) - Duration of the fading animation in milliseconds.

### Customization

You can customize the loader by passing your own image source and adjusting the animation duration.

Example

Here's an example of how to use the MayoLoader with a custom image and a longer duration:


```Typescript
    <MayoLoader
    isVisible={isLoading}
    imageSource={require('./assets/custom-loader.jpg')}
    duration={2000}
    />
```

## License

This project is licensed under the MIT License.

## Contributing

Contributions to MayoLoader are always welcome! Feel free to open issues or submit pull requests.
