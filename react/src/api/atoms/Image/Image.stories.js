import React from 'react';
import { number, text } from '@storybook/addon-knobs';

import Image from './Image';
import useDefaultPanel from '../../../storybook/useDefaultPanel';

export default {
  title: 'Atoms/Image',
  component: Image,
  parameters: {
    jest: ['Image.test.js'],
  },
};

const exampleImage = 'Yidhra-face.jpg';

export const Default = () => <Image src={ exampleImage } alt="Yidhra Face"/>;

export const CustomDimensions = () => <Image src={ exampleImage } alt="Yidhra Face" height="80" width="80"/>;

export const CustomClasses = () => (
  <>
    <Image src={ exampleImage } alt="Yidhra Face" classes="atom-image-circle"/>
    <Image src={ exampleImage } alt="Yidhra Face" classes="img-thumbnail"/>
  </>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <>
      <div className="text-muted">
        <p>The image "Yidhra-face.jpg" is hosted locally with this Storybook, use absolute URLs to change it.</p>
      </div>
      <Image
        src={ text('Source', 'Yidhra-face.jpg') }
        height={ number('Height', 120) }
        width={ number('Width', 120) }
        alt={ text('Alt Text', 'This is an image of stuff') }
        classes={ text('Classes', 'class-one') }
      />
    </>
  );
};
