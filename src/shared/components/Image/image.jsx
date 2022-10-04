import './styles.scss'

export const Image = (props) => {
  const { className, alt, src, srcSet } = props
  return (
    <img
      className={className}
      src={src}
      srcSet={srcSet}
      alt={alt}
      loading={'lazy'}
    />
  )
}
