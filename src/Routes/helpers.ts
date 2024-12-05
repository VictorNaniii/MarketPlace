import { matchPath } from 'react-router-dom'

export const PathPublic: { [k: string]: string } = {
  home: '/',
  productDetails: '/product/:idOrSlug',
}

export const PathPrivate: { [k: string]: string } = {
  accountSetings: '/account-settings',
}

export const paths: { [k: string]: string } = Object.assign(
  {},
  PathPublic,
  PathPrivate
)

export const checkPathMatch = (
  pathname: string,
  paths: { [k: string]: string }
) => {
  const allPaths = Object.values(paths)

  return allPaths.some((path) => matchPath(path, pathname))
}
