type SlideInProps = {
  direction: 'left' | 'right' | 'up' | 'down';
  type?: 'tween' | 'spring' | 'just' | 'keyframes' ;
  distance?: string 
  delay?: number;
  duration?: number;
}

export const slideIn = ({ direction, type, delay = 0.5, duration = 1,distance = '100%' }: SlideInProps) => ({
  hidden: {
    opacity: 0,
    x: direction === 'left' ? `-${distance}` : direction === 'right' ? `${distance}` : 0,
    y: direction === 'up' ? `${distance}` : `${distance}` === 'down' ? `${distance}` : 0,
  },
  show: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});
