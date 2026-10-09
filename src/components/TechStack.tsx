import CircularCarousel from './CircularCarousel';
import { techStack } from './data/techStack';

export function TechStack() {
  return (
    <div style={{ width: '100%', height: '560px', position: 'relative' }}>
      <CircularCarousel
        items={techStack}
        preset="cylinder"
        intro="rise"
        cardWidth={220}
        aspectRatio={1}
        speed={14}
        captions={false}
        gap={25}
        tilt={-5}
        curve={1}
        perspective={2500}
        autoplay="drift"
        interval={3}
        direction="left"
        momentum={0.6}
        snap
        pauseOnHover
        focusOnClick
        draggable
        parallax={0.3}
        stretch={0.5}
        fadeColor="#0A101F"
        depthFade={0.55}
        innerShade={0.6}
        cornerRadius={12}
      />
    </div>
  );
}
