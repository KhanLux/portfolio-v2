import { motion } from "framer-motion"
import HeroCard from "./HeroCard"
import AboutCard from "./AboutCard"
import SocialsCard from "./SocialsCard"
import FunFactCard from "./FunFactCard"
import TerminalCard from "./TerminalCard"
import TechStackCard from "./TechStackCard"
import ProjectsCard from "./ProjectsCard"
import ContactCard from "./ContactCard"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.4, 0, 0.2, 1] as [number, number, number, number],
    },
  },
}

// Wrap each card so it can receive the stagger animation
function AnimatedCard({ children }: { children: React.ReactNode }) {
  return <motion.div variants={cardVariants} className="contents">{children}</motion.div>
}

export default function BentoGrid() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-[1600px] mx-auto px-6 md:px-16 pt-28 pb-20"
      style={{ gridAutoRows: "minmax(200px, auto)" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <AnimatedCard><HeroCard /></AnimatedCard>
      <AnimatedCard><AboutCard /></AnimatedCard>
      <AnimatedCard><SocialsCard /></AnimatedCard>
      <AnimatedCard><FunFactCard /></AnimatedCard>
      <AnimatedCard><TerminalCard /></AnimatedCard>
      <AnimatedCard><TechStackCard /></AnimatedCard>
      <AnimatedCard><ProjectsCard /></AnimatedCard>
      <AnimatedCard><ContactCard /></AnimatedCard>
    </motion.div>
  )
}
