import React from "react"
import ContentLoader from "react-content-loader"

const ListNearbyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={260}
    viewBox="0 0 100% 260"
    backgroundColor="#b1dff2"
    foregroundColor="#87ceeb"
    {...props}
  >
    <rect x="0" y="10" rx="10" ry="10" width="100%" height="70" /> 
    <rect x="0" y="100" rx="10" ry="10" width="100%" height="70" /> 
    <rect x="0" y="190" rx="10" ry="10" width="100%" height="70" />
  </ContentLoader>
)

export { ListNearbyLoader }