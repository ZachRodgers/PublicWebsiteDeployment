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

const MOBILE_BREAKPOINT = 768;

const FeaturesShowcase: React.FC = () => {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [navAffixed, setNavAffixed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const trackerRefs = useRef<Record<string, HTMLElement | null>>({});
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const topBoundaryRef = useRef<HTMLDivElement | null>(null);
  const bottomBoundaryRef = useRef<HTMLDivElement | null>(null);

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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const featureList = useMemo(() => features, [features]);

  useEffect(() => {
    Object.keys(trackerRefs.current).forEach((key) => {
      if (!featureList.some((feature) => feature.id === key)) {
        delete trackerRefs.current[key];
      }
    });
  }, [featureList]);

  useEffect(() => {
    if (!featureList.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const topBoundary = topBoundaryRef.current;
        const bottomBoundary = bottomBoundaryRef.current;

        for (const entry of entries) {
          if (!entry.isIntersecting) continue;

          if (topBoundary && entry.target === topBoundary) {
            const firstId = featureList[0]?.id;
            if (firstId && firstId !== activeId) {
              setActiveId(firstId);
            }
            return;
          }

          if (bottomBoundary && entry.target === bottomBoundary) {
            const lastId = featureList[featureList.length - 1]?.id;
            if (lastId && lastId !== activeId) {
              setActiveId(lastId);
            }
            return;
          }
        }

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-feature-id');
          if (id && (isMobile || id !== activeId)) {
            setActiveId(id);
          }
        }
      },
      {
        root: null,
        threshold: isMobile ? [0.3, 0.45] : [0.35]
      }
    );

    featureList.forEach((feature) => {
      const element = trackerRefs.current[feature.id];
      if (element) {
        observer.observe(element);
      }
    });

    const topBoundary = topBoundaryRef.current;
    const bottomBoundary = bottomBoundaryRef.current;

    if (topBoundary) {
      observer.observe(topBoundary);
    }

    if (bottomBoundary) {
      observer.observe(bottomBoundary);
    }

    return () => {
      observer.disconnect();
    };
  }, [featureList, activeId, isMobile]);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || isMobile) {
      setNavAffixed(false);
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
  }, [isMobile]);

  const handleNavClick = (featureId: string) => {
    const element = trackerRefs.current[featureId];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
        <h2 className="home-section-title">What we offer:</h2>
        <div className="features-layout">
          {!isMobile && (
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
          )}

          <div className={`features-content ${isMobile ? 'is-mobile' : 'is-desktop'}`}>
            {isMobile ? (
              featureList.map((feature) => (
                <article
                  key={feature.id}
                  ref={(element) => {
                    if (element) {
                      trackerRefs.current[feature.id] = element;
                    } else {
                      delete trackerRefs.current[feature.id];
                    }
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
              ))
            ) : (
              <>
                <div className="features-scroll-track" aria-hidden="true">
                  <div
                    ref={topBoundaryRef}
                    className="feature-boundary feature-boundary-top"
                  />
                  {featureList.map((feature, index) => (
                    <div
                      key={`${feature.id}-trigger`}
                      ref={(element) => {
                        if (element) {
                          trackerRefs.current[feature.id] = element;
                        } else {
                          delete trackerRefs.current[feature.id];
                        }
                      }}
                      data-feature-id={feature.id}
                      className={`feature-trigger ${
                        index === 0 ? 'is-first' : index === featureList.length - 1 ? 'is-last' : ''
                      }`}
                    />
                  ))}
                  <div
                    ref={bottomBoundaryRef}
                    className="feature-boundary feature-boundary-bottom"
                  />
                </div>
                <div className="features-active-panel">
                  {featureList.map((feature) => (
                    <article
                      key={feature.id}
                      className={`feature-panel ${feature.id === activeId ? 'is-active' : ''}`}
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
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesShowcase;
