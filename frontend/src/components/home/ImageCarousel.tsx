"use client";

import { useEffect, useRef, useState } from "react";

export default function ImageCarousel() {
  const [index, setIndex] = useState(0);
  const [showSimulator, setShowSimulator] = useState(false);
  const simulatorRef = useRef<HTMLDivElement | null>(null);
  const [simulatorExpanded, setSimulatorExpanded] = useState(false);
  const [iframeMounted, setIframeMounted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const timer = useRef<number | null>(null);

  

  const slides = [
    {
      title: "Regulados por la SUNAVAL",
      body:
        "Estamos regulados y supervisados por la Superintendencia Nacional de Valores, lo que respalda nuestro compromiso con la transparencia, la seguridad y el cumplimiento normativo.",
    },
    {
      title: "Enmarcados en la normativa del BCV",
      body:
        "Contamos con cuenta en el Banco Central de Venezuela para operar en armonía con la política monetaria, asegurando confianza y transparencia en el mercado de valores.",
    },
    {
      title: "Miembros de la Bolsa de Valores de Caracas",
      body:
        "Formamos parte de la Bolsa de Valores de Caracas, el principal centro bursátil del país, brindando acceso directo y confiable al mercado venezolano.",
    },
    {
      title: "Depositantes de la Caja Venezolana de Valores",
      body:
        "Contamos con cuenta en la CVV, principal agente de custodia y pago de títulos valores objeto de oferta pública en Venezuela.",
    },
  ];

  useEffect(() => {
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, []);

  useEffect(() => {
    if (showSimulator && simulatorRef.current) {
      // small timeout to allow expand animation to start before scrolling
      setTimeout(() => {
        simulatorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [showSimulator]);

  function resetTimer() {
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4000);
  }

  function goPrev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
    resetTimer();
  }

  function goNext() {
    setIndex((i) => (i + 1) % slides.length);
    resetTimer();
  }

  // Replace YouTube with Google Drive file preview embed
  const driveFileId = "1s6PZDMCE2ddvN0w4Pio4Yl9g1A-NxWlN";
  // Use the /preview endpoint for embedding. Start time (t=13) is not always respected by Drive embeds,
  // but we append `start=13` as a hint.
  const ytSrc = `https://drive.google.com/file/d/${driveFileId}/preview?start=13`;

  // If you want to use a direct MP4 URL, set `mp4Url` below (example placeholder).
  // Replace the placeholder with your public MP4 URL (Cloudinary, S3, GCS, or a public server).
  const mp4Url = "https://res.cloudinary.com/doyt5r47e/video/upload/v1763385950/monedas_itzuo8.mov";
  const startSeconds = 13; // optional start offset

  return (
    <>
      <section className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 bg-[#000037]">
      <div className="py-8 w-full">
        <div className="relative overflow-hidden rounded-2xl bg-transparent w-full">
          <div className="relative h-48 md:h-64 lg:h-72">
            {slides.map((s, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-center justify-center p-6 transition-opacity duration-700 ease-in-out ${
                  i === index ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              >
                <div className="mx-auto max-w-6xl text-center">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-lg md:text-xl lg:text-2xl text-white/80">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info button + video: show for all slides */}
        <div className="mt-2 flex justify-center">
          <button
            aria-label="Informacion"
            className="bg-white/6 text-white border border-white/10 px-6 py-2 rounded-full hover:bg-white/10 transition"
          >
            Información
          </button>
        </div>

        <div className="mt-6 w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              {/* HTML5 video player for MP4: autoplay, muted, loop, playsInline */}
              <video
                src={mp4Url}
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                onLoadedMetadata={(e) => {
                  const v = e.currentTarget as HTMLVideoElement;
                  if (startSeconds && v.duration > startSeconds) {
                    try {
                      v.currentTime = startSeconds;
                    } catch (err) {
                      // some browsers may throw if seeking before enough data; ignore
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        {/* Prev/Next controls removed per request (keeps autoplay only) */}

        {/* pagination dots removed per request */}
      </div>
      </section>

      {/* --- New section below carousel: graphic element image + text + CTAs --- */}
      <section className="py-16 bg-[#f7f8fb]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text content */}
            <div className="px-2">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#07072b] leading-tight">
                Invierte fácil y seguro
                <br />
                en tres simples pasos
              </h2>

              <div className="mt-8 space-y-8 text-[#0b0b2a]">
                <div>
                  <h3 className="text-2xl font-bold">Regístrate</h3>
                  <p className="mt-2 text-base text-slate-700">
                    Descarga la app, completa el registro y espera la aprobación de tu
                    cuenta de corretaje y custodia.
                  </p>
                  <p className="mt-2 text-sm text-slate-500">Thank you for reading this post, don't forget to subscribe!</p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Fondea</h3>
                  <p className="mt-2 text-base text-slate-700">
                    Fondea tu cuenta con <strong>Pago Móvil, transferencia bancaria u otros medios</strong>. Acreditación rápida para empezar a invertir.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold">Invierte</h3>
                  <p className="mt-2 text-base text-slate-700">
                    Invierte en Acciones, Bonos y Fondos Mutuales según tu alcance y crece.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="px-2">
              <div className="w-full overflow-hidden rounded-2xl">
                <img
                  src="https://res.cloudinary.com/doyt5r47e/image/upload/v1763388274/Per_Capital_-_Elementos_Gra%CC%81ficos_e4xioj.png"
                  alt="Elementos gráficos Per Capital"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* CTA Buttons row */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-between items-center">
            <button className="bg-[#06052a] text-white px-10 py-6 rounded-full text-xl font-semibold shadow-lg hover:opacity-95">
              Fondo Mutual de Capital Abierto
            </button>
            <button className="bg-[#06052a] text-white px-10 py-6 rounded-full text-xl font-semibold shadow-lg hover:opacity-95">
              Nuestras Emisiones
            </button>
          </div>

          {/* Simulator header (acts as the single toggle button) */}
          <div className="mt-12">
            <div className="mx-6 lg:mx-0">
              <button
                onClick={() => {
                  if (!simulatorExpanded) {
                    setShowSimulator(true);
                    setTimeout(() => setSimulatorExpanded(true), 10);
                    setTimeout(() => setIframeMounted(true), 200);
                  } else {
                    setIframeMounted(false);
                    setSimulatorExpanded(false);
                    setTimeout(() => setShowSimulator(false), 300);
                  }
                }}
                aria-expanded={simulatorExpanded}
                className="w-full bg-[#06052a] text-white py-8 rounded-3xl text-3xl font-extrabold tracking-tight shadow-inner flex items-center justify-center gap-3"
                aria-label="Abrir simulador de emisión de deuda"
              >
                <span>Simulador de Emisión de Deuda</span>
                <span className="text-sm opacity-80">{simulatorExpanded ? '▴' : '▾'}</span>
              </button>
            </div>
          </div>
          {/* Inline expandable simulator container placed immediately after the button to avoid gaps */}
          <div className="mt-0">
            {showSimulator && (
              <div
                ref={simulatorRef}
                className="mx-6 lg:mx-0"
                style={{
                  transition: 'max-height 300ms ease, opacity 300ms ease',
                  maxHeight: simulatorExpanded ? '80vh' : '0px',
                  opacity: simulatorExpanded ? 1 : 0,
                  overflow: 'hidden',
                }}
              >
                <div className="w-full rounded-b-2xl rounded-t-none bg-white shadow-sm">
                  {iframeMounted ? (
                    <iframe
                      ref={iframeRef}
                      src="/simulador.html"
                      title="Simulador de Emisión de Deuda"
                      className="w-full h-[70vh] border-0 block"
                      onLoad={() => {
                        // Once iframe is loaded, tell it to toggle so its internal animation runs
                        try {
                          if (iframeRef.current && simulatorExpanded) {
                            iframeRef.current.contentWindow?.postMessage('open-simulator', '*');
                          }
                        } catch (e) {
                          // ignore
                        }
                      }}
                    />
                  ) : (
                    // placeholder to preserve layout while animating
                    <div style={{ height: '70vh' }} />
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Simulador eliminado */}
    </>
  );
}

