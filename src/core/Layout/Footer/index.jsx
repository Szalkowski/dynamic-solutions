import './styles.scss'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer>
      <p className={'small'}>
        &#169; Maciej Szałkowski, Inc. All rights reserved.&nbsp;
        {currentYear}
      </p>
    </footer>
  )
}
