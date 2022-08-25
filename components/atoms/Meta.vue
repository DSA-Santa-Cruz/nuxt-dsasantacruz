<template>
  <Head>
    <Title>
      {{ document.data.meta_title || document.title + " | DSA Santa Cruz" }}
    </Title>
    <Meta name="description" :content="document.data.meta_description" />
    <meta name="og:title" content="The Rock" />
    <meta name="og:type" content="movie" />
    <meta name="og:url" content="http://www.imdb.com/title/tt0117500/" />
    <meta name="og:image" :content="meta_image" />
    <meta name="og:site_name" content="DSA Santa Cruz" />

    <meta name="og:description" :content="document.data.meta_description" />

    <meta name="fb:page_id" content="269204910201952" />
    <meta name="og:email" content="info@dsasantacruz.org" />

    <meta name="og:latitude" content="36.9741" />
    <meta name="og:longitude" content="-122.0308" />
    <meta name="og:locality" content="Santa Cruz" />
    <meta name="og:region" content="CA" />
    <meta name="og:postal-code" content="95060" />
    <meta name="og:country-name" content="USA" />
  </Head>
</template>

<script>
const buildURL = (url, params) => {
  const paramsURI = Object.keys(params)
    .map(key => key + "=" + params[key])
    .join("&");
  return `${url}?${paramsURI}`;
};

const processMetaImage = (url, process = true, defaultImage) => {
  const imgUrl = url || defaultImage;
  // set default params
  const defaultParams = {
    auto: "format,compress",
    fit: "crop",
    crop: "faces,edges,entropy",
  };

  let urlParams;

  // get just image's existing url params
  imgUrl
    .split("?")[1]
    .split("&")
    .forEach(string => {
      const splitString = string.split("=");
      urlParams = {
        ...urlParams,
        ...{ [splitString[0]]: splitString[1] },
      };
    });

  // setup params
  let params = { ...defaultParams };

  // add rectangle crop from prismic
  if (urlParams.rect) {
    params = { ...params, ...{ rect: urlParams.rect } };
  }

  // add duotone
  if (process) {
    params = {
      ...params,
      ...{
        auto: "format,compress,enhance",
        con: "25",
        high: "-50",
        duotone: "EC1F27,F0565B",
        colorquant: 2,
      },
    };
  }

  // get just the image part of the url
  const parsedUrl = imgUrl.split("?")[0];

  // create srcs
  const imgixUrl = buildURL(parsedUrl, {
    ...params,
    w: 1200,
    h: 630,
  });

  // return the srcset object
  return imgixUrl;
};

export default {
  async setup() {
    const { client } = usePrismic();
    const getData = () => client.getSingle("global_settings");
    const { data } = await useAsyncData("globals", getData);
    console.log(data);
    return { globalSettings: data };
  },
  props: {
    document: {
      type: Object,
      default: null,
    },
  },
  computed: {
    meta_image() {
      const metaImageUrl = processMetaImage(
        this.document.data.meta_image.url,
        true,
        this.globalSettings.data.default_meta_image.url,
        // editPhoto,
      );
      return metaImageUrl;
    },
  },
};
</script>