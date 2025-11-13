import { customIcons } from '../../src/icons/customIcons';
import { LinkedInIcon } from '../../src/icons/LinkedInIcon';
import { SimpleIcon } from '../components/SimpleIcon';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30">
         <h2
            className="text-[#00ff00] mb-4 glow font-extrabold tracking-wide"
            style={{ fontSize: "1.5rem" }}
          >
            CONTACT ME
          </h2>          
          <div className="text-[#00aa00] mb-8">
            <p className="mb-2">&gt; Initializing communication protocols...</p>
            <p className="text-[#00ff00] mb-2 glow">&gt; Connection status: READY</p>
            <p>&gt; I'm always interested in new projects and opportunities.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <a 
              href="mailto:asif17111998@gmail.com" 
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
              <SimpleIcon
  path={customIcons.gmail.path}
  size={20}
  color="#00ff00"
  className="transition-all group-hover:drop-shadow-[0_0_6px_#00ff00]"
/>
              <div>
                <div className="text-[#00ff00]">Email</div>
                <div className="text-sm">asif17111998@gmail.com</div>
              </div>
            </a>
            
            <a 
              href="https://github.com/asif1711/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
               <SimpleIcon
  path={customIcons.github.path}
  size={20}
  color="#00ff00"
  className="transition-all group-hover:drop-shadow-[0_0_6px_#00ff00]"
/>
              <div>
                <div className="text-[#00ff00]">GitHub</div>
                <div className="text-sm">View</div>
              </div>
            </a>
            
            <a 
              href="https://linkedin.com/in/nurulislam1711/" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
               <LinkedInIcon
    size={20}
    color="#00ff00"
    className="transition-all group-hover:drop-shadow-[0_0_6px_#00ff00]"
  />
              <div>
                <div className="text-[#00ff00]">LinkedIn</div>
                <div className="text-sm">Connect</div>
              </div>
            </a>
            
            <a 
              href="https://wa.me/919875535211" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 border border-[#00ff00] text-[#00aa00] hover:text-[#00ff00] hover:bg-[#001a00] transition-all hover:shadow-[0_0_15px_rgba(0,255,0,0.3)]"
            >
            
              <SimpleIcon
  path={customIcons.whatsapp.path}
  size={20}
  color="#00ff00"
/>
              <div>
                <div className="text-[#00ff00]">WhatsApp</div>
                <div className="text-sm">Text</div>
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
