export default function HimaLogo({ size = 40, showText = true }) {
  const h = size
  const w = size * 0.85

  return (
    <div className="flex items-center gap-2">
      <svg
        width={w}
        height={h}
        viewBox="0 0 85 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Pyramid / Building shape — left half sage green, right half white */}
        {/* Overall building silhouette clipped to left and right halves */}

        {/* Left half — sage green */}
        <clipPath id="left-half">
          <rect x="0" y="0" width="42.5" height="100" />
        </clipPath>
        {/* Right half — white */}
        <clipPath id="right-half">
          <rect x="42.5" y="0" width="42.5" height="100" />
        </clipPath>

        {/* Building shape path */}
        <g clipPath="url(#left-half)">
          {/* Main tower */}
          <rect x="20" y="30" width="45" height="65" fill="#6b8c5e" />
          {/* Pyramid top */}
          <polygon points="42.5,2 65,30 20,30" fill="#6b8c5e" />
          {/* Horizontal stripes */}
          <rect x="20" y="42" width="45" height="3" fill="#0d0d0d" opacity="0.3" />
          <rect x="20" y="53" width="45" height="3" fill="#0d0d0d" opacity="0.3" />
          <rect x="20" y="64" width="45" height="3" fill="#0d0d0d" opacity="0.3" />
          <rect x="20" y="75" width="45" height="3" fill="#0d0d0d" opacity="0.3" />
          {/* Side towers */}
          <rect x="8" y="50" width="14" height="45" fill="#6b8c5e" />
          <rect x="63" y="50" width="14" height="45" fill="#6b8c5e" />
        </g>

        <g clipPath="url(#right-half)">
          {/* Main tower */}
          <rect x="20" y="30" width="45" height="65" fill="#f5f5f5" />
          {/* Pyramid top */}
          <polygon points="42.5,2 65,30 20,30" fill="#f5f5f5" />
          {/* Horizontal stripes */}
          <rect x="20" y="42" width="45" height="3" fill="#0d0d0d" opacity="0.15" />
          <rect x="20" y="53" width="45" height="3" fill="#0d0d0d" opacity="0.15" />
          <rect x="20" y="64" width="45" height="3" fill="#0d0d0d" opacity="0.15" />
          <rect x="20" y="75" width="45" height="3" fill="#0d0d0d" opacity="0.15" />
          {/* Side towers */}
          <rect x="8" y="50" width="14" height="45" fill="#f5f5f5" />
          <rect x="63" y="50" width="14" height="45" fill="#f5f5f5" />
        </g>

        {/* Center divider line */}
        <line x1="42.5" y1="2" x2="42.5" y2="95" stroke="#0d0d0d" strokeWidth="1" opacity="0.4" />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: size * 0.38,
              color: '#f5f5f5',
              letterSpacing: '0.12em',
            }}
          >
            HIMA
          </span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 300,
              fontSize: size * 0.16,
              color: '#6b8c5e',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}
          >
            Electromecánica
          </span>
        </div>
      )}
    </div>
  )
}
