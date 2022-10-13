const generateMetaTags = (params) => {
  const metaTags = []
  const validMetaTags = ['description']

  validMetaTags.forEach((metaTag) => {
    if (params[metaTag]) {
      metaTags.push({
        hid: `${metaTag}`,
        name: `${metaTag}`,
        content: params[metaTag],
      })
    }
  })

  return metaTags
}

const generateOpenGraphMetaTags = (params) => {
  const metaTags = []
  const validMetaTags = ['title', 'description', 'url', 'image', 'type']

  validMetaTags.forEach((metaTag) => {
    if (params[metaTag]) {
      metaTags.push({
        hid: `og:${metaTag}`,
        property: `og:${metaTag}`,
        content: params[metaTag],
      })
    }
  })

  return metaTags
}

const generateTwitterMetaTags = (params) => {
  const metaTags = []
  const validMetaTags = ['title', 'description', 'image', 'card', 'site']

  validMetaTags.forEach((metaTag) => {
    if (params[metaTag]) {
      metaTags.push({
        hid: `twitter:${metaTag}`,
        property: `twitter:${metaTag}`,
        content: params[metaTag],
      })
    }
  })

  return metaTags
}

const generateHeadData = (params) => {
  const metaTags = generateMetaTags(params)
  const openGraphMetaTags = generateOpenGraphMetaTags(params)
  const twitterMetaTags = generateTwitterMetaTags(params)

  const meta = [
    ...metaTags,
    ...openGraphMetaTags,
    ...twitterMetaTags,
  ]

  return {
    title: params.title,
    meta,
  }
}

export default {
  generateMetaTags,
  generateOpenGraphMetaTags,
  generateTwitterMetaTags,
  generateHeadData,
}
