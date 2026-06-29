import { motion } from 'framer-motion'

const lines = [
  // horizontal lines
  { d: 'M0 120 H200', delay: 0 },
  { d: 'M200 120 V60', delay: 0.2 },
  { d: 'M200 60 H380', delay: 0.4 },
  { d: 'M380 60 V200', delay: 0.6 },
  { d: 'M380 200 H600', delay: 0.8 },
  { d: 'M600 200 V80', delay: 1.0 },
  { d: 'M600 80 H800', delay: 1.2 },
  { d: 'M800 80 V300', delay: 1.4 },
  { d: 'M800 300 H1000', delay: 1.6 },
  { d: 'M1000 300 V150', delay: 1.8 },
  { d: 'M1000 150 H1200', delay: 2.0 },
  { d: 'M1200 150 V400', delay: 2.2 },
  { d: 'M100 300 H300', delay: 0.3 },
  { d: 'M300 300 V400', delay: 0.5 },
  { d: 'M300 400 H500', delay: 0.7 },
  { d: 'M500 400 V250', delay: 0.9 },
  { d: 'M500 250 H700', delay: 1.1 },
  { d: 'M700 250 V450', delay: 1.3 },
  { d: 'M700 450 H900', delay: 1.5 },
  { d: 'M900 450 V200', delay: 1.7 },
  { d: 'M50 500 H250', delay: 0.4 },
  { d: 'M250 500 V350', delay: 0.6 },
  { d: 'M250 350 H450', delay: 0.8 },
  { d: 'M450 350 V550', delay: 1.0 },
  { d: 'M450 550 H650', delay: 1.2 },
  { d: 'M650 550 V350', delay: 1.4 },
  { d: 'M650 350 H850', delay: 1.6 },
  { d: 'M850 350 V600', delay: 1.8 },
  { d: 'M850 600 H1100', delay: 2.0 },
  { d: 'M1100 600 V400', delay: 2.2 },
]

const nodes = [
  [200, 120], [200, 60], [380, 60], [380, 200], [600, 200], [600, 80],
  [800, 80], [800, 300], [1000, 300], [1000, 150], [1200, 150],
  [100, 300], [300, 300], [300, 400], [500, 400], [500, 250],
  [700, 250], [700, 450], [900, 450],
  [250, 500], [250, 350], [450, 350], [450, 550], [650, 550],
  [650, 350], [850, 350], [850, 600], [1100, 600],
]

export default function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="0 0 1300 700"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lines */}
        {lines.map((line, i) => (
          <motion.path
            key={i}
            d={line.d}
            stroke="#6b8c5e"
            strokeWidth="1.5"
            fill="none"
            opacity="0.35"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2.5,
              delay: line.delay,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Node dots */}
        {nodes.map(([cx, cy], i) => (
          <motion.circle
            key={i}
            cx={cx}
            cy={cy}
            r="4"
            fill="#6b8c5e"
            opacity="0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.6, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.8 + i * 0.07,
            }}
          />
        ))}

        {/* Pulse dots — animated */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`pulse-${i}`}
            cx={nodes[i * 6]?.[0] ?? 200}
            cy={nodes[i * 6]?.[1] ?? 120}
            r="6"
            fill="none"
            stroke="#6b8c5e"
            strokeWidth="1.5"
            initial={{ opacity: 0.8, scale: 1 }}
            animate={{ opacity: 0, scale: 3 }}
            transition={{
              duration: 2,
              delay: 2 + i * 0.6,
              repeat: Infinity,
              repeatDelay: 1.5,
            }}
          />
        ))}
      </svg>

      {/* Gradient overlay so content is readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-hima-black/60 via-hima-black/40 to-hima-black/90" />
    </div>
  )
}
