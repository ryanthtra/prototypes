# Prototype - HTML Head, internal/external styles & links

Expand your HTML knowledge with better understanding of the head element and adding basic internal and external CSS styling. As you work through this
prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon). This prototype is based
on the information that you obtained through the following resources (<b>If you haven't gone through these then please do so now</b>).

- Readings
 - HTML Head - <a href="http://www.w3schools.com/html/html_head.asp" target="_blank">Link</a>
 - HTML CSS - <a href="http://www.w3schools.com/html/html_css.asp" target="_blank">Link</a>
- HTML Formatting & HTML Styling (<a href="https://docs.google.com/presentation/d/1_FMjUbUgJjMOroOlVG4wkkNO9tvgRDVQ7YS2dirDPEI">Presentation</a>, <a href="https://www.youtube.com/watch?v=Jnirh7CCMW8" target="_blank">Video</a>)

## Code Setup Details

#####1. Open PHPStorm

#####2. Navigate to prototypes

> Insert this command in the terminal tab

> `cd prototypes` & press enter

> - this changes the directory to the prototypes folder
> - If you get an error with the above command its probably because you are already within the correct directory

#####3. Create a feature grouping (*Create feature branch*)

> Insert & execute these command in the terminal tab individually

> `git checkout master` & press enter
> - The command above switches to the default branch

> `git pull https://github.com/Learning-Fuze/prototypes.git` & press enter
> - The command above downloads the newly posted prototypes and saves them to your local machine

> `git checkout -b html_fundamentals_3`
> - Creating this feature groupings allow users to modify code without causing issues with the current functioning code.
> - Any modifications to these files after <b>branching</b> can be undone
> - "html_fundamentals_3" is the branch name.

## Coding Instructions

#### Feature Set 1 - Creating Structure & Content

> 1. Start using the file "index.html" provided in the same folder as this readme
> 1. Create a basic HTML Skeleton, including
>	- doctype
>	- html
>	- head
>	- body
> 1. Make a Heading & paragraph for each of the following sections
>	1. About Me
> 		1. Heading - About Me
>		1. Paragraph - Description about yourself
>	1. Skills
> 		1. Heading - Skills
>		1. Paragraph - List out 3 skills that you want to learn and what they mean to you (description)
>	1. Experience
>		1. Heading - Experience
>		1. Paragraph - Write a paragraph that describes any of your past job experience

### Feature Set 2 - Head Elements
> 1. Within the head tags
>     1. Add 3 meta tags:
>           1. description  
>           1. keywords  
>           1. author 
>     1. Add a title with the text: [My Portfolio]
>           1. bookmark the index.html page
>           1. note by bookmarking your page, the title content will show up in the actual bookmark
>     1. Add an external google font `<link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>`
>           1. to be utilized in feature set 5: `font-family: 'Montserrat', sans-serif;` 
>     1. Create style tags
>     1. Add link to the provided  external stylesheet:
>           1. `style.css`

### Feature Set 3 - Adding Styling
This is intentionally similar to the previous prototype to reinforce 
> 1. Within the style tags
>     1. Make the about me paragraph font size equal to 12px 
>     1. Italicize the Skills header
>     1. Bold each skill title but not the description
>     1. Add the google font family to the Experience header
>     1. Add a background color of green to the experience paragraph
>     1. Change the About Me header text to be your favorite color
>     1. Make the about me paragraph font size equal to 12px
>     1. Italicize the Skills header 
>     1. Bold each skill title but not the description
>     1. Add the font family of Arial to the Experience header
>     1. Add a background color of green to the experience paragraph

### Feature Set 4 - Research other formatting options

> 1. Within the style tags
>       1. increase the spacing between each line of a paragraph tag
>       1. Add a border around the Experience Heading without a bottom border that is the color red
>       1. Add a border around the Experience paragraph without a top border that is black
>       1. Make the border of the paragraph tag not solid

### Feature Set 5 - External Style Sheet
> 1. Utilizing the external style sheet 
>       1. Change the background color of the experience paragraph to salmon
>       1. Change the font of the title element to the google font provided
