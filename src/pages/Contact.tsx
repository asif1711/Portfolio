import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30">
          <h2 className="text-[#00ff00] mb-6 glow">CONTACT</h2>
          
          <div className="text-[#00aa00] mb-8">
            <p className="mb-2">&gt; Initializing communication protocols...</p>
            <p className="mb-2">&gt; Connection status: READY</p>
            <p>&gt; I'm always interested in hearing about new projects and opportunities.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a 
              href="mailto:your.email@example.com" 
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <Mail size={20} />
              <div>
                <div className="text-[#00ff00]">EMAIL</div>
                <div className="text-sm">your.email@example.com</div>
              </div>
            </a>
            
            <a 
              href="https://github.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <Github size={20} />
              <div>
                <div className="text-[#00ff00]">GITHUB</div>
                <div className="text-sm">github.com/username</div>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <Linkedin size={20} />
              <div>
                <div className="text-[#00ff00]">LINKEDIN</div>
                <div className="text-sm">linkedin.com/in/username</div>
              </div>
            </a>
            
            <a 
              href="https://twitter.com" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <Twitter size={20} />
              <div>
                <div className="text-[#00ff00]">TWITTER</div>
                <div className="text-sm">@username</div>
              </div>
            </a>
          </div>

          <div className="border border-[#00ff00] p-4 bg-[#001a00]/50">
            <div className="text-[#00aa00] space-y-1">
              <div>&gt; Available for:</div>
              <div className="pl-4">
                <div>[✓] Freelance Projects</div>
                <div>[✓] Full-time Opportunities</div>
                <div>[✓] Collaborations</div>
                <div>[✓] Consulting</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 border border-[#00ff00] p-4 bg-[#001a00]/30">
          <div className="text-[#00aa00]">
            &gt; Communication channels active
          </div>
          <div className="text-[#00aa00]">
            &gt; Awaiting transmission...
          </div>
        </div>
      </div>
    </section>
  );
}
