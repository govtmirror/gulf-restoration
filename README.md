# Gulf Restoration Program Website

## Project Dependencies

### [Hugo](https://gohugo.io/)

Hugo is a static site generator written in Go (it's fast).  You can download the binaries for your system from the Hugo website.

### [libvips](https://github.com/jcupitt/libvips)

Image processing library required for the npm package [sharp](https://www.npmjs.com/package/sharp).  On Mac OSX you can install using homebrew: `brew install homebrew/science/vips`

### Node Packages

This project also depends on several [npm](https://www.npmjs.com/) packages.  To install run navigate to the project directory in your terminal and run `npm install`.  A list of all npm dependencies is available in `package.json`.

## Development

Run a development server with `npm start`.

## Build

Create a production ready build of the site with `npm run build` then copy the contents of the `dist` directory to your the server.
