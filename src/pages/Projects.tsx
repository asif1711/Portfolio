import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ExternalLink } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'Modern Web Platform',
      description: 'A comprehensive web application built with React and TypeScript, featuring real-time updates and a beautiful UI.',
      image: 'https://images.unsplash.com/photo-1677469684186-3b1817bce098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzYyMDExNTE4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind']
    },
    {
      title: 'Mobile App Design',
      description: 'Complete UI/UX design for a mobile application, from wireframes to high-fidelity prototypes.',
      image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYxOTkwMzEyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Figma', 'UI/UX', 'Prototype']
    },
    {
      title: 'Creative Dashboard',
      description: 'An analytics dashboard with interactive charts and beautiful data visualizations for better insights.',
      image: 'https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjIwMTAxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Charts', 'DataViz']
    }
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30 mb-8">
          <h2 className="text-[#00ff00] mb-4 glow">PROJECTS</h2>
          <p className="text-[#00aa00]">&gt; Displaying {projects.length} completed projects...</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="group border border-[#00ff00] bg-[#001a00]/50 hover:bg-[#001a00] transition-all hover:shadow-[0_0_20px_rgba(0,255,0,0.3)]">
              <div className="relative aspect-video overflow-hidden border-b border-[#00ff00]">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ filter: 'grayscale(100%) sepia(100%) hue-rotate(50deg) saturate(400%)' }}
                />
                <div className="absolute top-2 right-2">
                  <ExternalLink size={18} className="text-[#00ff00] glow" />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-[#00ff00] mb-2 glow">
                  &gt; {project.title}
                </h3>
                <p className="text-[#00aa00] mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-2 py-1 border border-[#00ff00] text-[#00ff00] text-sm"
                    >
                      [{tag}]
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border border-[#00ff00] p-4 bg-[#001a00]/30">
          <div className="text-[#00aa00]">
            &gt; End of project archive
          </div>
        </div>
      </div>
    </section>
  );
}
