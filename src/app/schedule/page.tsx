"use client";
import { useState } from "react";
import Icon from "@/components/ui/Icon";
import Link from "next/link";

/* ── Types ── */
type CallType = "discovery" | "technical" | "product";

const CALL_TYPES = [
  { id:"discovery" as CallType, title:"Discovery call",       dur:"30 min", desc:"Scope your project with an engineer",                    icon:"sparkle" },
  { id:"technical" as CallType, title:"Technical deep-dive",  dur:"60 min", desc:"Architecture review or code walkthrough",                icon:"code" },
  { id:"product"   as CallType, title:"Product demo",         dur:"45 min", desc:"Live demo of TPA Upgrade or Agent Studio",               icon:"cpu" },
];

const AVAILABLE_DATES = new Set([20,21,22,23,24,27,28,29,30]);
const SLOTS = ["09:00","09:30","10:30","11:00","13:30","14:00","15:30","16:00"];
const STEP_LABELS = ["Type","Date & time","Your details","Confirm"];

/* ── Reusable field ── */
const inputCss: React.CSSProperties = {
  fontFamily:"'Inter',sans-serif", fontSize:14, padding:"10px 14px",
  border:"1px solid #CBD5E1", borderRadius:10, background:"white", color:"#0F1A2E",
  outline:"none", width:"100%", boxShadow:"inset 0 1px 2px rgba(15,26,46,0.04)",
};

function Field({ label, type="text", placeholder }: { label:string; type?:string; placeholder?:string }) {
  return (
    <div>
      <label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>{label}</label>
      <input type={type} placeholder={placeholder} style={inputCss} />
    </div>
  );
}

/* ── Google Calendar URL builder ── */
function buildGCalUrl(day: number, slot: string | null, callType: typeof CALL_TYPES[number]) {
  const [hh, mm] = (slot || "09:00").split(":").map(Number);
  const durationMinutes = parseInt(callType.dur);
  const start = new Date(2026, 3, day, hh, mm); // April = month 3
  const end   = new Date(start.getTime() + durationMinutes * 60_000);
  const fmt   = (d: Date) => d.toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text:   `TPA Tech Labs — ${callType.title}`,
    dates:  `${fmt(start)}/${fmt(end)}`,
    details: `${callType.desc}\n\nBooked via tpatechlabs.com/schedule`,
    location: "Google Meet (link in calendar invite)",
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

/* ── Main component ── */
export default function SchedulePage() {
  const [step,    setStep]    = useState(0);
  const [type,    setType]    = useState<CallType>("discovery");
  const [date,    setDate]    = useState(22);
  const [slot,    setSlot]    = useState<string | null>(null);

  const callType = CALL_TYPES.find(t => t.id === type)!;

  function next() { if (step===1 && !slot) return; setStep(s => Math.min(s+1, 3)); }
  function back() { setStep(s => Math.max(s-1, 0)); }

  /* ── Stepper ── */
  const Stepper = () => (
    <div style={{ display:"flex", justifyContent:"center", gap:0, marginBottom:36 }}>
      {STEP_LABELS.map((label, i) => (
        <div key={label} style={{ display:"flex", alignItems:"center" }}>
          <div style={{ display:"flex", alignItems:"center", gap:10, opacity: step>=i ? 1 : 0.4 }}>
            <div style={{
              width:28, height:28, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center",
              fontSize:12, fontWeight:700, fontFamily:"'JetBrains Mono',monospace",
              background: step>i ? "linear-gradient(135deg,#00C6FF,#0072FF)" : step===i ? "white" : "#F1F5F9",
              border: step===i ? "2px solid #0072FF" : "none",
              color: step>i ? "white" : step===i ? "#0072FF" : "#64748B",
            }}>
              {step>i ? <Icon name="check" size={14} stroke={3} /> : i+1}
            </div>
            <span style={{ fontSize:13, fontWeight: step===i ? 600 : 500, color: step===i ? "#0F1A2E" : "#64748B" }}>{label}</span>
          </div>
          {i < 3 && <div style={{ width:40, height:2, background: step>i ? "#0072FF" : "#E2E8F0", margin:"0 14px", transition:"background 200ms" }}/>}
        </div>
      ))}
    </div>
  );

  /* ── Step 0: Type ── */
  const Step0 = () => (
    <div style={{ padding:40 }}>
      <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700, margin:"0 0 20px", letterSpacing:"-0.015em" }}>What would you like to discuss?</h3>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:14 }}>
        {CALL_TYPES.map(t => (
          <div key={t.id} onClick={() => setType(t.id)} style={{
            padding:22, borderRadius:14, cursor:"pointer", transition:"all 180ms",
            border:`2px solid ${type===t.id ? "#0072FF" : "#E2E8F0"}`,
            background: type===t.id ? "linear-gradient(135deg,#EBF5FF,#fff)" : "white",
          }}>
            <div style={{
              width:40, height:40, borderRadius:10, marginBottom:14,
              background: type===t.id ? "linear-gradient(135deg,#00C6FF,#0072FF)" : "#F1F5F9",
              color: type===t.id ? "white" : "#0072FF",
              display:"flex", alignItems:"center", justifyContent:"center",
              transition:"all 180ms",
            }}>
              <Icon name={t.icon as Parameters<typeof Icon>[0]["name"]} size={20} />
            </div>
            <div style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:16, fontWeight:700, color:"#0F1A2E", letterSpacing:"-0.01em" }}>{t.title}</div>
            <div style={{ fontSize:12, color:"#64748B", marginTop:4, fontFamily:"'JetBrains Mono',monospace" }}>{t.dur}</div>
            <div style={{ fontSize:13, color:"#475569", marginTop:10, lineHeight:1.5 }}>{t.desc}</div>
          </div>
        ))}
      </div>
      <div style={{ display:"flex", justifyContent:"flex-end", marginTop:28 }}>
        <button onClick={next} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 18px", fontSize:14, fontWeight:600, background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white", border:"none", borderRadius:10, cursor:"pointer", fontFamily:"'Inter',sans-serif", boxShadow:"0 6px 20px -6px rgba(0,114,255,0.5)" }}>
          Continue <Icon name="arrow" size={16} />
        </button>
      </div>
    </div>
  );

  /* ── Step 1: Calendar ── */
  const Step1 = () => {
    const all = Array.from({length:30},(_,i)=>i+1);
    const prev = [13,14,15,16,17,18,19]; // week before available range
    const next_ = [1,2,3];

    return (
      <div style={{ display:"grid", gridTemplateColumns:"1.3fr 1fr" }}>
        {/* Calendar left */}
        <div style={{ padding:40, borderRight:"1px solid #E2E8F0" }}>
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:20 }}>
            <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700, margin:0, letterSpacing:"-0.015em" }}>April 2026</h3>
            <div style={{ display:"flex", gap:6 }}>
              {["‹","›"].map(ch => <button key={ch} style={{ width:32, height:32, borderRadius:8, border:"1px solid #E2E8F0", background:"white", cursor:"pointer", fontSize:16, color:"#334155" }}>{ch}</button>)}
            </div>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:6, textAlign:"center", marginBottom:4 }}>
            {["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map(d => <div key={d} style={{ fontSize:11, color:"#94A3B8", fontWeight:600, letterSpacing:"0.1em", textTransform:"uppercase", padding:"8px 0" }}>{d}</div>)}
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(7,1fr)", gap:6, textAlign:"center" }}>
            {/* Padding before the 13th (April 1 = Wed, so Mon-Tue are empty) */}
            <div style={cellBase()}/>
            <div style={cellBase()}/>
            {/* Days 1–12 (past / unavailable) */}
            {Array.from({length:12},(_,i)=>i+1).map(n => <div key={n} style={cellBase({ color:"#CBD5E1" })}>{n}</div>)}
            {/* Days 13–19 (prev week, unavailable) */}
            {prev.map(n => <div key={n} style={cellBase({ color:"#CBD5E1" })}>{n}</div>)}
            {/* Days 20–30 */}
            {Array.from({length:11},(_,i)=>i+20).map(n => {
              const avail = AVAILABLE_DATES.has(n);
              const sel   = date===n;
              return (
                <div key={n} onClick={() => avail && (setDate(n), setSlot(null))} style={cellBase({
                  background: sel ? "linear-gradient(135deg,#00C6FF,#0072FF)" : avail ? "#EBF5FF" : "transparent",
                  color: sel ? "white" : avail ? "#0072FF" : "#CBD5E1",
                  fontWeight: sel ? 700 : avail ? 600 : 400,
                  cursor: avail ? "pointer" : "default",
                  boxShadow: sel ? "0 4px 14px -4px rgba(0,114,255,0.5)" : "none",
                })}>
                  {n}
                </div>
              );
            })}
            {/* May 1-3 */}
            {next_.map(n => <div key={"m"+n} style={cellBase({ color:"#CBD5E1" })}>{n}</div>)}
          </div>
          <div style={{ marginTop:28, padding:16, background:"#F8FAFC", borderRadius:12, display:"flex", gap:14, alignItems:"center", fontSize:13, color:"#475569" }}>
            <Icon name="clock" size={18} stroke={1.75} />
            <span>All times in <b>Asia/Kolkata</b> · <a style={{ color:"#0072FF", cursor:"pointer" }}>Change timezone</a></span>
          </div>
        </div>

        {/* Slots right */}
        <div style={{ padding:40, background:"#F8FAFC" }}>
          <div style={{ fontSize:13, color:"#64748B", marginBottom:4 }}>Available slots</div>
          <h4 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:18, fontWeight:700, margin:"0 0 20px", letterSpacing:"-0.015em" }}>April {date}</h4>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:8 }}>
            {SLOTS.map(s => (
              <button key={s} onClick={() => setSlot(s)} style={{
                padding:"10px 12px", borderRadius:10, cursor:"pointer", transition:"all 150ms",
                border:`1px solid ${slot===s ? "#0072FF" : "#E2E8F0"}`,
                background: slot===s ? "linear-gradient(135deg,#00C6FF,#0072FF)" : "white",
                color: slot===s ? "white" : "#334155",
                fontSize:13, fontWeight:600, fontFamily:"'JetBrains Mono',monospace", textAlign:"center",
              }}>
                {s}
              </button>
            ))}
          </div>
          <div style={{ display:"flex", flexDirection:"column", gap:10, marginTop:24 }}>
            <button onClick={next} disabled={!slot} style={{
              display:"flex", alignItems:"center", justifyContent:"center", gap:8,
              padding:"14px 24px", fontSize:16, fontWeight:600,
              background: slot ? "linear-gradient(135deg,#00C6FF,#0072FF)" : "#E2E8F0",
              color: slot ? "white" : "#94A3B8",
              border:"none", borderRadius:12, cursor: slot ? "pointer" : "not-allowed",
              fontFamily:"'Inter',sans-serif", transition:"all 180ms",
            }}>
              Continue{slot ? ` · ${slot}` : ""}
            </button>
            <button onClick={back} style={{ padding:"7px 14px", fontSize:13, fontWeight:500, background:"transparent", color:"#0072FF", border:"none", cursor:"pointer", fontFamily:"'Inter',sans-serif" }}>
              ← Back
            </button>
          </div>
        </div>
      </div>
    );
  };

  /* ── Step 2: Details ── */
  const Step2 = () => (
    <div style={{ padding:40, display:"grid", gridTemplateColumns:"1.3fr 1fr", gap:40 }}>
      <div>
        <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:22, fontWeight:700, margin:"0 0 20px", letterSpacing:"-0.015em" }}>Your details</h3>
        <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
          <Field label="Full name"   placeholder="Jane Smith" />
          <Field label="Work email"  type="email" placeholder="jane@company.com" />
          <Field label="Company"     placeholder="Acme Inc" />
          <div>
            <label style={{ fontSize:12, fontWeight:500, color:"#334155", display:"block", marginBottom:6 }}>What should we focus on?</label>
            <textarea rows={4} placeholder="We're running Java 8 in production for our billing engine (~400K LOC). Exploring what an upgrade to Java 21 would involve." style={{ ...inputCss, resize:"none" }}/>
          </div>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", marginTop:28 }}>
          <button onClick={back} style={{ padding:"7px 14px", fontSize:13, fontWeight:500, background:"transparent", color:"#0072FF", border:"none", cursor:"pointer", fontFamily:"'Inter',sans-serif" }}>← Back</button>
          <button onClick={next} style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 18px", fontSize:14, fontWeight:600, background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white", border:"none", borderRadius:10, cursor:"pointer", fontFamily:"'Inter',sans-serif", boxShadow:"0 6px 20px -6px rgba(0,114,255,0.5)" }}>
            Review booking <Icon name="arrow" size={16} />
          </button>
        </div>
      </div>

      {/* Summary panel */}
      <div style={{ background:"linear-gradient(135deg,#0A0E1A,#0D1528)", color:"white", borderRadius:16, padding:24, position:"relative", overflow:"hidden", alignSelf:"flex-start" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(circle, rgba(168,200,240,0.06) 1px, transparent 1px)", backgroundSize:"14px 14px", pointerEvents:"none" }}/>
        <div style={{ position:"relative" }}>
          <div style={{ fontSize:11, color:"#00C6FF", letterSpacing:"0.2em", textTransform:"uppercase", fontWeight:600, marginBottom:14 }}>Booking summary</div>
          {[
            { icon:"sparkle" as const, text: callType.title },
            { icon:"calendar" as const, text: `April ${date}` },
            { icon:"clock"   as const, text: `${slot||"—"} IST · ${callType.dur}` },
            { icon:"shield"  as const, text: "Confirmation within 1 hour" },
          ].map(row => (
            <div key={row.text} style={{ display:"flex", alignItems:"center", gap:12, padding:"10px 0", borderBottom:"1px solid rgba(168,200,240,0.1)" }}>
              <div style={{ color:"#00C6FF", flexShrink:0 }}><Icon name={row.icon} size={16} /></div>
              <div style={{ fontSize:14, color:"#A8C8F0" }}>{row.text}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  /* ── Step 3: Confirmation ── */
  const Step3 = () => (
    <div style={{ padding:60, textAlign:"center", background:"radial-gradient(circle at 50% 0%, #EBF5FF 0%, #fff 60%)" }}>
      <div style={{ width:80, height:80, borderRadius:"50%", background:"linear-gradient(135deg,#00C6FF,#0072FF)", margin:"0 auto 24px", display:"flex", alignItems:"center", justifyContent:"center", color:"white", boxShadow:"0 20px 50px -10px rgba(0,114,255,0.5)" }}>
        <Icon name="check" size={36} stroke={3} />
      </div>
      <h3 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:32, fontWeight:700, margin:0, letterSpacing:"-0.025em" }}>You&apos;re on the calendar.</h3>
      <p style={{ fontSize:16, color:"#475569", marginTop:12 }}>April {date} at {slot||"—"} IST · {callType.dur} {callType.title.toLowerCase()}</p>
      <div style={{ marginTop:28, padding:20, background:"#F8FAFC", borderRadius:14, border:"1px solid #E2E8F0", maxWidth:460, margin:"28px auto 0", textAlign:"left" }}>
        <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.15em", textTransform:"uppercase", color:"#64748B", marginBottom:10 }}>What&apos;s next</div>
        <ul style={{ listStyle:"none", padding:0, display:"flex", flexDirection:"column", gap:10 }}>
          {[
            { icon:"mail"    as const, text:"Calendar invite sent to your email" },
            { icon:"check"   as const, text:"Video link added 10 min before call" },
            { icon:"shield"  as const, text:"Nothing billable — no credit card, no pitch" },
          ].map(item => (
            <li key={item.text} style={{ display:"flex", gap:10, fontSize:14, color:"#334155", alignItems:"center" }}>
              <Icon name={item.icon} size={16} /> {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop:28, display:"flex", gap:10, justifyContent:"center" }}>
        <a
          href={buildGCalUrl(date, slot, callType)}
          target="_blank" rel="noopener noreferrer"
          style={{ display:"inline-flex", alignItems:"center", gap:8, padding:"10px 18px", fontSize:14, fontWeight:600, background:"linear-gradient(135deg,#00C6FF,#0072FF)", color:"white", borderRadius:10, textDecoration:"none", fontFamily:"'Inter',sans-serif" }}
        >
          <Icon name="calendar" size={16} /> Add to Google Calendar
        </a>
        <Link href="/" style={{ display:"inline-flex", alignItems:"center", padding:"10px 18px", fontSize:14, fontWeight:600, background:"white", color:"#0F1A2E", border:"1px solid #CBD5E1", borderRadius:10, textDecoration:"none", fontFamily:"'Inter',sans-serif" }}>
          Back to site
        </Link>
      </div>
    </div>
  );

  return (
    <section style={{ padding:"60px 32px 100px", background:"linear-gradient(180deg,#F8FAFC 0%,#fff 60%)", minHeight:"80vh" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        {/* Header */}
        <div style={{ textAlign:"center", marginBottom:48 }}>
          <div style={{ fontSize:12, fontWeight:600, letterSpacing:"0.25em", textTransform:"uppercase", color:"#7F00FF" }}>Scheduling</div>
          <h1 style={{ fontFamily:"'Space Grotesk',sans-serif", fontSize:48, fontWeight:700, letterSpacing:"-0.03em", marginTop:12, color:"#0F1A2E" }}>
            Book time with an engineer.
          </h1>
          <p style={{ fontSize:16, color:"#475569", marginTop:12 }}>Free. No pitch. Pick a slot that works — we&apos;ll confirm within the hour.</p>
        </div>

        <Stepper />

        <div style={{ background:"white", borderRadius:20, border:"1px solid #E2E8F0", boxShadow:"0 20px 50px -20px rgba(15,26,46,0.1)", overflow:"hidden" }}>
          {step===0 && <Step0 />}
          {step===1 && <Step1 />}
          {step===2 && <Step2 />}
          {step===3 && <Step3 />}
        </div>
      </div>
    </section>
  );
}

/* Cell style helper */
function cellBase(extra: React.CSSProperties = {}): React.CSSProperties {
  return {
    aspectRatio:"1", maxWidth:56, display:"flex", alignItems:"center", justifyContent:"center",
    borderRadius:10, fontSize:14, fontWeight:500, color:"#334155",
    fontFamily:"'JetBrains Mono',monospace", transition:"all 150ms",
    margin:"0 auto", width:"100%", ...extra,
  };
}
