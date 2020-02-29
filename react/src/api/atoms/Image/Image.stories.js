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

const exampleImage = 'sample-image.jpg';

export const Default = () => <Image src={ exampleImage } alt="Alt Text"/>;

export const CustomDimensions = () => <Image src={ exampleImage } alt="Alt Text" height="80" width="80"/>;

export const CustomClasses = () => (
  <>
    <Image src={ exampleImage } alt="Alt Text" classes="atom-image-circle"/>
    <Image src={ exampleImage } alt="Alt Text" classes="img-thumbnail"/>
  </>
);

export const Playground = () => {
  useDefaultPanel('Knobs');

  return (
    <>
      <div className="text-muted">
        <p>The image "sample-image.jpg" is hosted locally with this Storybook, use absolute URLs to change it.</p>
      </div>
      <Image
        src={ text('Source', 'sample-image.jpg') }
        height={ number('Height', 120) }
        width={ number('Width', 120) }
        alt={ text('Alt Text', 'This is an image of stuff') }
        classes={ text('Classes', 'class-one') }
      />
    </>
  );
};
