import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Terminal, Cpu, Activity, Database, Network } from "lucide-react";

const commands = [
  "Initializing AI Core Systems...",
  "Loading Neural Networks...",
  "Connecting to Cloud Infrastructure...",
  "Optimizing Performance Metrics...",
  "AI Systems Online - Ready",
];

export function AICommandCenter() {
  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand((prev) => (prev + 1) % commands.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-40 hidden lg:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>

        <div className="relative bg-black/80 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 w-80">
          <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-white">AI Command Center</span>
            <div className="ml-auto flex gap-1">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-75"></div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse delay-150"></div>
            </div>
          </div>

          <div className="space-y-3 mb-4">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Cpu className="w-4 h-4" />
                <span>CPU</span>
              </div>
              <span className="text-cyan-400 font-mono">45%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Activity className="w-4 h-4" />
                <span>GPU</span>
              </div>
              <span className="text-purple-400 font-mono">78%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Database className="w-4 h-4" />
                <span>Memory</span>
              </div>
              <span className="text-green-400 font-mono">62%</span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-gray-400">
                <Network className="w-4 h-4" />
                <span>Network</span>
              </div>
              <span className="text-blue-400 font-mono">Online</span>
            </div>
          </div>

          <div className="bg-black/60 rounded-lg p-3 border border-cyan-500/20">
            <div className="text-xs font-mono text-cyan-400 flex items-start gap-2">
              <span className="text-green-400">&gt;</span>
              <motion.span
                key={currentCommand}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
              >
                {commands[currentCommand]}
              </motion.span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
