This repo was created to be a template for academic websites, as there is a shortage of those, but can be used for general research, or anything really.
I am in no way shape or form a web developer, so use at your own risk.


## Included in this template
- ```index.html```: Main homepage - a template with placeholders, the navbar leading to different sections (see ```assets/elements/nav.html```).

![Homepage template example](/assets/img/main-page.jpg)


- ```/projects/proj1.html```: Project page - a template with placeholders and the ```assets/elements/nav-simpler.html``` navigation bar.

![Project page template example](/assets/img/project-page.jpg)


## How to use
Download the files and modify them as you see fit! 
To make it easier, here is a list of the main details you need to change:
- ```index.html```: the main portion of the website, put your content here. Remember to change the ```<title>``` tag!
- ```elements/nav.html```: adjust links based on the sections in ```index.html```.
- ```assets/js/main.js```:  change ```window.owner_name``` to your name.
- ```assets/img```: delete and replace the images with yours.

To be able to enjoy future updates, I recommend adding your own modification to a new css and js files.


## Simple style modifications
This template is meant to be very easy to make small modifications to, by changing the variables defined in the ```assets/css/main.css``` file. These include:
- Accent color: ```--accent-color```, as well as other colors used.
- Main and header font: ```--main-font``` and ```--header-font```, respectively (see suggested marked out font pairings).
- Header font weight: ```--header-font-weight```.

Create your own variables and use them to modify your design!


## Automation 
- Updating the ```window.owner_name``` automatically assigns your name to both the navigation bar and the footer, and can be applied to other things as well (see ```assets/js/main.js```).
- ```elements/footer```: updates the copyright date automatically (because why not).
- ```elements/nav.html``` and ```/elements/nav-smaller.html```: two options for the navigation bar, change ```assets/js/main.js``` to control when each is applied.


## General
- This project is licensed under the terms of the MIT license.
- The template uses jQuery, Javascript and CSS.
- Temporary profile picture was generated using [Canva](https://canva.com).