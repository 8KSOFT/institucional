'use client';
import { useEffect, useState } from 'react';

export default function BinaryAnimation() {
  const [numbers, setNumbers] = useState<number[]>([]);

  useEffect(() => {
    const updateNumbers = () => {
      setNumbers(Array.from({ length: 24 }, () => Math.round(Math.random())));
    };

    updateNumbers();
    const interval = setInterval(updateNumbers, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-40">
      <div
        className="absolute inset-0 bg-zinc-800 
                    [clip-path:polygon(15%_0,_100%_0,_100%_100%,_0_100%,_0_15%)]"
      >
        <div
          className="absolute top-4 right-4 w-32 h-32
                      bg-gradient-to-br from-[#dab245] to-[#f5d481] rounded-lg"
        >
          <div
            className="absolute inset-2 
                       border-2 border-black/20 rounded-lg
                       before:absolute before:content-[''] before:w-1/2 before:h-1/2
                       before:border-2 before:border-black/20 before:rounded-lg
                       before:top-2 before:left-2"
          >
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 gap-0.5 p-1">
              {numbers.map((num, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center font-mono text-[8px]
                           transition-all duration-1000 ease-in-out text-black/60"
                  style={{
                    opacity: num ? '1' : '0.2',
                    transform: num ? 'scale(1)' : 'scale(0.95)',
                    transitionDelay: `${Math.random() * 500}ms`,
                  }}
                >
                  {num}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
