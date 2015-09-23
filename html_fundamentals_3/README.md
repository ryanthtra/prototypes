# Prototype - HTML Head, internal/external styles & links

Expand your HTML knowledge with better understanding of the head element and adding basic internal and external CSS styling. As you work through this
prototype we will be building out aspects of the portfolio project v1 (Explanation Coming Soon). This prototype is based
on the information that you obtained through the following resources (<b>If you haven't gone through these then please do so now</b>).

- Readings
 - HTML Head - <a href="http://www.w3schools.com/html/html_head.asp" target="_blank">Link</a>
 - HTML CSS - <a href="http://www.w3schools.com/html/html_css.asp" target="_blank">Link</a>
- HTML Formatting & HTML Styling (<a href="https://drive.google.com/open?id=0B6mn1BHjNxTgVk96ei1wRE9pd0k" target="_blank">Presentation</a>, <a href="https://www.youtube.com/watch?v=Jnirh7CCMW8" target="_blank">Video</a>)

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
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
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
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
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
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
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
This is intentionally similar to the previous prototype to reinforce comprehension of fundamental material
> 1. Within the style tags
>       1. increase the spacing between each line of a paragraph tag
>       1. Add a border around the Experience Heading without a bottom border that is the color red
>       1. Add a border around the Experience paragraph without a top border that is black
>       1. Make the border of the paragraph tag not solid

### Feature Set 5 - External Style Sheet
> 1. Utilizing the external style sheet 
>       1. Change the background color of the experience paragraph to salmon
>       1. Change the font of the title element to the google font provided

## After Coding Details
##### 1. Save files to Git - Add all modified & created files
> Run below command in terminal tab

> `git add .`

> Saving files to Git registers the changed files in Git, allowing them to be grouped together by a message (commit)

##### 2. Package (group) all saved git files with a commit message

> Run below command in terminal tab

> `git commit -m "html_fundamentals_3 - Eric Johnson"`
> - Eric Johnson should be replaced with your First & Last name
> - Grouping files with a message allows those changes to be seen by others as a specific version of the code

##### 3. Allow others to see your changes by uploading them to the Github website

> Run below command in terminal tab

> `git push origin html_fundamentals_3`
> - When running the code above, the Git application will send all commits (<b>groupings of saved files</b>) to the remote location (<b>github.com/[your-user-name]/prototypes indicated by origin</b>), specifically to the feature branch/group <b>html_fundamentals_3</b>

##### 4. See if your feature fits with what everyone else was working on (Pull Request)

> ####Step 4.1 Open your prototypes Repo in the browser
> - The link Should follow this format github.com / [your user name] / prototypes

> ####Step 4.2 Click Pull request tab to open the pull request list

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/1.jpg?raw=true" width="350"/></a>

> ####Step 4.3 Click "New Pull request" button

> <a href="https://github.com/Learning-Fuze/prototypes/blo b/assets/assets/example/2.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/2.jpg?raw=true" width="800" /></a>

> ####Step 4.4 Comparing Changes
> During this step there are a hand full of highlighted things that need to be taken into consideration.

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/4.jpg?raw=true" width="800" /></a>

>> 1. `base fork: Learning-Fuze/prototypes`
>>   1. For all prototypes this will always remain the same
>> 1. `base: C#_userName`
>>   1. Here you will select the option that matches your username
>>   1. If you can not locate an option that has your username, contact an instructor
>> 1. `head fork: [your_user_name]/prototypes`
>>   1. Here you will select the option that matches your username / prototypes
>>   1. If you can not locate an option that has your username / prototypes, contact an instructor
>> 1. `compare: html_fundamentals_3`
>>   1. Here you will locate the branch name (or feature name) you created at the beginning of the prototype
>>   1. This will usually be the same as the name of the prototype
>> 1. Github.com will let you know if the code can be merged automatically (without needing a manual merge)
>>   1. If the text says something other than "able to merge". <b>Contact an instructor</b>
>>   1. Sometimes a manual merge is necessary, it just has a couple more steps when completing the request (done by instructors at start)
>> 1. Once we have verified #1 - #4 and noted #5, we click the "Create Pull request" button (#5 in the image above)

> ---

> ####Step 4.4 Add details into the pull request
> 1. Give the pull request a title, by default its the name of the last commit (package) message that was saved
>   1. If you set the commit message above you should get get <b>html_fundamentals_3 - [you name first & last name]</b> already pre populated in the Title field
> 1. <b>Don't assign a user.</b> (An Instructor will select who this gets assigned too)
>   1. Further into the cohort we will have students learn to review pull requests
> 1. Click on "Create pull Request"

> <a href="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" target="_blank"><img src="https://github.com/Learning-Fuze/prototypes/blob/assets/assets/example/5.jpg?raw=true" width="800" /></a>

> ---

##### 5. Collaborate on feedback

> Within the Github.com UI another developer or in this case an instructor will review the Pull Request you made - <b>Is your feature working</b>. Collaboration happens through github UI & the notifications are sent through email when comments are added to pull requests

> - Students should make modifications to there code based on the instructors feedback
> - Instructors will be giving an initial assessment based on the pull request. <b>Any additional collaboration after the instructor has been feedback will be on a requested basis only.</b>

##### 6. Pull Request Closed
> - In the LearningFuze workflow the pull requests are closed to indicate assessment has been given to the student and recorded.