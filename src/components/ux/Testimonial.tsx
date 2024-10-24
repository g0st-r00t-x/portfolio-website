import { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  id: number;
  content: string;
  name: string;
  role: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  testimonials: initialTestimonials,
}) => {
  const [displayedTestimonials, setDisplayedTestimonials] = useState(() => [
    ...initialTestimonials,
    ...initialTestimonials.slice(0, 2),
  ]);

  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const controls = useAnimation();
  const animationDuration = 15; // Durasi diperlambat menjadi 15 detik per slide
  const isAnimating = useRef(false);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const firstCard =
          containerRef.current.querySelector(".testimonial-card");
        if (firstCard) {
          const width = firstCard.clientWidth + 16;
          setCardWidth(width);
        }
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    if (!cardWidth) return;

    let currentIndex = 0;
    let animationFrame: number;

    const animate = async () => {
      if (isAnimating.current) return;

      while (true) {
        isAnimating.current = true;

        try {
          // Mulai animasi slide berikutnya
          await controls.start({
            x: -cardWidth,
            transition: {
              duration: animationDuration,
              ease: "linear",
              repeatDelay: 0,
            },
          });

          // Update testimonials array dengan delay minimal
          setDisplayedTestimonials((prev) => {
            const newTestimonials = [...prev];
            newTestimonials.shift();
            const nextIndex =
              (currentIndex + prev.length) % initialTestimonials.length;
            newTestimonials.push(initialTestimonials[nextIndex]);
            return newTestimonials;
          });

          currentIndex = (currentIndex + 1) % initialTestimonials.length;

          // Reset posisi dengan immediate flag untuk menghindari flicker
          await controls.set({ x: 0, transition: { duration: 0 } });
        } catch (error) {
          console.error("Animation error:", error);
        } finally {
          isAnimating.current = false;
        }

        // Memberikan waktu singkat sebelum memulai animasi berikutnya
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    };

    animationFrame = requestAnimationFrame(() => animate());

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      isAnimating.current = false;
    };
  }, [cardWidth, controls, initialTestimonials]);

  return (
    <div
      className="relative overflow-hidden"
      ref={containerRef}
      style={{ willChange: "transform" }} // Optimize performance
    >
      <motion.div
        className="flex"
        animate={controls}
        style={{
          willChange: "transform",
          backfaceVisibility: "hidden",
          WebkitBackfaceVisibility: "hidden",
        }}
      >
        {displayedTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${testimonial.id}-${index}`}
            className="testimonial-card max-w-lg flex-shrink-0 px-4"
            style={{
              willChange: "transform",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
            }}
          >
            <Card className="bg-gray-700">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 mb-4 text-blue-400" />
                <p className="text-lg mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-500 rounded-full mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialSlider;
