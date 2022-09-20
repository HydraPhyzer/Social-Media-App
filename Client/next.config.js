/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// module.exports = ;

module.exports={
  nextConfig,
  images:{
    domains:['www.esafety.gov.au' , 'images.pexels.com','localhost']
  }
}
