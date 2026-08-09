type DecorativeVariant = 'home' | 'hifz';

interface DecorativePath {
  placement: string;
  forest: string;
  accent: string;
}

const pathSets: Record<DecorativeVariant, DecorativePath[]> = {
  home: [
    {
      placement: 'primary',
      forest: 'M-80 310 C120 210 285 440 155 720 C28 990 250 1160 175 1460 C112 1710 -72 1820 62 2110 C154 2310 340 2380 286 2680',
      accent: 'M-68 330 C132 230 297 460 167 740 C40 1010 262 1180 187 1480',
    },
    {
      placement: 'product',
      forest: 'M1508 1240 C1265 1110 1198 1455 1362 1695 C1505 1905 1384 2188 1178 2300 C1012 2390 1048 2650 1286 2784 C1442 2872 1480 3060 1370 3210',
      accent: 'M1496 1264 C1278 1140 1220 1468 1376 1708 C1518 1926 1398 2204 1192 2318',
    },
    {
      placement: 'lower',
      forest: 'M1510 3650 C1294 3510 1118 3740 1242 3988 C1364 4234 1160 4448 872 4380 C610 4318 486 4542 624 4770 C738 4958 620 5190 356 5320',
      accent: 'M1495 3680 C1308 3550 1140 3762 1260 4004 C1380 4248 1178 4464 890 4398',
    },
  ],
  hifz: [
    {
      placement: 'hifz-hero',
      forest: 'M-90 280 C165 180 318 470 172 760 C30 1044 270 1268 158 1590 C78 1820 -82 2038 86 2310',
      accent: 'M-72 304 C178 210 332 490 188 782 C52 1058 286 1282 176 1608',
    },
    {
      placement: 'hifz-mid',
      forest: 'M1525 1860 C1260 1700 1134 2028 1302 2290 C1478 2564 1288 2818 1040 2935 C838 3030 910 3310 1194 3460 C1420 3578 1500 3830 1328 4050',
      accent: 'M1508 1888 C1278 1740 1160 2046 1320 2310 C1490 2582 1304 2838 1058 2952',
    },
    {
      placement: 'hifz-lower',
      forest: 'M-120 4300 C132 4150 326 4400 194 4682 C70 4946 260 5160 520 5090 C758 5028 938 5260 820 5536 C720 5770 900 6040 1190 6150',
      accent: 'M-98 4326 C146 4184 342 4422 212 4702 C92 4960 278 5178 538 5108',
    },
  ],
};

interface GlobalDecorativeBackgroundProps {
  variant?: DecorativeVariant;
}

export const GlobalDecorativeBackground = ({ variant = 'home' }: GlobalDecorativeBackgroundProps) => (
  <div className={`global-page-decoration global-page-decoration--${variant}`} aria-hidden="true">
    <div className={`global-page-pattern global-page-pattern--${variant}`} />
    <svg
      className="global-page-decoration__lines"
      viewBox={variant === 'hifz' ? '0 0 1440 6400' : '0 0 1440 5600'}
      preserveAspectRatio="none"
      focusable="false"
    >
      {pathSets[variant].map((path) => (
        <g key={path.placement} className={`global-flow-line global-flow-line--${path.placement}`}>
          <path className="global-flow-line__forest" d={path.forest} vectorEffect="non-scaling-stroke" />
          <path className="global-flow-line__accent" d={path.accent} vectorEffect="non-scaling-stroke" />
        </g>
      ))}
    </svg>
  </div>
);
