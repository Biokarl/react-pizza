import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = (props: any) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="2" y="277" rx="10" ry="10" width="280" height="26" />
    <rect x="-5" y="318" rx="9" ry="9" width="280" height="88" />
    <rect x="6" y="420" rx="10" ry="10" width="95" height="30" />
    <circle cx="138" cy="132" r="125" />
    <rect x="157" y="420" rx="25" ry="25" width="110" height="40" />
  </ContentLoader>
);

export default Skeleton;
