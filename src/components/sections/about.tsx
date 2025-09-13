const timelineData = [
  {
    year: '2018',
    title: 'The Spark',
    description: 'EtherealTech Innovations was founded by a group of passionate developers with a shared vision for a better digital future.',
  },
  {
    year: '2020',
    title: 'First Major Project',
    description: 'Landed our first enterprise client, delivering a scalable e-commerce platform that handled millions of users.',
  },
  {
    year: '2022',
    title: 'Expanding Horizons',
    description: 'Opened our mobile development division, launching several successful apps on the App Store and Google Play.',
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Began integrating generative AI into our workflow, offering clients smarter, more efficient development cycles.',
  },
  {
    year: 'Future',
    title: 'The Next Frontier',
    description: 'Pioneering new solutions in decentralized applications and the spatial web, shaping the next wave of digital interaction.',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Our Journey
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            From a humble beginning to a leader in digital innovation.
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          {timelineData.map((item, index) => (
            <div
              key={item.year}
              className={`relative mb-12 flex w-full items-center ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-5/12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                <h3 className="text-2xl font-bold font-headline text-primary">{item.year}</h3>
                <h4 className="mt-1 text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-muted-foreground">{item.description}</p>
              </div>
              <div className="absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full bg-primary ring-8 ring-card"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
