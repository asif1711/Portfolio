export function Footer() {
  return (
    <footer className="border-t border-[#00ff00] py-6 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-[#00aa00] space-y-2">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <span className="text-[#00ff00]">user@matrix</span>:~$ date
            </div>
            <div>
              © {new Date().getFullYear()} - All rights reserved
            </div>
          </div>
          <div className="text-sm">
            &gt; System uptime: {Math.floor(Math.random() * 999)} days
          </div>
          <div className="text-sm">
            &gt; Status: OPERATIONAL
          </div>
        </div>
      </div>
    </footer>
  );
}
