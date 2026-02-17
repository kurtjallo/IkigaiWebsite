import { cn } from '@/lib/utils'

interface IconProps {
  className?: string
  size: number
}

interface PillarIconProps {
  type:
    | 'strategic'
    | 'governance'
    | 'operational'
    | 'program'
    | 'leadership'
    | 'accountability'
    | 'community'
  className?: string
  size?: number
}

function StrategicIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer circle */}
      <circle cx={12} cy={12} r={9} />
      {/* Inner diamond pointing upward */}
      <path d="M12 5.5 L15.5 12 L12 18.5 L8.5 12 Z" />
      {/* Cardinal tick marks */}
      <line x1={12} y1={3} x2={12} y2={4.5} />
      <line x1={21} y1={12} x2={19.5} y2={12} />
      <line x1={12} y1={21} x2={12} y2={19.5} />
      <line x1={3} y1={12} x2={4.5} y2={12} />
    </svg>
  )
}

function GovernanceIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Vertical pillar */}
      <line x1={12} y1={6} x2={12} y2={19} />
      {/* Horizontal beam */}
      <line x1={5} y1={6} x2={19} y2={6} />
      {/* Left pan */}
      <line x1={7} y1={6} x2={7} y2={11} />
      <line x1={9} y1={6} x2={9} y2={11} />
      <path d="M6 11 Q8 13.5 10 11" />
      {/* Right pan */}
      <line x1={15} y1={6} x2={15} y2={11} />
      <line x1={17} y1={6} x2={17} y2={11} />
      <path d="M14 11 Q16 13.5 18 11" />
      {/* Fulcrum triangle at base */}
      <path d="M10 19 L12 17 L14 19 Z" />
      {/* Base line */}
      <line x1={9} y1={21} x2={15} y2={21} />
    </svg>
  )
}

function OperationalIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Large gear circle */}
      <circle cx={9.5} cy={9.5} r={5} />
      {/* Large gear center */}
      <circle cx={9.5} cy={9.5} r={1.5} />
      {/* Large gear teeth */}
      <line x1={9.5} y1={2.5} x2={9.5} y2={4} />
      <line x1={9.5} y1={15} x2={9.5} y2={16.5} />
      <line x1={2.5} y1={9.5} x2={4} y2={9.5} />
      <line x1={15} y1={9.5} x2={16.5} y2={9.5} />
      <line x1={5.2} y1={5.2} x2={6.2} y2={6.2} />
      <line x1={12.8} y1={12.8} x2={13.8} y2={13.8} />
      <line x1={5.2} y1={13.8} x2={6.2} y2={12.8} />
      <line x1={12.8} y1={6.2} x2={13.8} y2={5.2} />
      {/* Small gear circle */}
      <circle cx={17} cy={17} r={3.5} />
      {/* Small gear center */}
      <circle cx={17} cy={17} r={1.2} />
      {/* Small gear teeth */}
      <line x1={17} y1={12} x2={17} y2={13} />
      <line x1={17} y1={21} x2={17} y2={22} />
      <line x1={12} y1={17} x2={13} y2={17} />
      <line x1={21} y1={17} x2={22} y2={17} />
      <line x1={14.1} y1={14.1} x2={14.8} y2={14.8} />
      <line x1={19.2} y1={19.2} x2={19.9} y2={19.9} />
    </svg>
  )
}

function ProgramIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Top node */}
      <circle cx={12} cy={5} r={2.5} />
      {/* Bottom-left node */}
      <circle cx={7} cy={14} r={2.5} />
      {/* Bottom-right node */}
      <circle cx={17} cy={14} r={2.5} />
      {/* Bottom-center node */}
      <circle cx={12} cy={21} r={2} />
      {/* Connecting lines */}
      <line x1={10.5} y1={7} x2={8.5} y2={12} />
      <line x1={13.5} y1={7} x2={15.5} y2={12} />
      <line x1={8.8} y1={16} x2={10.5} y2={19.5} />
      <line x1={15.2} y1={16} x2={13.5} y2={19.5} />
    </svg>
  )
}

function LeadershipIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* 4-pointed star - main points */}
      <path d="M12 2 L13.5 10 L22 12 L13.5 14 L12 22 L10.5 14 L2 12 L10.5 10 Z" />
      {/* Inner diamond */}
      <path d="M12 7 L15 12 L12 17 L9 12 Z" />
      {/* Diagonal accent lines */}
      <line x1={5.5} y1={5.5} x2={7.5} y2={7.5} />
      <line x1={18.5} y1={5.5} x2={16.5} y2={7.5} />
      <line x1={18.5} y1={18.5} x2={16.5} y2={16.5} />
      <line x1={5.5} y1={18.5} x2={7.5} y2={16.5} />
    </svg>
  )
}

function AccountabilityIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Concentric circles */}
      <circle cx={12} cy={12} r={9} />
      <circle cx={12} cy={12} r={6} />
      <circle cx={12} cy={12} r={3} />
      {/* Center dot */}
      <circle cx={12} cy={12} r={1} />
      {/* Crosshair lines - subtle, only at edges */}
      <line x1={12} y1={1} x2={12} y2={3} />
      <line x1={12} y1={21} x2={12} y2={23} />
      <line x1={1} y1={12} x2={3} y2={12} />
      <line x1={21} y1={12} x2={23} y2={12} />
    </svg>
  )
}

function CommunityIcon({ className, size }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Pentagon nodes */}
      <circle cx={12} cy={4} r={2} />
      <circle cx={19} cy={9} r={2} />
      <circle cx={17} cy={18} r={2} />
      <circle cx={7} cy={18} r={2} />
      <circle cx={5} cy={9} r={2} />
      {/* Pentagon edges */}
      <line x1={13.8} y1={4.8} x2={17.2} y2={8.2} />
      <line x1={20} y1={11} x2={18.5} y2={16.2} />
      <line x1={15} y1={18.5} x2={9} y2={18.5} />
      <line x1={5.5} y1={16.2} x2={4} y2={11} />
      <line x1={6.8} y1={7.8} x2={10.2} y2={4.8} />
      {/* Cross-connections for network feel */}
      <line x1={12} y1={6} x2={7.5} y2={16.2} />
      <line x1={12} y1={6} x2={16.5} y2={16.2} />
    </svg>
  )
}

const iconMap = {
  strategic: StrategicIcon,
  governance: GovernanceIcon,
  operational: OperationalIcon,
  program: ProgramIcon,
  leadership: LeadershipIcon,
  accountability: AccountabilityIcon,
  community: CommunityIcon,
}

export function PillarIcon({ type, className, size = 24 }: PillarIconProps) {
  const IconComponent = iconMap[type]
  return <IconComponent className={cn(className)} size={size} />
}
