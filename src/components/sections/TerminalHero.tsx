"use client";
import { useEffect, useState, useRef, useCallback } from "react";

/* ── token colours ── */
type K = "keyword"|"type"|"string"|"comment"|"symbol"|"num"|"fn"|"ok"|"warn"|"dim"|"plain"|"prompt"|"success"|"error"|"tag"|"attr"|"url";
interface Token { text:string; kind:K }
type Line = Token[];

const C: Record<K,string> = {
  keyword:"#AE75FF", type:"#00C6FF",  string:"#86E9A8", comment:"#4A7FA8",
  symbol:"#64748B",  num:"#F59E0B",   fn:"#70B8FF",     ok:"#10B981",
  warn:"#F59E0B",    dim:"#334155",   plain:"#CBD5E1",   prompt:"#0072FF",
  success:"#10B981", error:"#EF4444", tag:"#FF7B72",     attr:"#79C0FF",
  url:"#58A6FF",
};

/* ── scene definition ── */
interface Scene {
  id: string;
  title: string;                       // terminal titlebar
  label: string;                       // tab label
  topBadge: { text:string; color:string; shadow:string };
  botBadge: { text:string; color:string; border:string };
  statusLeft: string[];
  statusRight: string[];
  lines: Line[];
}

/* ══════════════════════════════════════════
   SCENE 1 — Java Modernisation
══════════════════════════════════════════ */
const S_JAVA: Scene = {
  id:"java", title:"tpa-upgrade — bash", label:"Java Migration",
  topBadge:{ text:"AI-Powered",   color:"linear-gradient(135deg,#00C6FF,#0072FF)", shadow:"rgba(0,114,255,0.5)" },
  botBadge:{ text:"✓ 1,420 tests passing", color:"#10B981", border:"rgba(16,185,129,0.3)" },
  statusLeft:["● main","Java 21","UTF-8"],
  statusRight:["TPA Upgrade v2.4.1","⚡ Turbo"],
  lines:[
    [{ text:"$ tpa upgrade --scan ./billing-service", kind:"prompt" }],
    [{ text:"  Scanning ", kind:"dim" },{ text:"700,412", kind:"num" },{ text:" lines across ", kind:"dim" },{ text:"847", kind:"num" },{ text:" files…", kind:"dim" }],
    [],
    [{ text:"  Analysis complete", kind:"ok" },{ text:" — Java ", kind:"plain" },{ text:"8", kind:"num" },{ text:" detected", kind:"plain" }],
    [],
    [{ text:"// Before — Java 8", kind:"comment" }],
    [{ text:"public", kind:"keyword" },{ text:" class ", kind:"plain" },{ text:"OrderStatus", kind:"type" },{ text:" {", kind:"plain" }],
    [{ text:"  private", kind:"keyword" },{ text:" static ", kind:"keyword" },{ text:"final", kind:"keyword" },{ text:" int ", kind:"plain" },{ text:"PENDING", kind:"fn" },{ text:" = ", kind:"plain" },{ text:"0", kind:"num" },{ text:";", kind:"symbol" }],
    [{ text:"  private", kind:"keyword" },{ text:" static ", kind:"keyword" },{ text:"final", kind:"keyword" },{ text:" int ", kind:"plain" },{ text:"SHIPPED", kind:"fn" },{ text:" = ", kind:"plain" },{ text:"1", kind:"num" },{ text:";", kind:"symbol" }],
    [{ text:"}", kind:"plain" }],
    [],
    [{ text:"// After — Java 21 (AI-migrated)", kind:"comment" }],
    [{ text:"public", kind:"keyword" },{ text:" sealed interface ", kind:"type" },{ text:"OrderStatus", kind:"fn" },{ text:" permits ", kind:"keyword" },{ text:"Pending", kind:"type" },{ text:", Shipped ", kind:"type" },{ text:"{}", kind:"symbol" }],
    [{ text:"record ", kind:"keyword" },{ text:"Pending", kind:"type" },{ text:"() ", kind:"plain" },{ text:"implements", kind:"keyword" },{ text:" OrderStatus ", kind:"plain" },{ text:"{}", kind:"symbol" }],
    [{ text:"record ", kind:"keyword" },{ text:"Shipped", kind:"type" },{ text:"(Instant ", kind:"plain" },{ text:"at", kind:"fn" },{ text:") ", kind:"plain" },{ text:"implements", kind:"keyword" },{ text:" OrderStatus ", kind:"plain" },{ text:"{}", kind:"symbol" }],
    [],
    [{ text:"$ tpa upgrade --apply", kind:"prompt" }],
    [{ text:"  [", kind:"dim" },{ text:"████████████████████", kind:"ok" },{ text:"]  ", kind:"dim" },{ text:"847", kind:"num" },{ text:"/847 files", kind:"dim" }],
    [],
    [{ text:"  ✓ ", kind:"success" },{ text:"847 files migrated", kind:"plain" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"1,420 tests passing", kind:"plain" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Build OK  (", kind:"plain" },{ text:"Java 21", kind:"type" },{ text:", Spring Boot ", kind:"plain" },{ text:"3.2", kind:"num" },{ text:")", kind:"plain" }],
    [{ text:"  ⚠ ", kind:"warn" },{ text:"3 files flagged for manual review", kind:"dim" }],
    [],
    [{ text:"  Duration: ", kind:"dim" },{ text:"4w 2d", kind:"num" },{ text:"  ·  Est. saved: ", kind:"dim" },{ text:"14 months", kind:"ok" },{ text:" vs manual", kind:"dim" }],
  ],
};

/* ══════════════════════════════════════════
   SCENE 2 — AI Agent Deployment
══════════════════════════════════════════ */
const S_AGENT: Scene = {
  id:"agent", title:"agent-studio — deploy", label:"AI Agent",
  topBadge:{ text:"Agent Studio",  color:"linear-gradient(135deg,#7F00FF,#0072FF)", shadow:"rgba(127,0,255,0.5)" },
  botBadge:{ text:"⚡ 40% tickets auto-resolved", color:"#AE75FF", border:"rgba(174,117,255,0.3)" },
  statusLeft:["● prod","Python 3.12","LangGraph"],
  statusRight:["Agent Studio v1.2.0","● Live"],
  lines:[
    [{ text:"$ agent-studio deploy support-agent", kind:"prompt" }],
    [{ text:"  Loading tools and prompt config…", kind:"dim" }],
    [],
    [{ text:"# support_agent.py", kind:"comment" }],
    [{ text:"from", kind:"keyword" },{ text:" langchain ", kind:"plain" },{ text:"import", kind:"keyword" },{ text:" ChatOpenAI", kind:"fn" }],
    [{ text:"from", kind:"keyword" },{ text:" tpa_agents ", kind:"plain" },{ text:"import", kind:"keyword" },{ text:" AgentToolkit, deploy", kind:"fn" }],
    [],
    [{ text:"tools", kind:"fn" },{ text:" = ", kind:"symbol" },{ text:"AgentToolkit", kind:"type" },{ text:"(", kind:"plain" }],
    [{ text:"    sources", kind:"fn" },{ text:"=[", kind:"plain" },{ text:"\"linear\"", kind:"string" },{ text:", ", kind:"plain" },{ text:"\"confluence\"", kind:"string" },{ text:", ", kind:"plain" },{ text:"\"slack\"", kind:"string" },{ text:"],", kind:"plain" }],
    [{ text:"    memory", kind:"fn" },{ text:"=", kind:"symbol" },{ text:"\"postgres\"", kind:"string" },{ text:",", kind:"plain" }],
    [{ text:"    model", kind:"fn" },{ text:"=", kind:"symbol" },{ text:"\"claude-sonnet-4-6\"", kind:"string" }],
    [{ text:")", kind:"plain" }],
    [],
    [{ text:"$ agent-studio test --eval-set prod-tickets", kind:"prompt" }],
    [],
    [{ text:"  Running eval on ", kind:"dim" },{ text:"200", kind:"num" },{ text:" tickets…", kind:"dim" }],
    [{ text:"  [", kind:"dim" },{ text:"████████████████████", kind:"ok" },{ text:"]  ", kind:"dim" },{ text:"200/200", kind:"num" }],
    [],
    [{ text:"  ✓ ", kind:"success" },{ text:"Resolve rate:  ", kind:"plain" },{ text:"40.2%", kind:"ok" },{ text:" end-to-end", kind:"dim" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Avg response:  ", kind:"plain" },{ text:"1.8s", kind:"num" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Hallucinations:", kind:"plain" },{ text:" 0", kind:"ok" },{ text:" (evals passed)", kind:"dim" }],
    [],
    [{ text:"$ agent-studio deploy --env prod --approve", kind:"prompt" }],
    [{ text:"  Deploying to ", kind:"dim" },{ text:"us-east-1", kind:"fn" },{ text:" · on-prem", kind:"dim" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Agent live  → ", kind:"plain" },{ text:"support.acme.internal", kind:"url" }],
  ],
};

/* ══════════════════════════════════════════
   SCENE 3 — Cloud / DevOps deployment
══════════════════════════════════════════ */
const S_DEVOPS: Scene = {
  id:"devops", title:"k8s-deploy — zsh", label:"Cloud Deploy",
  topBadge:{ text:"Cloud & DevOps", color:"linear-gradient(135deg,#00C6FF,#10B981)", shadow:"rgba(16,185,129,0.45)" },
  botBadge:{ text:"✓ 99.98% uptime SLA", color:"#10B981", border:"rgba(16,185,129,0.3)" },
  statusLeft:["● prod-cluster","k8s 1.30","Terraform"],
  statusRight:["ArgoCD synced","● All green"],
  lines:[
    [{ text:"$ terraform apply -auto-approve", kind:"prompt" }],
    [{ text:"  Plan: ", kind:"dim" },{ text:"12", kind:"num" },{ text:" to add, ", kind:"dim" },{ text:"3", kind:"num" },{ text:" to change, ", kind:"dim" },{ text:"0", kind:"num" },{ text:" to destroy.", kind:"dim" }],
    [],
    [{ text:"  aws_eks_cluster.main", kind:"fn" },{ text:"  → creating…", kind:"dim" }],
    [{ text:"  aws_rds_instance.db  ", kind:"fn" },{ text:"  → creating…", kind:"dim" }],
    [{ text:"  aws_elasticache.cache", kind:"fn" },{ text:" → creating…", kind:"dim" }],
    [],
    [{ text:"  Apply complete! ", kind:"ok" },{ text:"12 added, 3 changed.", kind:"plain" }],
    [],
    [{ text:"$ docker build -t acme/api:v2.3.1 .", kind:"prompt" }],
    [{ text:"  [", kind:"dim" },{ text:"████████████████████", kind:"ok" },{ text:"] ", kind:"dim" },{ text:"DONE", kind:"success" },{ text:"  12.4s", kind:"num" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Image size: ", kind:"plain" },{ text:"148 MB", kind:"num" },{ text:"  (", kind:"dim" },{ text:"-62%", kind:"ok" },{ text:" vs prev)", kind:"dim" }],
    [],
    [{ text:"$ kubectl apply -f k8s/", kind:"prompt" }],
    [{ text:"  deployment.apps/api", kind:"fn" },{ text:"     configured", kind:"ok" }],
    [{ text:"  service/api-svc    ", kind:"fn" },{ text:"     configured", kind:"ok" }],
    [{ text:"  hpa/api-hpa        ", kind:"fn" },{ text:"     configured", kind:"ok" }],
    [],
    [{ text:"$ kubectl rollout status deploy/api", kind:"prompt" }],
    [{ text:"  Waiting for rollout…", kind:"dim" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Rollout finished: ", kind:"plain" },{ text:"3/3", kind:"ok" },{ text:" pods ready", kind:"dim" }],
    [],
    [{ text:"  p99 latency:  ", kind:"dim" },{ text:"42ms", kind:"ok" },{ text:"    CPU:  ", kind:"dim" },{ text:"18%", kind:"ok" }],
    [{ text:"  Error rate:   ", kind:"dim" },{ text:"0.02%", kind:"ok" },{ text:"   Memory: ", kind:"dim" },{ text:"61%", kind:"num" }],
    [],
    [{ text:"  ✓ ", kind:"success" },{ text:"All checks passed · ", kind:"plain" },{ text:"SLA 99.98%", kind:"ok" }],
  ],
};

/* ══════════════════════════════════════════
   SCENE 4 — Web / Next.js Build & Deploy
══════════════════════════════════════════ */
const S_WEB: Scene = {
  id:"web", title:"next-build — bash", label:"Web Deploy",
  topBadge:{ text:"Web Dev",  color:"linear-gradient(135deg,#0072FF,#7F00FF)", shadow:"rgba(0,114,255,0.5)" },
  botBadge:{ text:"⚡ 98 Lighthouse score", color:"#F59E0B", border:"rgba(245,158,11,0.3)" },
  statusLeft:["● main","Next.js 15","TypeScript"],
  statusRight:["Vercel Edge","⚡ ISR enabled"],
  lines:[
    [{ text:"$ git push origin main", kind:"prompt" }],
    [{ text:"  → Triggering CI pipeline…", kind:"dim" }],
    [],
    [{ text:"  ✓ ", kind:"success" },{ text:"TypeScript  ", kind:"plain" },{ text:"0 errors", kind:"ok" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"ESLint      ", kind:"plain" },{ text:"0 warnings", kind:"ok" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Unit tests  ", kind:"plain" },{ text:"247/247 passed", kind:"ok" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"E2E tests   ", kind:"plain" },{ text:"38/38 passed", kind:"ok" }],
    [],
    [{ text:"$ next build", kind:"prompt" }],
    [{ text:"  Creating optimized production build…", kind:"dim" }],
    [],
    [{ text:"  Route ", kind:"dim" },{ text:"(app)", kind:"fn" }],
    [{ text:"  ┌ ○ ", kind:"dim" },{ text:"/", kind:"ok" },{ text:"                 ", kind:"plain" },{ text:"4.2 kB", kind:"num" }],
    [{ text:"  ├ ○ ", kind:"dim" },{ text:"/products", kind:"fn" },{ text:"          ", kind:"plain" },{ text:"6.1 kB", kind:"num" }],
    [{ text:"  ├ ○ ", kind:"dim" },{ text:"/blog/[slug]", kind:"fn" },{ text:"       ", kind:"plain" },{ text:"3.8 kB", kind:"num" }],
    [{ text:"  └ ƒ ", kind:"dim" },{ text:"/api/webhook", kind:"fn" },{ text:"      ", kind:"plain" },{ text:"0 kB", kind:"num" }],
    [],
    [{ text:"  ✓ ", kind:"success" },{ text:"Compiled in ", kind:"plain" },{ text:"8.3s", kind:"num" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"First Load JS: ", kind:"plain" },{ text:"82 kB", kind:"ok" },{ text:" shared", kind:"dim" }],
    [],
    [{ text:"$ vercel deploy --prod", kind:"prompt" }],
    [{ text:"  Uploading…  [", kind:"dim" },{ text:"████████████████████", kind:"ok" },{ text:"]", kind:"dim" }],
    [{ text:"  ✓ ", kind:"success" },{ text:"Deployed → ", kind:"plain" },{ text:"https://acme.vercel.app", kind:"url" }],
    [],
    [{ text:"  Lighthouse: ", kind:"dim" },{ text:"Perf 98 ", kind:"ok" },{ text:"· A11y 100 ", kind:"ok" },{ text:"· SEO 100", kind:"ok" }],
    [{ text:"  CDN Edge:   ", kind:"dim" },{ text:"32", kind:"num" },{ text:" regions · TTFB ", kind:"dim" },{ text:"28ms", kind:"ok" }],
  ],
};

const SCENES: Scene[] = [S_JAVA, S_AGENT, S_DEVOPS, S_WEB];

const LINE_DELAY  = 75;   // ms per line while typing
const HOLD_MS     = 27000; // ms to hold after last line (total scene ≈ 30s)
const FADE_MS     = 500;   // css fade duration

export default function TerminalHero() {
  const [sceneIdx,      setSceneIdx]      = useState(0);
  const [visibleLines,  setVisibleLines]  = useState(0);
  const [fading,        setFading]        = useState(false);   // true = fade-out in progress
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scene = SCENES[sceneIdx];

  const clear = () => { if (timerRef.current) clearTimeout(timerRef.current); };

  /* type one line at a time, then hold, then fade to next scene */
  const runScene = useCallback((sIdx: number, lineN: number) => {
    setSceneIdx(sIdx);
    setFading(false);
    setVisibleLines(lineN);

    const totalLines = SCENES[sIdx].lines.length;

    if (lineN < totalLines) {
      timerRef.current = setTimeout(() => runScene(sIdx, lineN + 1), LINE_DELAY);
    } else {
      // hold, then fade out → switch scene
      timerRef.current = setTimeout(() => {
        setFading(true);
        timerRef.current = setTimeout(() => {
          const next = (sIdx + 1) % SCENES.length;
          setVisibleLines(0);
          runScene(next, 0);
        }, FADE_MS);
      }, HOLD_MS);
    }
  }, []);

  useEffect(() => {
    timerRef.current = setTimeout(() => runScene(0, 0), 500);
    return clear;
  }, [runScene]);

  /* manual dot click */
  function jumpTo(idx: number) {
    clear();
    setFading(true);
    timerRef.current = setTimeout(() => {
      setVisibleLines(0);
      runScene(idx, 0);
    }, FADE_MS);
  }

  return (
    <div style={{ position:"relative", fontFamily:"'JetBrains Mono',monospace" }}>
      {/* terminal window */}
      <div style={{
        background:"#0D1117", borderRadius:16, overflow:"hidden",
        border:"1px solid rgba(0,198,255,0.18)",
        boxShadow:"0 32px 80px -16px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,198,255,0.06)",
        opacity: fading ? 0 : 1,
        transition:`opacity ${FADE_MS}ms ease`,
      }}>
        {/* ── title bar ── */}
        <div style={{
          display:"flex", alignItems:"center", gap:8, padding:"10px 16px",
          background:"#161B22", borderBottom:"1px solid rgba(255,255,255,0.06)",
        }}>
          {/* traffic lights */}
          <div style={{ display:"flex", gap:6 }}>
            <div style={{ width:12, height:12, borderRadius:"50%", background:"#EF4444" }}/>
            <div style={{ width:12, height:12, borderRadius:"50%", background:"#F59E0B" }}/>
            <div style={{ width:12, height:12, borderRadius:"50%", background:"#10B981" }}/>
          </div>

          {/* scene tabs */}
          <div style={{ flex:1, display:"flex", gap:2, marginLeft:8, overflow:"hidden" }}>
            {SCENES.map((s, i) => (
              <button key={s.id} onClick={() => jumpTo(i)} style={{
                padding:"3px 10px", fontSize:10, fontWeight:500,
                borderRadius:"6px 6px 0 0", border:"none", cursor:"pointer",
                fontFamily:"'Inter',sans-serif", letterSpacing:"0.02em",
                background: i === sceneIdx ? "#0D1117" : "transparent",
                color: i === sceneIdx ? "#00C6FF" : "#334155",
                transition:"all 150ms",
              }}>
                {s.label}
              </button>
            ))}
          </div>

          {/* window controls */}
          <div style={{ display:"flex", gap:6, flexShrink:0 }}>
            {["─","□","✕"].map(c => (
              <span key={c} style={{ fontSize:10, color:"#334155", cursor:"pointer" }}>{c}</span>
            ))}
          </div>
        </div>

        {/* ── code area ── */}
        <div style={{
          padding:"18px 22px", minHeight:370, maxHeight:400, overflowY:"hidden",
          background:"linear-gradient(180deg,#0D1117 0%,#0A0E1A 100%)",
          position:"relative",
        }}>
          <div style={{ position:"absolute", top:0, right:0, width:200, height:200, background:"radial-gradient(circle,rgba(0,198,255,0.07),transparent 70%)", pointerEvents:"none" }}/>
          <div style={{ position:"absolute", bottom:0, left:0, width:160, height:160, background:"radial-gradient(circle,rgba(127,0,255,0.06),transparent 70%)", pointerEvents:"none" }}/>

          <div style={{ position:"relative", lineHeight:1.75, fontSize:12 }}>
            {scene.lines.slice(0, visibleLines).map((line, li) => (
              <div key={li} style={{ display:"flex", flexWrap:"wrap", minHeight:"1.75em" }}>
                {line.length === 0
                  ? <span>&nbsp;</span>
                  : line.map((tok, ti) => <span key={ti} style={{ color: C[tok.kind] }}>{tok.text}</span>)
                }
                {li === visibleLines - 1 && visibleLines < scene.lines.length && (
                  <span style={{ display:"inline-block", width:7, height:"1em", background:"#00C6FF", marginLeft:2, verticalAlign:"middle", animation:"blink 1s step-end infinite" }}/>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── status bar ── */}
        <div style={{
          display:"flex", alignItems:"center", justifyContent:"space-between",
          padding:"5px 16px", background:"#161B22",
          borderTop:"1px solid rgba(255,255,255,0.05)",
          fontSize:10, color:"#334155",
        }}>
          <div style={{ display:"flex", gap:16 }}>
            {scene.statusLeft.map((s,i) => (
              <span key={i} style={{ color: i===0 ? "#10B981" : undefined }}>{s}</span>
            ))}
          </div>
          <div style={{ display:"flex", gap:16 }}>
            {scene.statusRight.map((s,i) => (
              <span key={i} style={{ color: i===1 ? "#0072FF" : undefined }}>{s}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── floating top badge ── */}
      <div style={{
        position:"absolute", top:-12, right:-12,
        background: scene.topBadge.color,
        color:"white", fontSize:10, fontWeight:700,
        padding:"4px 10px", borderRadius:999,
        letterSpacing:"0.08em", textTransform:"uppercase",
        boxShadow:`0 4px 16px -2px ${scene.topBadge.shadow}`,
        animation:"float 4s ease-in-out infinite",
        opacity: fading ? 0 : 1,
        transition:`opacity ${FADE_MS}ms ease`,
      }}>
        {scene.topBadge.text}
      </div>

      {/* ── floating bottom badge ── */}
      <div style={{
        position:"absolute", bottom:-14, left:20,
        background:"rgba(0,0,0,0.35)",
        border:`1px solid ${scene.botBadge.border}`,
        color: scene.botBadge.color,
        fontSize:10, fontWeight:600,
        padding:"4px 12px", borderRadius:999,
        fontFamily:"'Inter',sans-serif",
        backdropFilter:"blur(6px)",
        animation:"float 4s ease-in-out infinite 1.2s",
        opacity: fading ? 0 : 1,
        transition:`opacity ${FADE_MS}ms ease`,
      }}>
        {scene.botBadge.text}
      </div>

      {/* ── scene indicator dots ── */}
      <div style={{
        position:"absolute", bottom:-36, left:"50%", transform:"translateX(-50%)",
        display:"flex", gap:6,
      }}>
        {SCENES.map((s, i) => (
          <button key={s.id} onClick={() => jumpTo(i)} style={{
            width: i === sceneIdx ? 20 : 6,
            height:6, borderRadius:99, border:"none", cursor:"pointer",
            background: i === sceneIdx ? "#00C6FF" : "rgba(168,200,240,0.2)",
            transition:"all 300ms cubic-bezier(0.16,1,0.3,1)",
            padding:0,
          }}/>
        ))}
      </div>
    </div>
  );
}
