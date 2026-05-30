import { industryIcons } from './iconMaps';

const sizes = {
  sm: 'h-10 w-10 [&_svg]:h-[18px] [&_svg]:w-[18px]',
  md: 'h-14 w-14 [&_svg]:h-7 [&_svg]:w-7',
  lg: 'h-16 w-16 [&_svg]:h-8 [&_svg]:w-8',
  xl: 'h-20 w-20 [&_svg]:h-10 [&_svg]:w-10',
};

/**
 * IconBox — gradient container for Lucide SVG icons.
 */
export default function IconBox({
  children,
  gradient = 'from-emerald-500 to-green-600',
  size = 'md',
  className = '',
  shape = '2xl',
}) {
  const radius = shape === 'full' ? 'rounded-full' : shape === 'xl' ? 'rounded-xl' : 'rounded-2xl';

  return (
    <div
      className={`flex shrink-0 items-center justify-center bg-gradient-to-br ${gradient} text-white shadow-lg shadow-slate-300/35 transition-transform duration-300 group-hover:scale-105 ${radius} ${sizes[size]} ${className}`}
    >
      {children}
    </div>
  );
}

export function IndustryIcon({ slug, size = 'md' }) {
  const cfg = industryIcons[slug];
  if (!cfg) return null;
  const { Icon, gradient } = cfg;
  return (
    <IconBox gradient={gradient} size={size}>
      <Icon strokeWidth={2} aria-hidden />
    </IconBox>
  );
}
