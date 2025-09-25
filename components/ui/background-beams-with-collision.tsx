"use client";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";
import React, { useRef, useState, useEffect } from "react";

// Funzione per generare colori casuali con esplosioni corrispondenti
const getRandomColorSet = () => {
  const colorSets = [
    {
      beam: 'from-red-500 via-pink-500 to-transparent',
      explosion: { gradient: 'from-transparent via-red-500 to-transparent', particle: 'from-red-500 to-pink-500' }
    },
    {
      beam: 'from-blue-500 via-cyan-500 to-transparent',
      explosion: { gradient: 'from-transparent via-blue-500 to-transparent', particle: 'from-blue-500 to-cyan-500' }
    },
    {
      beam: 'from-green-500 via-emerald-500 to-transparent',
      explosion: { gradient: 'from-transparent via-green-500 to-transparent', particle: 'from-green-500 to-emerald-500' }
    },
    {
      beam: 'from-yellow-500 via-orange-500 to-transparent',
      explosion: { gradient: 'from-transparent via-yellow-500 to-transparent', particle: 'from-yellow-500 to-orange-500' }
    },
    {
      beam: 'from-purple-500 via-violet-500 to-transparent',
      explosion: { gradient: 'from-transparent via-purple-500 to-transparent', particle: 'from-purple-500 to-violet-500' }
    },
    {
      beam: 'from-indigo-500 via-blue-500 to-transparent',
      explosion: { gradient: 'from-transparent via-indigo-500 to-transparent', particle: 'from-indigo-500 to-blue-500' }
    },
    {
      beam: 'from-pink-500 via-rose-500 to-transparent',
      explosion: { gradient: 'from-transparent via-pink-500 to-transparent', particle: 'from-pink-500 to-rose-500' }
    },
    {
      beam: 'from-cyan-500 via-teal-500 to-transparent',
      explosion: { gradient: 'from-transparent via-cyan-500 to-transparent', particle: 'from-cyan-500 to-teal-500' }
    },
    {
      beam: 'from-orange-500 via-red-500 to-transparent',
      explosion: { gradient: 'from-transparent via-orange-500 to-transparent', particle: 'from-orange-500 to-red-500' }
    },
    {
      beam: 'from-lime-500 via-green-500 to-transparent',
      explosion: { gradient: 'from-transparent via-lime-500 to-transparent', particle: 'from-lime-500 to-green-500' }
    },
    {
      beam: 'from-fuchsia-500 via-purple-500 to-transparent',
      explosion: { gradient: 'from-transparent via-fuchsia-500 to-transparent', particle: 'from-fuchsia-500 to-purple-500' }
    },
    {
      beam: 'from-sky-500 via-blue-500 to-transparent',
      explosion: { gradient: 'from-transparent via-sky-500 to-transparent', particle: 'from-sky-500 to-blue-500' }
    },
    {
      beam: 'from-emerald-500 via-cyan-500 to-transparent',
      explosion: { gradient: 'from-transparent via-emerald-500 to-transparent', particle: 'from-emerald-500 to-cyan-500' }
    },
    {
      beam: 'from-rose-500 via-pink-500 to-transparent',
      explosion: { gradient: 'from-transparent via-rose-500 to-transparent', particle: 'from-rose-500 to-pink-500' }
    },
    {
      beam: 'from-amber-500 via-yellow-500 to-transparent',
      explosion: { gradient: 'from-transparent via-amber-500 to-transparent', particle: 'from-amber-500 to-yellow-500' }
    },
    {
      beam: 'from-teal-500 via-green-500 to-transparent',
      explosion: { gradient: 'from-transparent via-teal-500 to-transparent', particle: 'from-teal-500 to-green-500' }
    }
  ];
  return colorSets[Math.floor(Math.random() * colorSets.length)];
};

export const BackgroundBeamsWithCollision = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const parentRef = useRef<HTMLDivElement>(null);

  const beams = [
    {
      initialX: 10,
      translateX: 10,
      duration: 12,
      repeatDelay: 3,
      delay: 2,
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 80,
      translateX: 80,
      duration: 10,
      repeatDelay: 2,
      delay: 1,
      className: "h-8",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 150,
      translateX: 150,
      duration: 14,
      repeatDelay: 4,
      delay: 3,
      className: "h-10",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 220,
      translateX: 220,
      duration: 16,
      repeatDelay: 1,
      delay: 0,
      className: "h-6",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 290,
      translateX: 290,
      duration: 9,
      repeatDelay: 5,
      delay: 2,
      className: "h-12",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 360,
      translateX: 360,
      duration: 18,
      repeatDelay: 2,
      delay: 4,
      className: "h-8",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 430,
      translateX: 430,
      duration: 8,
      repeatDelay: 6,
      delay: 1,
      className: "h-16",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 500,
      translateX: 500,
      duration: 15,
      repeatDelay: 3,
      delay: 5,
      className: "h-4",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 570,
      translateX: 570,
      duration: 11,
      repeatDelay: 4,
      delay: 0,
      className: "h-20",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 640,
      translateX: 640,
      duration: 13,
      repeatDelay: 2,
      delay: 3,
      className: "h-6",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 710,
      translateX: 710,
      duration: 9,
      repeatDelay: 7,
      delay: 2,
      className: "h-14",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 780,
      translateX: 780,
      duration: 17,
      repeatDelay: 1,
      delay: 4,
      className: "h-8",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 850,
      translateX: 850,
      duration: 8,
      repeatDelay: 5,
      delay: 1,
      className: "h-10",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 920,
      translateX: 920,
      duration: 14,
      repeatDelay: 3,
      delay: 6,
      className: "h-12",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 990,
      translateX: 990,
      duration: 10,
      repeatDelay: 4,
      delay: 0,
      className: "h-6",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1060,
      translateX: 1060,
      duration: 19,
      repeatDelay: 2,
      delay: 3,
      className: "h-18",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1130,
      translateX: 1130,
      duration: 9,
      repeatDelay: 6,
      delay: 2,
      className: "h-8",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1200,
      translateX: 1200,
      duration: 13,
      repeatDelay: 3,
      delay: 5,
      className: "h-14",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1270,
      translateX: 1270,
      duration: 15,
      repeatDelay: 1,
      delay: 1,
      className: "h-10",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1340,
      translateX: 1340,
      duration: 8,
      repeatDelay: 8,
      delay: 4,
      className: "h-6",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1410,
      translateX: 1410,
      duration: 16,
      repeatDelay: 2,
      delay: 0,
      className: "h-16",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1480,
      translateX: 1480,
      duration: 11,
      repeatDelay: 5,
      delay: 3,
      className: "h-12",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1550,
      translateX: 1550,
      duration: 14,
      repeatDelay: 4,
      delay: 6,
      className: "h-8",
      colorSet: getRandomColorSet(),
    },
    {
      initialX: 1620,
      translateX: 1620,
      duration: 12,
      repeatDelay: 3,
      delay: 2,
      className: "h-20",
      colorSet: getRandomColorSet(),
    },
  ];

  return (
    <div
      ref={parentRef}
      className={cn(
        "h-[80vh] md:h-[40rem] relative flex items-center w-full justify-center overflow-hidden",
        className
      )}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/sfondo.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {beams.map((beam) => (
        <CollisionMechanism
          key={beam.initialX + "beam-idx"}
          beamOptions={beam}
          containerRef={containerRef}
          parentRef={parentRef}
        />
      ))}

      {children}
      <div
        ref={containerRef}
        className="absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none"
        style={{
          boxShadow:
            "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset",
        }}
      ></div>
    </div>
  );
};

const CollisionMechanism = React.forwardRef<
  HTMLDivElement,
  {
    containerRef: React.RefObject<HTMLDivElement>;
    parentRef: React.RefObject<HTMLDivElement>;
    beamOptions?: {
      initialX?: number;
      translateX?: number;
      initialY?: number;
      translateY?: number;
      rotate?: number;
      className?: string;
      duration?: number;
      delay?: number;
      repeatDelay?: number;
      colorSet?: { beam: string; explosion: { gradient: string; particle: string } };
    };
  }
>(({ parentRef, containerRef, beamOptions = {} }, ref) => {
  const beamRef = useRef<HTMLDivElement>(null);
  const [collision, setCollision] = useState<{
    detected: boolean;
    coordinates: { x: number; y: number } | null;
  }>({
    detected: false,
    coordinates: null,
  });
  const [beamKey, setBeamKey] = useState(0);
  const [cycleCollisionDetected, setCycleCollisionDetected] = useState(false);
  const [currentColorSet, setCurrentColorSet] = useState(beamOptions.colorSet || getRandomColorSet());

  useEffect(() => {
    const checkCollision = () => {
      if (
        beamRef.current &&
        containerRef.current &&
        parentRef.current &&
        !cycleCollisionDetected
      ) {
        const beamRect = beamRef.current.getBoundingClientRect();
        const containerRect = containerRef.current.getBoundingClientRect();
        const parentRect = parentRef.current.getBoundingClientRect();

        if (beamRect.bottom >= containerRect.top) {
          const relativeX =
            beamRect.left - parentRect.left + beamRect.width / 2;
          const relativeY = beamRect.bottom - parentRect.top;

          setCollision({
            detected: true,
            coordinates: {
              x: relativeX,
              y: relativeY,
            },
          });
          setCycleCollisionDetected(true);
        }
      }
    };

    const animationInterval = setInterval(checkCollision, 50);

    return () => clearInterval(animationInterval);
  }, [cycleCollisionDetected, containerRef]);

  useEffect(() => {
    if (collision.detected && collision.coordinates) {
      setTimeout(() => {
        setCollision({ detected: false, coordinates: null });
        setCycleCollisionDetected(false);
      }, 2000);

      setTimeout(() => {
        setBeamKey((prevKey) => prevKey + 1);
        // Cambia colori casuali ad ogni nuovo ciclo
        setCurrentColorSet(getRandomColorSet());
      }, 2000);
    }
  }, [collision]);

  return (
    <>
      <motion.div
        key={beamKey}
        ref={beamRef}
        animate="animate"
        initial={{
          translateY: beamOptions.initialY || "-200px",
          translateX: beamOptions.initialX || "0px",
          rotate: beamOptions.rotate || 0,
        }}
        variants={{
          animate: {
            translateY: beamOptions.translateY || "1800px",
            translateX: beamOptions.translateX || "0px",
            rotate: beamOptions.rotate || 0,
          },
        }}
        transition={{
          duration: beamOptions.duration || 8,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          delay: beamOptions.delay || 0,
          repeatDelay: beamOptions.repeatDelay || 0,
        }}
        className={cn(
          "absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t",
          currentColorSet.beam,
          beamOptions.className
        )}
      />
      <AnimatePresence>
        {collision.detected && collision.coordinates && (
          <Explosion
            key={`${collision.coordinates.x}-${collision.coordinates.y}`}
            className=""
            explosionColors={currentColorSet.explosion}
            style={{
              left: `${collision.coordinates.x}px`,
              top: `${collision.coordinates.y}px`,
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
});

CollisionMechanism.displayName = "CollisionMechanism";

const Explosion = ({
  explosionColors,
  ...props
}: React.HTMLProps<HTMLDivElement> & {
  explosionColors: { gradient: string; particle: string }
}) => {

  const spans = Array.from({ length: 20 }, (_, index) => ({
    id: index,
    initialX: 0,
    initialY: 0,
    directionX: Math.floor(Math.random() * 80 - 40),
    directionY: Math.floor(Math.random() * -50 - 10),
  }));

  return (
    <div {...props} className={cn("absolute z-50 h-2 w-2", props.className)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className={cn(
          "absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r blur-sm",
          explosionColors.gradient
        )}
      ></motion.div>
      {spans.map((span) => (
        <motion.span
          key={span.id}
          initial={{ x: span.initialX, y: span.initialY, opacity: 1 }}
          animate={{
            x: span.directionX,
            y: span.directionY,
            opacity: 0,
          }}
          transition={{ duration: Math.random() * 1.5 + 0.5, ease: "easeOut" }}
          className={cn(
            "absolute h-1 w-1 rounded-full bg-gradient-to-b",
            explosionColors.particle
          )}
        />
      ))}
    </div>
  );
};