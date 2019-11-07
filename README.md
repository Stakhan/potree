
# README

* [Getting Started](./docs/getting_started.md)

## About

Potree is a free open-source WebGL based point cloud renderer for large point clouds.
It is based on the [TU Wien Scanopy project](https://www.cg.tuwien.ac.at/research/projects/Scanopy/)
and it was part of the [Harvest4D Project](https://harvest4d.org/).


<a href="http://potree.org/wp/demo/" target="_blank"> ![](./docs/images/potree_screens.png) </a>

Newest information and work in progress is usually available on [twitter](https://twitter.com/m_schuetz)

Contact: Markus Schütz (mschuetz@potree.org)

Reference: [Potree: Rendering Large Point Clouds in Web Browsers](https://www.cg.tuwien.ac.at/research/publications/2016/SCHUETZ-2016-POT/SCHUETZ-2016-POT-thesis.pdf)

## Getting Started

### Build and Run

Make sure you have [node.js](http://nodejs.org/) installed

Install all dependencies, as specified in package.json, 
then, install the gulp build tool:

    cd <potree_directory>
    npm install
    npm install -g gulp
    npm install -g rollup

Use the ```gulp watch``` command to 

* create ./build/potree 
* watch for changes to the source code and automatically create a new build on change
* start a web server at localhost:1234. 

```
gulp watch
```

Go to http://localhost:1234/examples/ to test the examples.

### Convert

Download [PotreeConverter](https://github.com/potree/PotreeConverter) and run it like this:

    ./PotreeConverter.exe C:/pointclouds/data.las -o C:/pointclouds/data_converted

Copy the converted directory into &lt;potreeDirectory&gt;/pointclouds/data_converted. Then, duplicate and rename one of the examples and modify the path in the html file to your own point cloud.

## Downloads

[PotreeConverter source and Win64 binaries](https://github.com/potree/PotreeConverter/releases)

## Showcase

Take a look at the [potree showcase](http://potree.org/wp/demo/) for some live examples.

## Donations

We would like to thank our sponsors for their financial contributions that keep this project up and running!

<table>
	<tr>
		<th>
			Diamond<br>
			€ 15,000+
		</th>
		<td>
			<a href="http://rapidlasso.com">
				<img src="./docs/sponsors/rapidlasso_square_256x2561.png" width="150" height="150"/>
			</a>
			<a href="http://www.synth3d.co">
				<img src="docs/sponsors/synth.png" height="120"/>
			</a>
			<a href="http://www.geocue.com">
				<img src="docs/sponsors/geocue.png" height="120px"/>
			</a>
			<a href="http://www.ne.ch/autorites/DDTE/SGRF/SITN/Pages/accueil.aspx">
				<img src="docs/sponsors/sitn_logo.png" height="120px"/> &nbsp;
			</a>
		</td>
	</tr>
	<tr>
		<th>
			Gold<br>
			€ 10,000+
		</th>
		<td>
			<a href="https://www.bart.gov">
				<img src="docs/sponsors/bart.png" height="100"/>
			</a>
		</td>
	</tr>
	<tr>
		<th>
			Silver<br>
			€ 5,000+
		</th>
		<td>
			<a href="http://georepublic.info">
				<img src="docs/sponsors/georepublic.png" height="40"/>
			</a>
		</td>
	</tr>
	<tr>
		<th>
			Bronze<br>
			€ 1,000+
		</th>
		<td>
			<a href="http://www.kts.co.jp">
				<img src="docs/sponsors/kts.png" height="40"/> &nbsp;
			</a>
			<a href="http://veesus.com">
				<img src="docs/sponsors/veesus_small.png" height="40"/> &nbsp;
			</a>
			<a href="http://www.sigeom.ch">
				<img src="docs/sponsors/logo_sigeom.png" height="40"/> &nbsp;
			</a>
			<a href="http://archpro.lbg.ac.at">
				<img src="docs/sponsors/archpro_EN_small.png" height="40"/> 
			</a> &nbsp;
		</td>
	</tr>
</table>



## Credits

* The multi-res-octree algorithms used by this viewer were developed at the Vienna University of Technology by Michael Wimmer and Claus Scheiblauer as part of the [Scanopy Project](http://www.cg.tuwien.ac.at/research/projects/Scanopy/).
* [Three.js](https://github.com/mrdoob/three.js), the WebGL 3D rendering library on which potree is built.
* [plas.io](http://plas.io/) point cloud viewer. LAS and LAZ support have been taken from the laslaz.js implementation of plas.io. Thanks to [Uday Verma](https://twitter.com/udaykverma) and [Howard Butler](https://twitter.com/howardbutler) for this!
* [Harvest4D](https://harvest4d.org/) Potree currently runs as Master Thesis under the Harvest4D Project
* Christian Boucheny (EDL developer) and Daniel Girardeau-Montaut ([CloudCompare](http://www.danielgm.net/cc/)). The EDL shader was adapted from the CloudCompare source code!
* [Martin Isenburg](http://rapidlasso.com/), [Georepublic](http://georepublic.de/en/),
[Veesus](http://veesus.com/), [Sigeom Sa](http://www.sigeom.ch/), [SITN](http://www.ne.ch/sitn), [LBI ArchPro](http://archpro.lbg.ac.at/),  [Pix4D](http://pix4d.com/) as well as all the contributers to potree and PotreeConverter and many more for their support.
