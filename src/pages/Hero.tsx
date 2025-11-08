import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [commandInput, setCommandInput] = useState("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const fullText = "Welcome to my portfolio...";
  const inputRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate(); // ✅ React Router navigation hook

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // ✅ Handle terminal-like commands
  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();

    if (cmd) {
      setCommandHistory([...commandHistory, `user@matrix:~$ ${commandInput}`]);

      switch (cmd) {
        case "about":
          navigate("/about");
          setCommandHistory((prev) => [...prev, "> Navigating to about page..."]);
          break;
        case "skills":
          navigate("/skills");
          setCommandHistory((prev) => [...prev, "> Navigating to skills page..."]);
          break;
        case "projects":
          navigate("/projects");
          setCommandHistory((prev) => [...prev, "> Navigating to projects page..."]);
          break;
        case "contact":
          navigate("/contact");
          setCommandHistory((prev) => [...prev, "> Navigating to contact page..."]);
          break;
        case "help":
          setCommandHistory((prev) => [
            ...prev,
            "> Available commands: about, skills, projects, contact, clear",
          ]);
          break;
        case "clear":
          setCommandHistory([]);
          break;
        default:
          setCommandHistory((prev) => [
            ...prev,
            `> Command not found: ${cmd}. Type 'help' for available commands.`,
          ]);
      }

      setCommandInput("");
    }
  };

  return (
    <section
      id="hero"
      className="relative z-40 flex flex-col items-center justify-center w-full text-center px-4 sm:px-6 overflow-hidden"
      style={{
        minHeight: "calc(100vh - 80px)",
        marginTop: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="max-w-4xl w-full mx-auto">
        <div className="mb-6 space-y-4">
          <h1
            className="text-[#00ff00] mb-10 glow font-extrabold tracking-wide leading-tight drop-shadow-[0_0_10px_#00ff00]"
            style={{
              fontSize: "clamp(1.5rem, 2vw, 3rem)",
            }}
          >
            &gt; Artist / Developer
          </h1>

          <div className="text-[#00aa00] space-y-2">
            <p className="cursor">&gt; {displayText}</p>
            <p>
              &gt; I imagine and visualize ideas, then turn them into fractions
              of reality
            </p>
          </div>
        </div>

        <div className="mt-12 border border-[#00ff00] p-4 bg-[#001a00]/50">
          <div className="text-[#00ff00]">
            <div className="mb-2 text-[#00aa00]">Available commands:</div>
            <div className="pl-4 space-y-1 text-[#00aa00]">
              <div>&gt; about - Learn more about me</div>
              <div>&gt; skills - View technical expertise</div>
              <div>&gt; projects - See my work</div>
              <div>&gt; contact - Get in touch</div>
              <div>&gt; clear - Clear terminal</div>
            </div>
          </div>
        </div>

        <div className="mt-8 border border-[#00ff00] p-4 bg-[#001a00]/50 min-h-[150px] max-h-[200px] overflow-y-auto">
          <div className="text-[#00aa00] space-y-1 mb-2">
            {commandHistory.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </div>
          <form onSubmit={handleCommand} className="flex items-center">
            <span className="text-[#00aa00] mr-2">#terminal:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={commandInput}
              onChange={(e) => setCommandInput(e.target.value)}
              className="flex-1 bg-transparent border-none outline-none text-[#00ff00] caret-[#00ff00]"
              placeholder="Click to enter command..."
              autoComplete="off"
            />
          </form>
        </div>

       
      </div>
    </section>
  );
}
