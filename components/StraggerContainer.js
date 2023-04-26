import { motion } from 'framer-motion'

const fadeInVariants = {
  hidden: {
    opacity: 0,
    scaleY: 1.15,
    y: 25
  },
  animate: {
    opacity: 1,
    scaleY: 1,
    y: 0,
    transition: {
      type: 'spring',
      bounce: 0.5
    }
  }
}

export default function StaggerContainer({
  children,
  className = '',
  delayChildren = 0,
  staggerChildren = 0.1,
  margin = '0px 0px -25% 0px',
  ...props
}) {
  return (
    <motion.div
      {...props}
      initial="hidden"
      whileInView="animate"
      viewport={{ once: true, margin }}
      transition={{
        staggerChildren,
        delayChildren
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export { fadeInVariants }