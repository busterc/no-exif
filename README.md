# no-exif
Remove Exif and GPS location data from JPEG images and create new files with the `.noexif.jpg` extension while preserving the original files and filenames.

## Version
1.0.0

## Installation
```sh
$ [sudo] npm i no-exif -g
```

## CLI Usage
```sh
$ [sudo] noexif <filename>
```

## OS X Finder Usage
[Remove Exif Data.app](Remove Exif Data.app) is an Automator app that provides an "Open With" Finder option for `.jpg` and `.jpeg` files.

## Dependencies
* [PhantomJS](https://github.com/ariya/phantomjs) - scriptable, headless webkit

## Meta
```json
{
	"keywords": [
		"exif",
		"gps",
		"jpeg",
		"jpg",
		"extract",
		"strip",
		"kill",
		"erase",
		"delete",
		"remove",
		"phantomjs",
		"images",
		"privacy",
		"geolocation",
		"location"
	]
}
```

## License
The MIT License (MIT)

Copyright (c) 2014 Buster Collings

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
