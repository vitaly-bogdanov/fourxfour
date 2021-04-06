import TTile from '../abstractions/types/TTile';

/**
 * 
 * Задает случайный порядок цветов
 */
const randomArrayColorsHelper = (): TTile[] => {
  return ['aquamarine', 'lawngreen', 'orange', 'pink',
    'red', 'yellow', 'magenta', 'blue', 'aquamarine',
    'lawngreen', 'orange', 'pink', 'red', 'yellow', 'magenta',
    'blue'
  ].sort(() => Math.random() - 0.5).map(color => {
    return {color, open: false, couple: false};
  });
};

export default randomArrayColorsHelper;