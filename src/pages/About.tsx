export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="border border-[#00ff00] p-6 bg-[#001a00]/30">
          <h2 className="text-[#00ff00]">ABOUT ME</h2>
          <h1 className="text-[#00ff00] glow"
          style={{ fontSize: "clamp(1rem, 2vw, 2.5rem)" }}
          >
            Name : NURUL ISLAM
          </h1>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4 text-[#00aa00]">
              <p className="before:content-['>_'] before:text-[#00ff00] before:mr-2">
                I am a creative developer with a passion for building simple solutions to complex problems. 
                My work combines technical expertise with a keen eye for design and artistic visuals.
              </p>
              <p className="before:content-['>_'] before:text-[#00ff00] before:mr-2">
                With 8+ years of study and practice in computer science, I specialize in creating 
                subject-specific digital experiences like Websites and Graphic Art. I am also well versed in topics like : 
                <br></br>OS Fundamentals(Windows & Linux), 
                <br></br>Networking(OSI,DHCP,DNS,IP/TCP), 
                <br></br>Hardware Fundamentals(CPU,GPU,HDD,SSD).
              </p>
              <p className="before:content-['>_'] before:text-[#00ff00] before:mr-2">
                When I'm not creating or designing, you can find me exploring new technologies, 
                like Cloud Computing, Cyber-Security, new AI/ML elements in the market.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="border border-[#00ff00]/30 p-4 bg-[#001a00]/50">
                <div className="text-[#00ff00] mb-2 glow">STATUS:</div>
                <div className="text-[#00aa00] pl-4">
                  <div>&gt; Experience: 1+ years</div>
                  <div>&gt; Post Graduation: MCA(2024-2026)</div>
                  <div>&gt; Under Graduation: BCA(2017-2023)</div>
                  <div>&gt; Location: Kolkata, India</div>
                  <div>&gt; Availability: ACCEPTING PROJECTS</div>
                  <div>&gt; Status: ONLINE</div>
                </div>
              </div>
              
              <div className="border border-[#00ff00]/30 p-4 bg-[#001a00]/50">
                <div className="text-[#00ff00] mb-2 glow">LAST JOB:</div>
                <div className="text-[#00aa00] pl-4">
                  <div>&gt; Role: Web Designer and Developer</div>
                  <div>&gt; Tasks: Front-end | Back-end</div>
                  <div>&gt; Platforms: Wordpress | Github</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
