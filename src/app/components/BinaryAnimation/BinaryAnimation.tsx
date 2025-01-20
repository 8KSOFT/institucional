'use client';
import { useEffect, useRef } from 'react';

export default function BinaryAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Tamanho fixo para o canvas
    canvas.width = 400; // Largura fixa
    canvas.height = 300; // Altura fixa

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    const rows = Math.floor(canvas.height / fontSize);

    const grid = Array(columns)
      .fill(null)
      .map(() =>
        Array(rows)
          .fill(null)
          .map(() => ({
            value: Math.random() < 0.5 ? '0' : '1',
            opacity: Math.random(),
            fadeDirection: Math.random() < 0.5 ? -1 : 1,
            fadeSpeed: 0.01 + Math.random() * 0.01,
          }))
      );

    function draw() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.font = `${fontSize}px monospace`;

      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          const cell = grid[x][y];

          cell.opacity += cell.fadeDirection * cell.fadeSpeed;

          if (cell.opacity <= 0 || cell.opacity >= 1) {
            cell.fadeDirection *= -1;
            if (cell.opacity <= 0 && Math.random() < 0.3) {
              cell.value = cell.value === '0' ? '1' : '0';
            }
          }

          cell.opacity = Math.max(0, Math.min(1, cell.opacity));

          ctx.fillStyle = `rgba(173, 255, 105, ${cell.opacity * 0.5})`;
          ctx.fillText(cell.value, x * fontSize, (y + 1) * fontSize);
        }
      }
    }

    const interval = setInterval(draw, 33);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-[600px] h-[400px] pt-4 rounded-lg bg-transparent" />;
}
