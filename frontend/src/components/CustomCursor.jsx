import React, { useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  // Mouse position motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the "fluid" effect
  // Main dot spring (very fast)
  const dotX = useSpring(mouseX, { damping: 30, stiffness: 800 });
  const dotY = useSpring(mouseY, { damping: 30, stiffness: 800 });

  // Outer ring spring (slower, more fluid)
  const ringX = useSpring(mouseX, { damping: 40, stiffness: 250 });
  const ringY = useSpring(mouseY, { damping: 40, stiffness: 250 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      mouseX.set(clientX);
      mouseY.set(clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, input, textarea, [role="button"], .group')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleHoverStart);
    window.addEventListener('mouseout', handleHoverEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleHoverStart);
      window.removeEventListener('mouseout', handleHoverEnd);
    };
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden lg:block">
      {/* 1. Fluid Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-blue-500/50 rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 1.8 : isClicking ? 0.8 : 1,
          borderWidth: isHovering ? '1px' : '2px',
          borderColor: isHovering ? 'rgba(59, 130, 246, 0.8)' : 'rgba(59, 130, 246, 0.4)',
          backgroundColor: isHovering ? 'rgba(59, 130, 246, 0.05)' : 'transparent',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      />

      {/* 2. Trailing "Fluid" Ghost Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-purple-500/20 rounded-full"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 2.2 : isClicking ? 0.5 : 1.2,
          opacity: isHovering ? 0.3 : 0.1,
        }}
        transition={{ type: 'spring', damping: 50, stiffness: 100 }} // Much slower for trailing effect
      />

      {/* 3. Central Interactive Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-blue-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.5)]"
        style={{
          x: dotX,
          y: dotY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isHovering ? 0 : isClicking ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
      />

      {/* 4. Hover Glow Effect */}
      {isHovering && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 0.15, scale: 2.5 }}
          className="fixed top-0 left-0 w-10 h-10 bg-blue-400 rounded-full blur-2xl"
          style={{
            x: ringX,
            y: ringY,
            translateX: '-50%',
            translateY: '-50%',
          }}
        />
      )}
    </div>
  );
};

export default CustomCursor;
