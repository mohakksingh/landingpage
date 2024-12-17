import { ReactNode, useRef, useState, MouseEvent } from "react";
import "./CardWithAnimationComponent.css"

function CardWithAnimationComponent({ children }: { children: ReactNode }) {
  const [hoverPosition, setHoverPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const lightSize = rect.width * 0.5; // 50% of container's width
    
    // Keep the light at the top, but spread horizontally based on mouse position
    const x = e.clientX - rect.left - lightSize / 2;
    const y = 0; // Fixed at the top
    
    setHoverPosition({x, y});
  };

  return (
    <div
      className="main_div_card_with_animation"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setHoverPosition({ x: 0, y: 0 })}
    >
      <div 
        className="light bg-[#cbd5e1]" 
        style={{
          transform: `translate(${hoverPosition.x}px, ${hoverPosition.y}px)`,
          opacity: hoverPosition.x !== 0 ? 0.5 : 0
        }}
      />
      {children}
    </div>
  );
}

export default CardWithAnimationComponent;