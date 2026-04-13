import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

const features = [
  {
    title: 'Human-Readable XML',
    description:
      'CSML is plain XML — open it in any text editor, write it by hand, diff it in version control. No special viewer or proprietary software required.',
  },
  {
    title: 'Topology / Geometry / Presentation',
    description:
      'CSML cleanly separates what atoms exist and how they connect (topology) from spatial data (geometry) and rendering hints (presentation). Each layer is optional.',
  },
  {
    title: 'Polymer & Ring Support',
    description:
      'First-class repeat units for macromolecules and copolymers, aromatic and non-aromatic ring systems, and inscribed-circle notation — features missing from older formats.',
  },
  {
    title: 'Explicit Stereochemistry',
    description:
      'Chirality (R/S), wedge and hatch bonds, and E/Z double bonds are all declared explicitly. Nothing is inferred from context or convention.',
  },
  {
    title: 'Multiple Molecules per File',
    description:
      'Reactions, mixtures, and fragment libraries can all live in a single CSML document. Reusable composable fragments keep large files manageable.',
  },
  {
    title: 'Fully Open Specification',
    description:
      'No proprietary extensions. No vendor lock-in. The complete grammar is published and anyone can implement a parser or renderer.',
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4', styles.featureCard)}>
      <Heading as="h3">{title}</Heading>
      <p>{description}</p>
    </div>
  );
}

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          Chemical Structure Markup Language
        </Heading>
        <p className="hero__subtitle">
          An open, XML-based format for describing molecular structures —
          readable by people, processable by machines.
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/introduction">
            Read the Introduction
          </Link>
          <Link className="button button--outline button--secondary button--lg" to="/docs/specification">
            View the Specification
          </Link>
        </div>
      </div>
    </header>
  );
}

function CodeExample() {
  return (
    <section className={styles.codeSection}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--5', styles.codeDescription)}>
            <Heading as="h2">Simple by design</Heading>
            <p>
              A valid CSML document needs only a root <code>&lt;csml&gt;</code>{' '}
              element and a <code>&lt;molecule&gt;</code>. Atoms and bonds are
              declared explicitly — element, charge, isotope, and connectivity
              are all right there in plain text.
            </p>
            <p>
              Geometry and presentation layers are optional additions. The same
              document can drive a 2D renderer, a 3D viewer, or a
              graph-processing pipeline without re-encoding the structure.
            </p>
            <Link className="button button--primary" to="/docs/introduction#quick-example">
              See more examples
            </Link>
          </div>
          <div className={clsx('col col--7')}>
            <pre className={styles.codeBlock}>{`<?xml version="1.0" encoding="UTF-8"?>
<csml version="0.1">
  <molecule id="ethanol" name="Ethanol">
    <atom id="C1" element="C" />
    <atom id="C2" element="C" />
    <atom id="O1" element="O" />
    <bond from="C1" to="C2" order="single" />
    <bond from="C2" to="O1" order="single" />
  </molecule>
</csml>`}</pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className="container">
        <Heading as="h2" className={styles.featuresHeading}>
          Why CSML?
        </Heading>
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="An open, XML-based markup language for describing molecular structures — readable by people, processable by machines.">
      <HomepageHeader />
      <main>
        <CodeExample />
        <FeaturesSection />
      </main>
    </Layout>
  );
}