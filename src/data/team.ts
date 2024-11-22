type TeamMember = {
  name: string;
  designation: string;
  quote: string;
  email: string;
  src: string;
  github: string;
  linkedin: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Areeb Ahmed',
    designation: 'Backend Developer',
    src: '/team/areeb.png',
    quote:
      'I love building impactful, cloud-distributable systems. (And yes, I design UIs in Python)',
    email: 'areebshariff@acm.org',
    github: 'https://github.com/areebahmeddd',
    linkedin: 'https://linkedin.com/in/areebahmeddd',
  },
  {
    name: 'Avantika Kesarwani',
    designation: 'Backend Developer',
    src: '/team/avantika.png',
    quote:
      "I am a quick learner and I don't travel outside Bangalore for hackathons. (bro what is git?)",
    email: 'avikesar2013@gmail.com',
    github: 'https://github.com/avii09',
    linkedin: 'https://linkedin.com/in/avantika-kesarwani',
  },
  {
    name: 'Somnath Umapathi',
    designation: 'Frontend Developer',
    src: '/team/somnath.png',
    quote:
      "I know frontend + backend + app dev + blockchain + cloud. (I'm always late for hackathons)",
    email: 'somnathumapathi7@gmail.com',
    github: 'https://github.com/Somnathumapathi',
    linkedin: 'https://linkedin.com/in/somnath-umapathi-9a485a205',
  },
  {
    name: 'Shivansh Karan',
    designation: 'Frontend Developer',
    src: '/team/shivansh.png',
    quote:
      "I love writing clean, modular code. (because if it's longer than three lines, even I can't read it)",
    email: 'shivansh.karan@gmail.com',
    github: 'https://github.com/SpaceTesla',
    linkedin: 'https://linkedin.com/in/shivansh-karan',
  },
];

export { teamMembers, type TeamMember };
