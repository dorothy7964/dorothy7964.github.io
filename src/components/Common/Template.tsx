import styled from '@emotion/styled'
import Footer from 'components/common/Footer'
import GlobalStyle from 'components/common/GlobalStyle'
import { FunctionComponent, ReactNode } from 'react'
import { Helmet } from 'react-helmet'

type TemplateProps = {
  title: string
  description: string
  url: string
  image: string
  children: ReactNode
}

const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

const Template: FunctionComponent<TemplateProps> = function ({
  title,
  description,
  url,
  image,
  children,
}) {
  return (
    <Container>
      <Helmet>
        <title>{title}</title>

        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={title} />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:site" content="@사용자이름" />
        <meta name="twitter:creator" content="@사용자이름" />

        <meta
          name="google-site-verification"
          content="f-DxjBbdp5Jb0wZB_UQogl8_bRCKD6v6F1ZRryCPuIk"
        />

        <meta
          name="naver-site-verification"
          content="6864028e5c06c638aa92648fb13b83cb91c592eb"
        />

        <html lang="ko" />
      </Helmet>
      <GlobalStyle />
      {children}
      <Footer />
    </Container>
  )
}

export default Template
