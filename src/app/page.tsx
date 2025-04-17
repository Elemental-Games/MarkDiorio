import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import SkillsSection from '@/components/SkillsSection'
import WorkSection from '@/components/WorkSection'
import ExperienceSection from '@/components/ExperienceSection'
import GamesSection from '@/components/GamesSection'
import ContactSection from '@/components/ContactSection'
import SectionDivider from '@/components/SectionDivider'

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <SectionDivider />
      <ExperienceSection />
      <SectionDivider />
      <GamesSection />
      <SectionDivider />
      <ContactSection />
    </main>
  )
}
