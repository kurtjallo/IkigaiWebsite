import Link from 'next/link'
import { cn } from '@/lib/utils'

type ButtonVariant = 'gold' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

type ButtonBaseProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children: React.ReactNode
}

type ButtonAsLink = ButtonBaseProps & {
  href: string
} & Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href' | 'className' | 'children'>

type ButtonAsButton = ButtonBaseProps & {
  href?: never
} & Omit<React.ComponentPropsWithoutRef<'button'>, 'className' | 'children'>

type ButtonProps = ButtonAsLink | ButtonAsButton

const variantClasses: Record<ButtonVariant, string> = {
  gold: 'bg-gold text-black font-semibold hover:bg-gold-500',
  /**
   * Uses gold text -- ONLY use on dark backgrounds (hunter-green, black).
   * Fails WCAG AA contrast on white/light backgrounds.
   */
  outline: 'border-2 border-gold text-gold-200 hover:bg-gold hover:text-black',
  /**
   * Uses gold text -- ONLY use on dark backgrounds (hunter-green, black).
   * Fails WCAG AA contrast on white/light backgrounds.
   */
  ghost: 'text-gold-200 hover:underline',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-body-lg',
}

/**
 * Primary CTA button component for the Ikigai design system.
 *
 * **Accessibility note on gold text:**
 * The `outline` and `ghost` variants use gold-colored text. These variants
 * MUST ONLY be used on dark backgrounds (hunter-green, black) to meet
 * WCAG AA contrast requirements (4.5:1 ratio). They will fail contrast
 * checks on white or light-colored backgrounds.
 *
 * The default `gold` variant (gold background, black text) is safe on all backgrounds.
 *
 * When `href` is provided, renders as a Next.js `<Link>`. Otherwise renders as a `<button>`.
 */
export function Button({
  variant = 'gold',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const classes = cn(
    'inline-flex items-center justify-center rounded-sm transition-colors duration-200',
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold',
    variantClasses[variant],
    sizeClasses[size],
    className
  )

  if ('href' in props && props.href) {
    const { href, ...linkProps } = props as ButtonAsLink
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    )
  }

  const buttonProps = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
