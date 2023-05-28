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
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/61782539/241557945-e146005d-7d4f-49db-92b1-135a040d364f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230528T115116Z&X-Amz-Expires=300&X-Amz-Signature=8432bad1a31c4cd5b711526ffcd95b1d962761144dd1933fc3e50ffab99efa75&X-Amz-SignedHeaders=host&actor_id=61782539&key_id=0&repo_id=406726783",
    link: "/docs/category/upgradeable-contract",
    description: (
      <>
        About Ethereum, Polygon, Solidity, Hardhat, Ethers.js and more.
      </>
    ),
  },
  {
    title: 'BackEnd',
    image: "https://github-production-user-asset-6210df.s3.amazonaws.com/61782539/241557945-e146005d-7d4f-49db-92b1-135a040d364f.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAIWNJYAX4CSVEH53A%2F20230528%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230528T115116Z&X-Amz-Expires=300&X-Amz-Signature=8432bad1a31c4cd5b711526ffcd95b1d962761144dd1933fc3e50ffab99efa75&X-Amz-SignedHeaders=host&actor_id=61782539&key_id=0&repo_id=406726783",
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
