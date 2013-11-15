# 7digital API CLI client

### About 7digital

7digital.com is an online music store operating in over 16 countries and offering more than 11 million high quality DRM free MP3s (320kbps) from all major labels and wide range of idependent labels and distributors. 7digital API will give you access to the full catalogue including high quality album art, 30s preview clips for all tracks, commissions on sales, integrated purchasing and full length streaming. More details at [developer.7digital.net](http://developer.7digital.net/)

### WHAT IS THIS?

A CLI client for talking to the 7digital API

### INSTALLATION

Install it via [npm](http://npmjs.org/)

    npm install -g 7digital-cli

### USAGE

Create an ini file callled ~/.7drc with your API consumer key and secret or set
the following environment variables `7D_CONSUMERKEY` and `7D_CONSUMERSECRET`.

    7d artist releases --artistId=1

or

    7d release details --releaseId=3063997

etc
