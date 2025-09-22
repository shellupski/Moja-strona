// React i style
import React, { useMemo, useState } from "react";
import "./Skills.css";

// FontAwesome
import {
  FaWindows,
  FaLinux,
  FaNetworkWired,
  FaDatabase,
  FaTerminal,
  FaCloud,
  FaTools,
  FaComments,
  FaLightbulb,
  FaUsers,
  FaHtml5,
  FaCss3,
  FaAmazon
} from "react-icons/fa";

// Simple Icons
import {
  SiDocker,
  SiReact,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGitlab,
  SiGithubactions,
  SiJira,
  SiFirebase,
  SiGooglecloud,
  SiPhp
} from "react-icons/si";
// DODANO: Azure z Tabler Icons
import { TbBrandAzure } from "react-icons/tb";

const LEVELS = {
    Zaawansowany: 80,
    "Średniozaawansowany": 65,
    Podstawy: 45
};

const GROUPS = [
    {
        key: "systems",
        label: "Systemy i administracja",
        items: [
            { name: "Windows Server (AD, GPO)", level: "Zaawansowany", Icon: FaWindows, notes: "Administracja domeną, polityki GPO" },
            { name: "Linux / Bash", level: "Średniozaawansowany", Icon: FaLinux, notes: "CLI, skrypty, podstawy automatyzacji" },
            { name: "Skrypty Bash / PowerShell", level: "Średniozaawansowany", Icon: FaTerminal },
            { name: "Backupy, monitoring, twardnienie", level: "Średniozaawansowany", Icon: FaTools }
        ]
    },
    {
        key: "network",
        label: "Sieci",
        items: [
            { name: "TCP/IP, DNS, DHCP, VPN", level: "Zaawansowany", Icon: FaNetworkWired },
            { name: "Routery • Switche • Firewalle", level: "Średniozaawansowany", Icon: FaNetworkWired }
        ]
    },
    {
        key: "db",
        label: "Bazy danych",
        items: [
            { name: "MySQL", level: "Średniozaawansowany", Icon: SiMysql, notes: "administracja, optymalizacja, kopie" },
            { name: "PostgreSQL", level: "Podstawy", Icon: SiPostgresql },
            { name: "SQL (zapytania, optymalizacja)", level: "Średniozaawansowany", Icon: FaDatabase }
        ]
    },
    {
        key: "devops",
        label: "DevOps i automatyzacja",
        items: [
            { name: "Git (GitHub/GitLab)", level: "Zaawansowany", Icon: SiGit },
            { name: "CI/CD (GitHub Actions)", level: "Podstawy", Icon: SiGithubactions },
            { name: "Docker", level: "Podstawy", Icon: SiDocker },
            {
                name: "Chmura: AWS / Azure / GCP",
                level: "Podstawy",
                Icon: FaCloud,
                suffixIcons: [FaAmazon, TbBrandAzure, SiGooglecloud]
            }
        ]
    },
    {
        key: "frontend",
        label: "Web / Development",
        items: [
            { name: "React", level: "Średniozaawansowany", Icon: SiReact },
            { name: "JavaScript", level: "Średniozaawansowany", Icon: SiJavascript },
            { name: "HTML5 / CSS3", level: "Średniozaawansowany", Icon: FaHtml5, twinIcon: FaCss3 },
            { name: "PWA, Firebase", level: "Średniozaawansowany", Icon: SiFirebase },
            { name: "PHP (podstawy)", level: "Podstawy", Icon: SiPhp }
        ]
    },
    {
        key: "tools",
        label: "Narzędzia i praktyki",
        items: [
            { name: "Jira", level: "Zaawansowany", Icon: SiJira },
            { name: "GitLab", level: "Podstawy", Icon: SiGitlab },
            { name: "GitHub", level: "Średniozaawansowany", Icon: SiGit },
            { name: "Bezpieczeństwo i dobre praktyki", level: "Średniozaawansowany", Icon: FaTools }
        ]
    },
    {
        key: "soft",
        label: "Umiejętności miękkie",
        items: [
            { name: "Rozwiązywanie problemów", level: "Zaawansowany", Icon: FaLightbulb },
            { name: "Komunikacja", level: "Zaawansowany", Icon: FaComments },
            { name: "Współpraca i organizacja pracy", level: "Zaawansowany", Icon: FaUsers }
        ]
    }
];

const SkillItem = ({ name, level, Icon, twinIcon: Twin, suffixIcons }) => {
    const value = LEVELS[level] || 50;
    return (
        <div className="sk-item glass">
            <div className="sk-head">
                <div className="sk-icons">
                    <Icon className="sk-icon" />
                    {Twin && <Twin className="sk-icon sk-icon--twin" />}
                    {suffixIcons && suffixIcons.map((S, i) => <S key={i} className="sk-icon sk-icon--mini" />)}
                </div>
                <div className="sk-title">{name}</div>
                <div className={`sk-level sk-level--${level}`}>{level}</div>
            </div>

            <div className="sk-bar">
                <div className="sk-bar__fill" style={{ width: `${value}%` }} />
            </div>
        </div>
    );
};

const Skills = () => {
    const [active, setActive] = useState("all");

    const items = useMemo(() => {
        if (active === "all") return GROUPS;
        return GROUPS.filter((g) => g.key === active);
    }, [active]);

    return (
        <section id="skills" className="skills">
            <div className="skills__container">
                <header className="skills__header">
                    <h2 className="skills__title">
                        Umiejętności <span>/ Skills</span>
                    </h2>
                    <p className="skills__kicker">Systemy • Sieci • Bazy danych • DevOps • React</p>

                    <div className="skills__legend">
                        <span><b>Zaawansowany</b> ~80%</span>
                        <span><b>Średniozaawansowany</b> ~65%</span>
                        <span><b>Podstawy</b> ~45%</span>
                    </div>

                    <div className="skills__tabs">
                        <button
                            className={`tab ${active === "all" ? "is-active" : ""}`}
                            onClick={() => setActive("all")}
                        >
                            Wszystko
                        </button>
                        {GROUPS.map((g) => (
                            <button
                                key={g.key}
                                className={`tab ${active === g.key ? "is-active" : ""}`}
                                onClick={() => setActive(g.key)}
                            >
                                {g.label}
                            </button>
                        ))}
                    </div>
                </header>

                {items.map((group) => (
                    <section key={group.key} className="sk-group">
                        {active === "all" && <h3 className="sk-group__title">{group.label}</h3>}
                        <div className="sk-grid">
                            {group.items.map((s) => (
                                <SkillItem key={s.name} {...s} />
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </section>
    );
};

export default Skills;