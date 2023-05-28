import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  link: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'BlockChain',
    image: "https://i.ibb.co/xmdMmv7/docs.png",
    link: "/docs/category/upgradeable-contract",
    description: (
      <>
        About Ethereum, Polygon, Solidity, Hardhat, Ethers.js and more.
      </>
    ),
  },
  {
    title: 'BackEnd',
    image: "https://i.ibb.co/xmdMmv7/docs.png",
    link: "/docs/category/project",
    description: (
      <>
        About SQL & NoSQL DataBase, NestJS, Node.js, Typescript, Django, Python and more.
      </>
    ),
  },
  {
    title: 'GitHub',
    image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
    link: "https://github.com/chihunmanse",
    description: (
      <>
       If you want to see my project source code, please visit github. <code>github.com/chihunmanse</code>
      </>
    ),
  },
];

function Feature({title, image, link, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
        <img src={image} alt={title} width="250px" height="250px"/>
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
