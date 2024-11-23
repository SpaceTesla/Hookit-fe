import Hero from '@/components/hero';
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';
import { teamMembers } from '@/data/team';

export default function Home() {
  return (
    <main className={''}>
      <Hero />
      <section id={'team'}>
        <h2 className={'p-4 text-center text-[3rem]'}>Team</h2>
        <AnimatedTestimonials testimonials={teamMembers} />
      </section>
    </main>
  );
}
