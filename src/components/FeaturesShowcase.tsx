import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  Cctv,
  WalletCards,
  MonitorCog,
  UserRoundCheck,
  ChartNoAxesCombined,
  TriangleAlert,
  ChevronLast
} from 'lucide-react';
import './FeaturesShowcase.css';

type Feature = {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
};

type FeaturesResponse = {
  features?: Feature[];
};

const iconComponents: Record<string, React.ComponentType<{ className?: string }>> = {
  cctv: Cctv,
  'wallet-cards': WalletCards,
  'monitor-cog': MonitorCog,
  'user-round-check': UserRoundCheck,
  'chart-no-axes-combined': ChartNoAxesCombined,
  'triangle-alert': TriangleAlert
};

const FeaturesShowcase: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [navAffixed, setNavAffixed] = useState(false);
  const featureRefs = useRef<Record<string, HTMLElement | null>>({});
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadFeatures = async () => {
      try {
        const response = await fetch('/assets/features/features.json');
        if (!response.ok) {
          throw new Error('Failed to load features');
        }

        const data: Feature[] | FeaturesResponse = await response.json();
        const resolved = Array.isArray(data) ? data : data.features ?? [];

        if (isMounted) {
          setFeatures(resolved);
          if (resolved.length > 0) {
            setActiveId(resolved[0].id);
          }
        }
      } catch (error) {
        console.error('Unable to load features:', error);
      }
    };

    loadFeatures();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    if (!features.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-feature-id');
          if (id && id !== activeId) {
            setActiveId(id);
          }
        }
      },
      {
        root: null,
        threshold: [0.45, 0.65, 0.85]
      }
    );

    features.forEach((feature) => {
      const element = featureRefs.current[feature.id];
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [features, activeId]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavAffixed(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(sentinel);

    return () => {
      observer.disconnect();
    };
  }, []);

  const featureList = useMemo(() => features, [features]);

  const handleNavClick = (featureId: string) => {
    const featureElement = featureRefs.current[featureId];
    if (featureElement) {
      featureElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setActiveId(featureId);
    }
  };

  const handleSkipSection = () => {
    if (!featureList.length) {
      return;
    }

    const last = featureList[featureList.length - 1];
    handleNavClick(last.id);

    setTimeout(() => {
      const mobileApp = document.getElementById('mobile-app');
      if (mobileApp) {
        mobileApp.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 600);
  };

  return (
    <section id="features" className="features-section-wrapper">
      <div className="features-section">
        <div ref={sentinelRef} className="features-nav-sentinel" aria-hidden="true" />
        <div className="features-layout">
          <aside className={`features-nav ${navAffixed ? 'is-sticky' : ''}`}>
            <div className="features-nav-rail">
              <div className="features-nav-items">
                {featureList.map((feature) => {
                  const Icon = iconComponents[feature.icon];
                  const isActive = feature.id === activeId;

                  return (
                    <button
                      key={feature.id}
                      type="button"
                      onClick={() => handleNavClick(feature.id)}
                      className={`features-nav-item ${isActive ? 'is-active' : ''}`}
                      aria-current={isActive ? 'true' : undefined}
                    >
                      <span className="features-nav-icon">{Icon && <Icon />}</span>
                      <span className="features-nav-label">{feature.title}</span>
                    </button>
                  );
                })}
              </div>
              <div className="features-nav-divider" aria-hidden="true" />
              <button type="button" className="features-nav-item features-skip" onClick={handleSkipSection}>
                <span className="features-nav-icon">
                  <ChevronLast />
                </span>
                <span className="features-nav-label">Skip Section</span>
              </button>
            </div>
          </aside>

          <div className="features-content">
            {featureList.map((feature) => (
              <article
                key={feature.id}
                ref={(element) => {
                  featureRefs.current[feature.id] = element;
                }}
                id={`feature-${feature.id}`}
                data-feature-id={feature.id}
                className="feature-panel"
              >
                <div className="feature-media">
                  <img
                    src={`/assets/features/${feature.image}`}
                    alt={feature.title}
                    loading="lazy"
                  />
                </div>
                <div className="feature-copy">
                  <h2>{feature.title}</h2>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
