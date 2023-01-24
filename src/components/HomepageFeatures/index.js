import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Roll and Flow',
    Svg: require('@site/static/img/icon-00.svg').default,
    description: (
      <>
        It matters not what you roll, but how you roll it. Randomness, as in life plays a role, it keeps us interested and on our toes. But it is not the only factor. You can choose to roll with the punches or fight back. The choice is yours.
      </>
    ),
  },
  {
    title: 'Kindness Matters',
    Svg: require('@site/static/img/icon-01.svg').default,
    description: (
      <>
        Show courage and kindness and play nice! Or not! It's your choice. But be warned, if you are a jerk, you will be eaten by a grue.
      </>
    ),
  },
  {
    title: 'Powered by Lobster Rolls',
    Svg: require('@site/static/img/icon-02.svg').default,
    description: (
      <>
        As in life, lobster rolls play a crucial role in the game. A Lobster Roll is a food item that can be eaten to restore 1d6 hit points. It is a common food item, and can be found in most taverns and inns.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
