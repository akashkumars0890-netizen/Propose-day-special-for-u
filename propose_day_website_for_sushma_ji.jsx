import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const meetDate = new Date("2026-01-22T22:30:00");

export default function ProposeDaySite() {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [timer, setTimer] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const i = setInterval(() => {
      const diff = new Date() - meetDate;
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff / 3600000) % 24);
      const m = Math.floor((diff / 60000) % 60);
      setTimer(`${d} Days ${h} Hours ${m} Minutes`);
    }, 1000);
    return () => clearInterval(i);
  }, []);

  const checkName = () => {
    if (name.toLowerCase() !== "sushma") {
      setError("Only Sushma Ji can open this 💖");
    } else {
      setError("");
      setStep(2);
    }
  };

  const moveNo = () => {
    setNoPos({ x: Math.random() * 260 - 130, y: Math.random() * 160 - 80 });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 to-red-300 flex flex-col items-center justify-center p-6 text-center space-y-6">

      {step === 0 && (
        <motion.div onClick={() => setStep(1)} animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="text-7xl cursor-pointer">🎁</motion.div>
      )}

      {step === 1 && (
        <div className="bg-white p-6 rounded-3xl shadow-xl space-y-3">
          <p>Write your name to open 💝</p>
          <input className="border p-2 rounded-xl" value={name} onChange={(e) => setName(e.target.value)} />
          <button onClick={checkName} className="bg-red-500 text-white px-4 py-2 rounded-full">Open</button>
          {error && <p className="text-red-600">{error}</p>}
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <motion.div animate={{ scale: [0, 1.3, 1] }} className="text-5xl">🧚‍♀️ Fairy has arrived!</motion.div>
          <p className="font-semibold">Time since we first met ❤️</p>
          <div className="text-2xl font-bold">{timer}</div>
          <p className="text-sm">Since 22 Jan 2026 at 10:30 PM</p>
          <button onClick={() => setStep(3)} className="bg-pink-500 text-white px-6 py-2 rounded-full">Next 💖</button>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-4">
          <div className="text-6xl">🤵🌹</div>
          <p className="text-xl font-semibold">Will you accept my proposal Sushma Ji? 💍</p>
          <div className="flex gap-4 justify-center">
            <button onClick={() => { setAccepted(true); setStep(4); }} className="bg-red-500 text-white px-6 py-2 rounded-full">Yes ❤️</button>
            <motion.button animate={noPos} onMouseEnter={moveNo} className="bg-gray-400 text-white px-6 py-2 rounded-full">No 🙈</motion.button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="space-y-4">
          <div className="fixed inset-0 pointer-events-none">
            {[...Array(25)].map((_, i) => (
              <motion.div key={i} initial={{ y: "100%", x: Math.random() * window.innerWidth }} animate={{ y: "-10%" }} transition={{ duration: 3 }} className="absolute text-3xl">❤️</motion.div>
            ))}
          </div>
          <motion.div whileTap={{ scale: 0.8 }} onClick={() => setStep(5)} className="text-7xl cursor-pointer">💌</motion.div>
          <p>Open the envelope 💕</p>
        </div>
      )}

      {step === 5 && (
        <div className="bg-white p-6 rounded-3xl shadow-xl space-y-2 max-w-md">
          <p>Your smile is my happiness 😊</p>
          <p>Your beauty lights up my world ✨</p>
          <p>Your eyes hold magic 💖</p>
          <p>Your voice feels like music 🎶</p>
          <p>Your nature is pure gold 🌸</p>
          <p>Your kindness inspires me 💫</p>
          <p>Your laughter is my favorite sound 😍</p>
          <p>Your presence brings peace 🕊️</p>
          <p>Your heart is beautiful ❤️</p>
          <p>You make my life special 🌹</p>
          <button onClick={() => setStep(6)} className="bg-pink-500 text-white px-4 py-2 rounded-full">Next 💖</button>
        </div>
      )}

      {step === 6 && (
        <div className="space-y-4">
          <p className="font-semibold">Your favourite things 💝</p>
          <div className="space-y-1">
            <p>🎬 Movie: Sita Ramam</p>
            <p>🥟 Snack: Momos</p>
            <p>🏔️ Place: Nepal</p>
            <p>🍫 Chocolate: Dairy Milk</p>
            <p>💍 Wearable: Glass Bangles</p>
          </div>
          <button onClick={() => setStep(7)} className="bg-red-500 text-white px-4 py-2 rounded-full">Continue ❤️</button>
        </div>
      )}

      {step === 7 && (
        <div className="space-y-3">
          <p>"You are my favorite forever 💕"</p>
          <p>"With you every day feels magical ✨"</p>
          <p>"My heart found its home in you ❤️"</p>
          <p>"You are my beautiful dream come true 🌹"</p>

          <footer className="mt-4 font-semibold">Thank you Sushma Ji for being my love ❤️</footer>

          <button onClick={() => setStep(0)} className="bg-pink-400 text-white px-4 py-2 rounded-full">Close 🌸</button>
        </div>
      )}

    </div>
  );
}
